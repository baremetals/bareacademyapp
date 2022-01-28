import styled from "styled-components";

import { MdExpandMore } from "react-icons/md";

export const CommentCard = styled.div`
  padding: 1.875rem;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  @media (max-width: 991px) {
    padding: 1rem;
  }
`;

export const CommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const CommentLeftWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const UserProfileImge = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.75rem;
  object-fit: cover;
  margin-right: 1rem;
  @media (max-width: 991px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const CommentText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  flex: 1 0 0%;
  align-self: center;
  @media (max-width: 991px) {
    font-size: 0.75rem;
  }
`;

// export const CommentDate = styled.span`
//   font-size: 0.75rem;
//   color: #253ad8;
//   align-self: center;
//   padding-left: 0.5rem;
//   @media (max-width: 767px) {
//     min-width: 100%;
//     padding-left: 3.5rem;
//   }
// `;
export const CommentDate = styled.span`
  font-size: 0.75rem;
  color: #b5b5b5;
  display: block;
  font-weight: normal;
  @media (max-width: 991px) {
    font-size: 0.625rem;
  }
`;

export const CommentTopRightWrap = styled.div``;

export const ExpandIcon = styled(MdExpandMore)`
  font-size: 1.25rem;
  cursor: pointer;
`;

export const CommentHorizontalRule = styled.hr`
  width: 100%;
  height: 1px;
  border-radius: 1rem;
  border: none;
  background-color: #d9d9d9;
  margin: 1.5rem auto;
`;
