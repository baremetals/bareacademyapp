import OnlineUsers from 'components/Dashboard/Forum/OnlineUsers';
import React from 'react'
import {
  ImageWrapper,
  Image,
  ImageText,
  RightSideTitle,
  UsersLists,
  AdCardWrapper,
} from "./rightside.styles";



const AdCardOne = () => {
    return (
      <AdCardWrapper>
        <ImageWrapper>
          <Image alt="" src="/assets/images/react.svg" />
          <ImageText>
            something happened to me the other day, madness bro!
          </ImageText>
        </ImageWrapper>
        <RightSideTitle>Online Users</RightSideTitle>
        <UsersLists>
            <OnlineUsers />
          </UsersLists>
        
      </AdCardWrapper>
    );
}

export default AdCardOne
