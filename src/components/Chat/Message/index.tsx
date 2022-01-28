import React, { useEffect, useState, useRef } from "react";
import { useQuery } from "@apollo/client";
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

import {
  SearchAllChatsByUserIdDocument,
  User,
  useNewChatMessageSubscription,
} from "generated/graphql";

import { ChatBoxTop, MessageGroup } from '../msg.styles';
import Chatform from "../ChatForm";

type MessagePageType = {
  body: string;
  createdBy: string;
  id: string;
  createdOn: string;
  isRead: boolean;
  receiver: User;
  sender: User;
};

function Message(props: any) {
  const router = useRouter();
  const { username } = router.query;
  const { user: user } = useAppSelector(isUser);
  // const [filteredId, setFilteredId] = useState("");
  const pathname = router.pathname;

  const { ...result } = useQuery(SearchAllChatsByUserIdDocument, {
    variables: {
      username,
    },
  });


  // console.log(chatData);

  const { data } = useNewChatMessageSubscription();
  const newChatMessage = data?.newChatMessage;
  const messages = result.data?.searchAllChatsByUserId.chatMsgs || [];
  // const errorMessages = result.data?.searchAllChatsByUserId.messages;
  const [msgArray, setMsgArray] = useState([]);
  const [chatId, setChatId] = useState("" || undefined);

  // console.log(result.data?.searchAllChatsByUserId);
  // console.log(messages);

  const me: string | undefined | any = user?.id;
  const scrollUpdate: any = useRef(null || undefined);

  useEffect(() => {
    if (messages && messages.length > 0) {
      scrollUpdate.current.scrollIntoView({
        behavior: "instant",
        block: "end",
      });
    }
  }, [messages, msgArray]);

  useEffect(() => {
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
      const id = messages[0].chat.id
      // console.log(id)
      setChatId(id)
    }
  })

  if (!result.data || result.loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <ChatBoxTop>
        <MessageGroup>
          {pathname !== "/messages" && (
            <ScrollChat ref={scrollUpdate}>
              {result.error || !messages || (msgArray.length === 0 && null)}

              {!result.loading &&
                [...messages, ...msgArray].map((msg: any, id: any) =>
                  me === msg.sender.id ? (
                    <OwnerMessageWrap key={id}>
                      <MessageTop>
                        <MessageImg
                          alt="Message image"
                          src={msg.sender.profileImage}
                        />
                        <OwnerMessageText>{msg.body}</OwnerMessageText>
                      </MessageTop>
                      <MessageDateTime>
                        {dayjs(msg.createdOn).fromNow()}
                      </MessageDateTime>
                    </OwnerMessageWrap>
                  ) : (
                    <MessageWrap key={id}>
                      <MessageTop>
                        <MessageImg
                          alt="Message image"
                          src={msg.sender.profileImage}
                        />
                        <MessageText>{msg.body}</MessageText>
                      </MessageTop>
                      <MessageDateTime>
                        {dayjs(msg.createdOn).fromNow()}
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
