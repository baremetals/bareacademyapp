import styled from 'styled-components'

export const MsgContainer = styled.div`
  height: calc(100vh - 10.75rem);
  background-color: #fff;
  box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
  border-radius: 0.625rem;
  display: flex;
  overflow: hidden;
  position: relative;
  z-index: 2;
  @media (max-width: 991px) {
    height: calc(100vh - 7.5rem);
    flex-direction: column;
  }
  .BackOverlay {
    z-index: 1;
    @media (min-width: 992px) {
      display: none;
    }
  }
`;

export const MessageGroup = styled.div`
  display: block;
`;

export const ChatMessageInputGroup = styled.div`
  position: relative;
`;

export const MsgChatMenu = styled.div`
  max-width: 21.875rem;
  min-width: 21.875rem;
  border-right: 1px solid #e5e5e5;
  @media (max-width: 1366px) {
    max-width: 17rem;
    min-width: 17rem;
  }
  @media (max-width: 991px) {
    border-right: none;
    max-width: 100%;
    min-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const MsgChatMenuWrapper = styled.div`
  padding: 0;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export const MasSearchGroup = styled.div`
  display: flex;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fff;
  position: relative;
  @media (max-width: 991px) {
    padding: 1rem;
  }
  svg {
    position: absolute;
    top: 2.375rem;
    left: 2.5rem;
    opacity: 0.5;
    @media (max-width: 991px) {
      top: 1.875rem;
      left: 1.875rem;
    }
  }
`;

export const MsgChatMenuInput = styled.input`
  width: 100%;
  border: none;
  padding: 0.875rem 1.25rem 0.875rem 3rem;
  border-radius: 0.625rem;
  background-color: #f3f3f3;
  outline: none;
`;

export const ConversationGroup = styled.div`
  padding: 1rem;
  background-color: #fff;
  max-height: calc(100% - 6rem);
  overflow-y: auto;
  @media (max-width: 991px) {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: calc(100vh - 15rem);
  }
  &.opened {
    @media (max-width: 991px) {
      display: block;
    }
  }
`;

export const ChatBoxContainer = styled.div`
  flex: auto;
`;

export const ChatBoxWrapper = styled.div`
  height: 100%;
`;

export const ChatBoxTop = styled.div`
  height: calc(100% - 6rem);
  background-color: #fff;
  display: flex;
  align-items: flex-end;
  @media (max-width: 991px) {
    padding-top: 5rem;
    height: calc(100vh - 12.5rem);
  }
  > div {
    overflow-y: auto;
    padding: 1.5rem;
    width: 100%;
    max-height: 100%;
    @media (max-width: 991px) {
      padding: 1rem;
    }
  }
`;

export const ChatBoxBottom = styled.div`
  position: relative;
  padding: 1.5rem;
  @media (max-width: 991px) {
    padding: 1rem;
  }
`;

export const ChatMessageInput = styled.textarea`
  border: 2px solid #e2e8f0;
  border-radius: 0.75rem;
  height: 3rem;
  padding: 0.75rem 3rem 0.75rem 1.25rem;
  line-height: 1.2;
  font-size: 1rem;
  width: 100%;
  resize: none;
  display: block;
  outline: none;
`;

export const ChatSubmitButton = styled.button`
  width: 3rem;
  height: 3rem;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const OnlineChatContainer = styled.div`
  max-width: 21.875rem;
  min-width: 21.875rem;
  border-left: 1px solid #e5e5e5;
  overflow-y: auto;
  @media (max-width: 1366px) {
    display: none;
  }

  @media (max-width: 991px) {
    z-index: 10;
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    min-width: auto;
    max-width: initial;
  }
`;

export const OnlineChatWrapper = styled.div`
  padding: 1rem;
  height: 100%;
  @media (max-width: 991px) {
    display: flex;
  }
`;

export const NoConversationText = styled.span`
  position: absolute;
  top: 10%;
  font-size: 50px;
  color: rgb(224, 220, 220);
  cursor: default;
`;