import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import {
  ProfileRightTopWrap,
  ProfileRightBottomWrap,
} from "components/Profile/profile.styles";

import ProfileRightCard from "components/Profile/ProfileRightCard";
import UserFeed from "components/Profile/UserFeed";
import ProfileHeader from './ProfileHeader';
import { client } from 'lib/initApollo';
import {
  GetUserBySlugIdDocument,
  GetUserBySlugIdQueryResult,
} from "generated/graphql";
import Dashboard from 'components/Dashboard';
import { ProfileWrapGroup, PageWrapGroup } from "../../styles/common.styles";
import RightSideBar from 'components/Dashboard/RightSideBar';

const Profile = () => {
  const router = useRouter();
  const { user: user } = useAppSelector(isUser);
  const { userIdSlug } = router.query;

  const [userInfo, setUserInfo] = useState({
    profileImage: "",
    backgroundImg: "",
    fullName: "",
    description: "",
    location: "",
    username: "",
  });


  const getUserDetails = async () => {
    const { data } = await client.query<GetUserBySlugIdQueryResult>({
      query: GetUserBySlugIdDocument,
      variables: {
        userIdSlug,
      },
    });

    const { getUserBySlugId }: any = data;
    
    if (getUserBySlugId) setUserInfo(getUserBySlugId);
    // console.log(data);
  };

  useEffect(() => {
    let mounted = true;

    if (user?.userIdSlug !== userIdSlug) {
      if (mounted) {
        getUserDetails();
      }
    }
    return () => {
      mounted = false;
    };
  }, [user, userIdSlug]);



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
            />
          </ProfileRightBottomWrap>
        </PageWrapGroup>
        <RightSideBar>
          <ProfileRightCard city={userInfo.location} coursesTaken={20} />
        </RightSideBar>
      </ProfileWrapGroup>
    </Dashboard>
  );
}

export default Profile
