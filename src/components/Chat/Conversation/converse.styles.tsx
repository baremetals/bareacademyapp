import styled from 'styled-components'

export const ConversationWrap = styled.div`
display: flex;
align-items: center;
padding: 0.75rem;
border-radius: 0.75rem;
cursor: pointer;
&:hover {
  background-color: rgba(97, 94, 240, 0.06);
}
`;

export const ConversationWrapColored =styled.div`
display: flex;
align-items: center;
padding: 0.75rem;
border-radius: 0.75rem;
cursor: pointer;
background-color : #C1C1C1;
`;


export const ConversationImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  object-fit: cover;
  margin-right: 1rem;
`;
export const ConversationUserName = styled.span`
  font-weight: 500;
`;

export const ConversationUnread = styled.span`
  padding : 0.5rem;
  background-color : #7755e2;
  color : black;
  font-size : 12px;
  border-radius : 50%;
  margin-left : 1rem;
`;