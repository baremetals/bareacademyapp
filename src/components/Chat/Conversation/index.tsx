import React from 'react'
import Link from "next/link";
import {
  ConversationWrap,
  ConversationImg,
  ConversationUserName,
  ConversationUnread
} from "./converse.styles";

interface PageProps {
  username: string;
  slug: string;
  image: string;
  id: string | undefined;
  count : number 
  // chatId: string | undefined;
}

function Conversation({ username, slug, image , count }: PageProps) {

  console.log({username});
  
  return (
    <>
      <ConversationWrap >
        <Link href={`/messages/${slug}/?username=${username}`}>
        <ConversationImg alt="image of the recipient" src={image} />
        </Link>
        <Link href={`/messages/${slug}/?username=${username}`}>
        <ConversationUserName>
          {username} 
        </ConversationUserName>
       
        </Link>
        {
            count > 0 ? 
        <Link href={`/messages/${slug}/?username=${username}`}>
          
        <ConversationUnread>
        {count}
        
        </ConversationUnread>
        </Link>
        :null
}
        
      </ConversationWrap>
    </>
  );
}

export default Conversation
