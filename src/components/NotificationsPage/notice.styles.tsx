import styled from 'styled-components'
import { MdDeleteForever } from "react-icons/md";


export const NoticesWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
  border-radius: 0.625rem;
  padding: 1rem;
  width: 100%;
  display: flex;
  margin-bottom: 0.5rem;
`;

export const NoticeLeftWrap = styled.div`
  display: flex;
`;

export const SenderProfileImge = styled.img`
  min-width: 3.75rem;
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.75rem;
  object-fit: cover;
  margin-right: 1rem;
  @media (max-width: 991px) {
    min-width: 2.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export const NoticeMessage = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  /* color: #747070; */
  color: ${({ isRead }: { isRead : boolean}) => (isRead ? "#747070" : "#0f1111")};
  align-self: center;
  @media (max-width: 991px) {
    font-size: 0.75rem;
  }
`;

export const NoticeDate = styled.span`
  font-size: 0.75rem;
  display: block;
  color: #16addd;
  @media (max-width: 991px) {
    font-size: 0.625rem;
  }
`;

export const NoticeTopRightWrap = styled.div`
  margin-left: auto;
  padding-left: 1rem;
  align-self: center;
`;

export const DeleteIcon = styled(MdDeleteForever)`
  font-size: 2rem;
  cursor: pointer;
  display: block;
  background-color: #f511a9;
  fill: #fff;
  padding: 0.25rem;
  border-radius: 10rem;
`;