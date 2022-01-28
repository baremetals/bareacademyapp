import React from "react";
import styled from 'styled-components';
import { PageRightSide } from 'styles/common.styles';

export const RightSideContainer = styled.aside`
  flex: 3.5;
`;

export const RightSideWrapper = styled.div`
  padding: 0;
`;

const RightSideBar = ({ children }: any) => {
  return (
    <PageRightSide>
      <RightSideContainer>
        <RightSideWrapper>{children}</RightSideWrapper>
      </RightSideContainer>
    </PageRightSide>
  );
};

export default RightSideBar;
