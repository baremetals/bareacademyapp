import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ConversationWrap,
  ConversationImg,
  ConversationUserName,
  ConversationUnread,
  ConversationWrapColored
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
  const router = useRouter();

  const params = router.query;
  console.log({username});
  
  return (
    <>
      {params.username != username ? 
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


:
<ConversationWrapColored >
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
        
      </ConversationWrapColored>
}
    </>
  );
}

export default Conversation
