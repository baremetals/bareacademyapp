import React, { useEffect, useState, useRef } from "react";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { useRouter } from "next/router";
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
// import { useSockets } from "context/socket.context";
import User from 'models/User';

type MessagePageType = {
  body: string;
  updatedAt: Date;
  id: string;
  createdAt: Date;
  isRead: boolean;
  receiver: User;
  sender: User;
};

function Message(props: any, recipient: string) {
  const router = useRouter();
  // const { username } = router.query;
  // const { socket } = useSockets();
  const { user: user } = useAppSelector(isUser);
  // const [filteredId, setFilteredId] = useState("");
  const pathname = router.pathname;
  const { data, loading } = props?.props;

  // console.log(data);

  // eslint-disable-next-line no-unused-vars
  const [newChatMessage, setNewChatMessage] = useState();
  const messages = data?.chatMsgs.data;
  // const errorMessages = result.data?.searchAllChatsByUserId.messages;
  const [msgArray, setMsgArray] = useState([]);
  const [chatId, setChatId] = useState("" || undefined);

  const me: string | undefined | any = user?.id;
  const scrollUpdate: any = useRef(null || undefined);

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
      const newChatMessageItem = newChatMessage;
      const newArrayItem: any = (prevArray: MessagePageType[]) => {
        return [...prevArray, newChatMessageItem];
      };
      setMsgArray(newArrayItem);
    }
  }, [newChatMessage]);

  useEffect(() => {
    if (messages && messages.length > 0) {
      const id = messages[0]!.id;
      // console.log(messages);
      setChatId(id);
    }
  });

  // socket.on("message", (dta) => {
  //   setNewChatMessage(dta);
  // });

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <ChatBoxTop>
        <MessageGroup>
          {pathname !== "/messages" && (
            <ScrollChat ref={scrollUpdate}>
              {/* {result.error || !messages || (msgArray.length === 0 && null)} */}

              {!loading &&
                [...messages, ...msgArray].map((msg: any, id: any) =>
                  me == msg?.attributes?.sender?.data?.id ||
                  me == msg?.sender?.id ? (
                    // This part shows on the right, the right is for the logged in user
                    <OwnerMessageWrap key={id}>
                      <MessageTop>
                        <MessageImg
                          alt="Message image"
                          src={
                            msg?.attributes?.sender?.data?.attributes?.img
                              ? msg?.attributes?.sender?.data?.attributes?.img
                              : msg?.sender?.img
                          }
                        />
                        <OwnerMessageText>
                          {msg?.attributes?.body
                            ? msg?.attributes?.body
                            : msg?.body}
                        </OwnerMessageText>
                      </MessageTop>
                      <MessageDateTime>
                        {dayjs(
                          msg?.attributes?.updatedAt
                            ? msg?.attributes?.updatedAt
                            : msg?.updatedAt
                        ).fromNow()}
                      </MessageDateTime>
                    </OwnerMessageWrap>
                  ) : (
                    // This part shows on the left
                    <MessageWrap key={id}>
                      <MessageTop>
                        <MessageImg
                          alt="Message image"
                          src={
                            msg?.attributes?.sender?.data?.attributes?.img
                              ? msg?.attributes?.sender?.data?.attributes?.img
                              : msg?.sender?.img
                          }
                        />
                        <MessageText>
                          {msg?.attributes?.body
                            ? msg?.attributes?.body
                            : msg?.body}
                        </MessageText>
                      </MessageTop>
                      <MessageDateTime>
                        {dayjs(
                          msg?.attributes?.updatedAt
                            ? msg?.attributes?.updatedAt
                            : msg?.updatedAt
                        ).fromNow()}
                      </MessageDateTime>
                    </MessageWrap>
                  )
                )}
            </ScrollChat>
          )}
        </MessageGroup>
      </ChatBoxTop>
      <Chatform props={chatId} {...props} />
    </>
  );
}

export default Message;
