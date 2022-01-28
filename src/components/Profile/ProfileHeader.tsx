import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { MessageButtonWrap, ProfileCover, ProfileCoverImage, ProfileInfo, UserDescription, UserName, UserProfileImage } from './profile.styles';
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import Link from 'next/link';

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
  username
}: profilePageProps) => {
  const router = useRouter();
  const { user: user } = useAppSelector(isUser);
  const { userIdSlug } = router.query;
  // console.log(userIdSlug);
  const [loggedIUser, setLoggedIUser] = useState(false);

  useEffect(() => {
    if (user?.userIdSlug === userIdSlug) {
      setLoggedIUser(true);
    }
  }, [user, userIdSlug]);
  return (
    <>
      {loggedIUser && (
        <>
          <ProfileCover>
            <ProfileCoverImage
              alt="user profile cover image"
              src={user?.backgroundImg}
            />
            <UserProfileImage
              alt="user profile image"
              src={user?.profileImage}
            />
          </ProfileCover>
          <ProfileInfo>
            <UserName>{user?.fullName}</UserName>
            <UserDescription>{user?.description}</UserDescription>
          </ProfileInfo>
        </>
      )}
      {!loggedIUser && (
        <>
          <ProfileCover>
            <ProfileCoverImage
              alt="user profile cover image"
              src={backgroundImg}
            />
            <UserProfileImage alt="user profile image" src={profileImage} />
          </ProfileCover>
          <ProfileInfo>
            <UserName>{fullName}</UserName>
            <UserDescription>{description}!</UserDescription>
            <Link href={`/messages/${username}`}>
              <MessageButtonWrap>
                <button
                  type="button"
                >
                  contact {username}
                </button>
              </MessageButtonWrap>
            </Link>
          </ProfileInfo>
        </>
      )}
    </>
  );
};

export default ProfileHeader
