import styled from "styled-components"

export const ProfileContainer = styled.div`
  display: flex;
`;

export const ProfileRightTopWrap = styled.div`
  
`;

export const ProfileCover = styled.div`
  position: relative;
`;

export const ProfileCoverImage = styled.img`
  width: 100%;
  height: 13.75rem;
  object-fit: cover;
  display: block;
`;

export const UserProfileImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 10rem;
  object-fit: cover;
  border: 3px solid white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -3.75rem;
  margin-bottom: 1rem;
  position: relative;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.h4`
  font-size: 1.5rem;
  line-height: 1;
  margin-bottom: 0.625rem;
`;

export const UserDescription = styled.span`
  font-weight: 300;
  font-size: 0.875rem;
  display: block;
`;

export const ProfileRightBottomWrap = styled.div`
  display: flex;
  padding: 2.5rem;
  @media (max-width: 991px) {
    padding: 1rem;
  }
`;

export const MessageButtonWrap = styled.div`
  button {
    background-color: #7755e2;
    color: #fff;
    border-radius: 0.4rem;
    height: 2.25rem;
    width: 100%;
    padding: 4px;
    cursor: pointer;
  }
`;

export const MessageButton = styled.button;