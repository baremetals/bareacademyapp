import React from "react";
import Link from "next/link";

import {
  ChatContainer,
  OnlineUsersWrap,
  OnlineUsersImageWrap,
  OnlineUsersImage,
  OnlineUsersImageBadge,
  OnlineUsersName,
} from "./chat.styles";

function OnlineChat({
  img,
  username,
  slug,
  online,
  id
}: {
  img: string;
  username: string;
  slug: string;
  online: boolean;
  id?: number;
}) {
  return (
    <>
      <ChatContainer>
        <OnlineUsersWrap>
          <OnlineUsersImageWrap>
            <Link href={`/messages/${slug}/?username=${username}`}>
              <OnlineUsersImage alt="Online user image" src={img} />
            </Link>

            {online && <OnlineUsersImageBadge></OnlineUsersImageBadge>}
          </OnlineUsersImageWrap>
          <Link href={`/messages/${slug}/?username=${username}`}>
            <OnlineUsersName>{username}</OnlineUsersName>
          </Link>
        </OnlineUsersWrap>
      </ChatContainer>
    </>
  );
}

export default OnlineChat;
