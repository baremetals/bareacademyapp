import React from 'react'
import TopBar from './TopBar'
import LeftSideBar from './LeftSideBar'
import SmallFooter from './SmallFooter'

import {
  PageContainer,
  InnerContainer,
} from "styles/common.styles";


const Dashboard = ({ children}: any) => {
  return (
    <>
      <PageContainer>
        <LeftSideBar />
        <InnerContainer>
          <TopBar />
          {children}
          <SmallFooter />
        </InnerContainer>
      </PageContainer>
    </>
  );
};

export default Dashboard
