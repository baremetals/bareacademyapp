import React from 'react'
import { PageHeading, PageWrapGroup, ProfileWrapGroup } from 'styles/common.styles'
import Dashboard from '../Dashboard'

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import RightSideBar from 'components/Dashboard/RightSideBar';
import AdCardThree from 'components/AdCards/AdCardThree';

const Home = () => {
    const { user: user } = useAppSelector(isUser);
    return (
      <>
        <Dashboard>
          <PageHeading>{user?.fullName} Dashboard</PageHeading>
          <ProfileWrapGroup>
            <PageWrapGroup></PageWrapGroup>
            <RightSideBar>
              <AdCardThree />
            </RightSideBar>
          </ProfileWrapGroup>
        </Dashboard>
      </>
    );
}

export default Home
