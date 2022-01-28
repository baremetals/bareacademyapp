import styled from "styled-components"

export const ChatContainer = styled.div`
  &:nth-child(0) ~ div {
    @media (max-width: 991px) {
      margin-left: -0.5rem;
    }
  }
`;

export const OnlineUsersWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 0.75rem;
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 0;
  }
  &:hover {
    background-color: rgba(97, 94, 240, 0.06);
  }
`;

export const OnlineUsersImageWrap = styled.div`
  width: 3rem;
  height: 3rem;
  @media (min-width: 992px) {
    margin-right: 1rem;
  }
  position: relative;
`;

export const OnlineUsersImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  object-fit: cover;
`;

export const OnlineUsersImageBadge = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: 1px solid #fff;
  background-color: limegreen;
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
`; 

export const OnlineUsersName = styled.span`
  @media screen and (max-width: 991px) {
    display: none;
  }
`;