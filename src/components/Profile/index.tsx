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
import { ErrorMsg } from 'components/Input';

const Profile = (props: { props: { data: any; loading: any; error: any; }; }) => {

  const { data, loading, error } = props.props;

  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  // console.log(data?.data?.usersPermissionsUser?.data);
  // console.log(data) 
  const userData = data?.data?.usersPermissionsUsers?.data![0]
    ? data?.data?.usersPermissionsUsers?.data![0]
    : data?.data?.usersPermissionsUser?.data;
  const user = userData?.attributes;
  const { posts } = user
  const { student } = user;
  const courses = student?.data?.attributes?.courses?.data;
  // console.log(student?.data?.attributes?.courses?.data);

  const [userInfo] = useState({
    profileImage: user?.img as string,
    backgroundImg: user?.backgroundImg as string,
    fullName: user?.fullName as string,
    description: user?.description as string,
    location: user?.location as string,
    username: user?.username as string,
    joined: user?.createdAt as string,
    courseCount: student?.data?.attributes?.courseCount as number
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
            coursesTaken={userInfo.courseCount}
            joined={userInfo.joined}
            courses={courses}
          />
        </RightSideBar>
      </ProfileWrapGroup>
    </Dashboard>
  );
}

export default Profile
