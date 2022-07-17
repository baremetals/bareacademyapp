import React, { useEffect, useState, useRef } from "react";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { useRouter } from "next/router";
import { useSockets } from "context/socket.context";
import {
  MessageWrap,
  MessageTop,
  MessageImg,
  MessageText,
  MessageDateTime,
  OwnerMessageWrap,
  OwnerMessageText,
  ScrollChat,
} from "./message.styles";

import { ChatBoxTop, MessageGroup } from '../msg.styles';
import Chatform from "../ChatForm";
import User from 'models/User';

type MessagePageType = {
  body: string;
  updatedAt: Date;
  id: string;
  createdAt: Date;
  isRead: boolean;
  receiver: User;
  sender: User;
  chat: {
    id: string;
  }
};

type socketMessage = {
  msg: MessagePageType;
  to: string;
  from: string;
};

// type chatType = {
//   id: string;
// }

function Message() {
  const router = useRouter();
  const { socket } = useSockets();
  const { slug } = router.query;

  const { user: user } = useAppSelector(isUser);
  const pathname = router.pathname;

  // console.log();

  // eslint-disable-next-line no-unused-vars
  const [newChatMessage, setNewChatMessage] = useState<socketMessage>();
  const [msgArray, setMsgArray] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState<Object>({});
  // const [users, setUsers] = useState([]);

  const me: string | undefined | any = user?.id;
  const scrollUpdate: any = useRef(null || undefined);


  useEffect(() => {
    if (socket == null) return;
    socket.emit("load all messages", { slug }, (error: any, d: any) => {
      if (error) {
        console.log(" Something went wrong please try again later.", error);
      }
    });
    socket.off("message");
  }, [socket, slug]);

  useEffect(() => {
    if (messages && messages.length > 0) {
      scrollUpdate.current?.scrollIntoView({
        behavior: "instant",
        block: "end",
      });
    }
  }, [messages, msgArray]);

  useEffect(() => {
    // console.log('Iam am here')
    if (newChatMessage) {
      console.log(newChatMessage);
      const newChatMessageItem = newChatMessage.msg;
      const newArrayItem: any = (prevArray: MessagePageType[]) => {
        return [...prevArray, newChatMessageItem];
      };
      if (me === newChatMessage.to && me !== newChatMessage.from)setMsgArray(newArrayItem);
      // setMsgArray(newArrayItem);
    }
  }, [newChatMessage]);

  useEffect(() => {
    if (messages && messages.length > 0) {
      const msg: MessagePageType = messages[0];
      const id = msg?.id;
      let receiverId;
      if (msg?.receiver?.id !== me) {
        receiverId = msg?.receiver?.id;
      } else {
        receiverId = msg?.sender?.id;
      }
      const data = {
        chatId: id,
        receiverId,
      };
      setChatId(data);
    }
  }, [messages]);

  useEffect(() => {
    // if (socket == null) return;
    socket.on("messages loaded", (dt) => {
      setMessages(dt);
    });
    // socket.off("messages loaded");
  }, [socket]);

  // useEffect(() => {
  //   // if (socket == null) return;
  //   socket.on("message", (dta) => {
  //     console.log(dta)
  //     if (me === dta.to || me === dta.from) {
  //       setNewChatMessage(dta.msg);
  //     }
  //     // setNewChatMessage(dta.msg);
  //   });

  //   socket.off("message");
  // }, [socket]);

  socket.on("message", (dta) => {
    console.log(dta.to, dta.from);
    // if (me === dta.to) {
    //   setNewChatMessage(dta.msg);
    // }
    setNewChatMessage(dta);
  });

  // socket.on("users", (usrs) => {
  //   console.log(usrs);
  //   // setUsers(usrs);
  // });

  return (
    <>
      <ChatBoxTop>
        <MessageGroup>
          {pathname !== "/messages" && (
            <ScrollChat ref={scrollUpdate}>
              {/* {result.error || !messages || (msgArray.length === 0 && null)} */}

              {messages &&
                [...messages, ...msgArray].map((msg: any, id: any) =>
                  me == msg?.sender?.id ? (
                    // This part shows on the right, the right is for the logged in user
                    <OwnerMessageWrap key={id}>
                      <MessageTop>
                        <MessageImg
                          alt="Message image"
                          src={msg?.sender?.img}
                        />
                        <OwnerMessageText>{msg?.body}</OwnerMessageText>
                      </MessageTop>
                      <MessageDateTime>
                        {dayjs(msg?.createdAt).fromNow()}
                      </MessageDateTime>
                    </OwnerMessageWrap>
                  ) : (
                    // This part shows on the left
                    <MessageWrap key={id}>
                      <MessageTop>
                        <MessageImg
                          alt="Message image"
                          src={msg?.sender?.img}
                        />
                        <MessageText>{msg?.body}</MessageText>
                      </MessageTop>
                      <MessageDateTime>
                        {dayjs(msg?.createdAt).fromNow()}
                      </MessageDateTime>
                    </MessageWrap>
                  )
                )}
            </ScrollChat>
          )}
        </MessageGroup>
      </ChatBoxTop>
      <Chatform props={chatId} />
    </>
  );
}

export default Message;
