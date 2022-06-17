import React, { useState } from 'react'

// import { useRouter } from "next/router";
// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";

import {
  ProfileRightTopWrap,
  ProfileRightBottomWrap,
} from "components/Profile/profile.styles";

import ProfileRightCard from "components/Profile/ProfileRightCard";
import UserFeed from "components/Profile/UserFeed";
import ProfileHeader from './ProfileHeader';


import Dashboard from 'components/Dashboard';
import { ProfileWrapGroup, PageWrapGroup } from "../../styles/common.styles";
import RightSideBar from 'components/Dashboard/RightSideBar';
// import { ErrorMsg } from 'components/Input';
import { UsersPermissionsUser } from 'generated/graphql';

const Profile = (props: { props: { id: string, attributes: UsersPermissionsUser } }) => {
  const {
    id,
    attributes: {
      backgroundImg,
      img,
      fullName,
      description,
      location,
      username,
      createdAt,
      posts,
    },
  } = props?.props;

  // console.log(props?.props);

  // if (!data || loading) {
  //   return <div>loading...</div>;
  // }
  // if (error) return <ErrorMsg>{error}</ErrorMsg>;

  // console.log(data?.data?.usersPermissionsUser?.data);
  // console.log(props)

  // console.log(student?.data?.attributes?.courses?.data);

  const [userInfo] = useState({
    profileImage: img as string,
    backgroundImg: backgroundImg as string,
    fullName: fullName as string,
    description: description as string,
    location: location as string,
    username: username as string,
    joined: createdAt as string,
    id: id as string,
  });

  return (
    <Dashboard>
      <ProfileWrapGroup>
        <PageWrapGroup>
          <ProfileRightTopWrap>
            <ProfileHeader {...userInfo} />
          </ProfileRightTopWrap>
          <ProfileRightBottomWrap>
            <UserFeed
              backgroundImg={userInfo.backgroundImg}
              profileImage={userInfo.profileImage}
              fullName={userInfo.fullName}
              description={userInfo.description}
              posts={posts}
            />
          </ProfileRightBottomWrap>
        </PageWrapGroup>
        <RightSideBar>
          <ProfileRightCard
            city={userInfo.location}
            userId={userInfo.id}
            joined={userInfo.joined}
          />
        </RightSideBar>
      </ProfileWrapGroup>
    </Dashboard>
  );
};

export default Profile
