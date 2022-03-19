import React from 'react'
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import TopBar from './TopBar'
import LeftSideBar from './LeftSideBar'
import SmallFooter from './SmallFooter'

import {
  PageContainer,
  InnerContainer,
} from "styles/common.styles";


const Dashboard = ({ children}: any) => {
  const { user: user } = useAppSelector(isUser);
  return (
    <>
      <PageContainer>
        {user?.id && <LeftSideBar />}
        <InnerContainer>
          {user?.id && <TopBar />}
          {children}
          {user?.id && <SmallFooter />}
        </InnerContainer>
      </PageContainer>
    </>
  );
};

export default Dashboard
