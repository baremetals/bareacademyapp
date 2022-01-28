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
  profileImage,
  username,
  online,
}: {
  profileImage: string ;
  username: string;
  online: boolean;
}) {
  return (
    <>
      <ChatContainer>
        <OnlineUsersWrap>
          <OnlineUsersImageWrap>
            <Link href={`/messages/${username}`}>
              <OnlineUsersImage alt="Online user image" src={profileImage} />
            </Link>

            {online && <OnlineUsersImageBadge></OnlineUsersImageBadge>}
          </OnlineUsersImageWrap>
          <Link href={`/messages/${username}`}>
            <OnlineUsersName>{username}</OnlineUsersName>
          </Link>
        </OnlineUsersWrap>
      </ChatContainer>
    </>
  );
}

export default OnlineChat;
