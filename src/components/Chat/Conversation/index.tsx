import React from 'react'
import Link from "next/link";
import {
  ConversationWrap,
  ConversationImg,
  ConversationUserName,
} from "./converse.styles";

interface PageProps {
  username: string;
  slug: string;
  image: string;
  id: string | undefined;
  // chatId: string | undefined;
}

function Conversation({ username, slug, image }: PageProps) {
  return (
    <>
      <ConversationWrap >
        <Link href={`/messages/${slug}`}>
        <ConversationImg alt="image of the recipient" src={image} />
        </Link>
        <Link href={`/messages/${slug}`}>
        <ConversationUserName>
          {username}
        </ConversationUserName>
        </Link>
      </ConversationWrap>
    </>
  );
}

export default Conversation
