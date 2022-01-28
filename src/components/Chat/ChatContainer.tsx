import React from 'react'

import ChatSideBar from './ChatSideBar';
import Message from 'components/Chat/Message';

const ChatContainer = () => {
  
  return (
    <>
      <ChatSideBar>
        <Message />
      </ChatSideBar>
    </>
  );
}

export default ChatContainer
