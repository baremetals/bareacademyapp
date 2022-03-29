import React from 'react'
import styled from "styled-components";
import {
  ImageWrapper,
  Image,
  ImageText,
  RightSideTitle,
  // UsersLists,
  AdCardWrapper,
} from "./rightside.styles";
// import OnlineUsers from 'components/Dashboard/Forum/OnlineUsers';



const AdCardOne = () => {
    return (
      <AdCardWrapper>
        <Title>Recent Articles </Title>
        <ImageWrapper>
          <Image alt="" src="/assets/images/react.svg" />
          <ImageText>
            something happened to me the other day, madness bro!
          </ImageText>
        </ImageWrapper>
        <RightSideTitle></RightSideTitle>
        {/* <UsersLists>
            <OnlineUsers />
        </UsersLists> */}
      </AdCardWrapper>
    );
}

export default AdCardOne

const Title = styled.span`
  font-weight: 500;
  opacity: 0.6;
`;
