import styled from 'styled-components'
import { MdDeleteForever } from "react-icons/md";
export const MessageWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  position: relative;
  padding-top: 1rem;
`;

export const OwnerMessageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1rem;
  padding-top: 1rem;
  position: relative;
  > div {
    flex-direction: row-reverse;
    left: auto;
    right: 4rem;
    img {
      margin-left: 1rem;
      margin-right: 0;
    }
  }
`;

export const OwnerMessageText = styled.p`
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background-color: #7755e2;
  color: #fff;
  max-width: 25rem;
  font-size: 0.875rem;
`;

export const MessageTop = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MessageImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  object-fit: cover;
  margin-right: 1rem;
`;

export const MessageText = styled.p`
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  background-color: #f1f1f1;
  color: #000000;
  max-width: 25rem;
  font-size: 0.875rem;
`;


export const DeleteIcon = styled(MdDeleteForever)`
  font-size: 25px;
  margin-top:10px;
`;

export const MessageDateTime = styled.div`
  font-size: 0.75rem;
  position: absolute;
  top: -0.25rem;
  left: 4rem;
`;

export const MessageOwner = styled.div`
  align-items: flex-end;
`;

export const ScrollChat = styled.div`
  overflow-y: auto;
  height: 100%;
`;