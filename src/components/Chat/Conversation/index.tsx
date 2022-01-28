import React from 'react'
import Link from "next/link";
import {
  ConversationWrap,
  ConversationImg,
  ConversationUserName,
} from "./converse.styles";

interface PageProps {
  username: string;
  image: string;
  id: string | undefined;
  // chatId: string | undefined;
}

function Conversation({ username, image, id }: PageProps) {
  return (
    <>
      <ConversationWrap>
        <Link href={`http://localhost:3000/messages/${username}`}>
          <ConversationImg alt="image of the recipient" src={image} />
        </Link>
        <Link href={`http://localhost:3000/messages/${username}`}>
          <ConversationUserName>{username}</ConversationUserName>
        </Link>
      </ConversationWrap>
    </>
  );
}

export default Conversation
