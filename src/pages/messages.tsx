import React from "react";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import { useIsAuth } from 'lib/isAuth';
import ChatSideBar from 'components/Chat/ChatSideBar';
// import { client } from 'lib/initApollo';
// import { GetAllChatsByUserIdDocument, GetAllChatsByUserIdQueryResult } from 'generated/graphql';

function Messages() {
  // console.log(props);
    useIsAuth();
  return (
    <>
      <ChatSideBar />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    // const data = await client.query<GetAllChatsByUserIdQueryResult>({
    //   query: GetAllChatsByUserIdDocument,
    // });
    return {
      props: {},
    };
  }
);
export default Messages;
