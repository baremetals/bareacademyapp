import React from "react";
import styled from "styled-components";

const Container = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const UserImageWrap = styled.div`
  margin-right: 10px;
  position: relative;
`;
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserStatus = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: limegreen;
  position: absolute;
  top: -2px;
  right: 0;
  border: 2px solid white;
`;
const UserTitle = styled.span`
  font-weight: 500;
`;

function OnlineUsers() {
  return (
    <>
      <Container>
        <UserImageWrap>
          <UserImg alt="User Image" src="/D.jpg" />
          <UserStatus></UserStatus>
        </UserImageWrap>
        <UserTitle></UserTitle>
      </Container>
      <Container>
        <UserImageWrap>
          <UserImg alt="User Image" src="/prettygirl.jpg" />
          <UserStatus></UserStatus>
        </UserImageWrap>
        <UserTitle></UserTitle>
      </Container>
      <Container>
        <UserImageWrap>
          <UserImg alt="User Image" src="/Aleah.jpg" />
          <UserStatus></UserStatus>
        </UserImageWrap>
        <UserTitle></UserTitle>
      </Container>
      
    </>
  );
}

export default OnlineUsers;
