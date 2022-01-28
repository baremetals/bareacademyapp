import React from 'react'

import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: flex;
`;

export const MiddleContainer = styled.div`
  flex: 6;
  display: column;
  padding: 20px;
`;

export const RightSideContainer = styled.div`
  flex: 3;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

function PageContainer({children}: any) {
    return <MainPageContainer>{children}</MainPageContainer>
}

export default PageContainer
