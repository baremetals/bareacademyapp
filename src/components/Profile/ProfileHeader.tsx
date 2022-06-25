import React from "react";
// import { useRouter } from "next/router";
import {
  // MessageButtonWrap,
  ProfileCover,
  ProfileCoverImage,
  ProfileInfo,
  UserDescription,
  UserName,
  UserProfileImage,
} from "./profile.styles";
// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";
// import Link from "next/link";

type profilePageProps = {
  backgroundImg: string | undefined;
  profileImage: string | undefined;
  fullName: string | undefined;
  description: string | undefined;
  username: string | undefined;
};
const ProfileHeader = ({
  backgroundImg,
  profileImage,
  fullName,
  description,
  username,
}: profilePageProps) => {
  // const router = useRouter();
  // const { user: user } = useAppSelector(isUser);

  return (
    <>
      <ProfileCover>
        <ProfileCoverImage alt="user profile cover image" src={backgroundImg} />
        <UserProfileImage alt="user profile image" src={profileImage} />
      </ProfileCover>
      <ProfileInfo>
        <UserName>{fullName || username}</UserName>

        {/* <Link href={`/messages/${username}`}>
          <MessageButtonWrap>
            <button type="button">contact {username}</button>
          </MessageButtonWrap>
        </Link> */}
        <br />
        <UserDescription>{description}</UserDescription>
      </ProfileInfo>
    </>
  );
};

export default ProfileHeader;
