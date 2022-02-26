import React from 'react'

import ChatSideBar from './ChatSideBar';
import Message from 'components/Chat/Message';

const ChatContainer = (props: { props: { data: any; }; }) => {
  const { data, msgData } = props.props.data;
  // console.log(data)
  return (
    <>
      <ChatSideBar props={data}>
        <Message props={msgData} />
      </ChatSideBar>
    </>
  );
}

export default ChatContainer
