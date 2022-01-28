import React from 'react'
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import { useIsAuth } from 'lib/isAuth';
import ChatContainer from 'components/Chat/ChatContainer';
// import { client } from 'lib/initApollo';
// import { SearchAllChatsByUserIdDocument, SearchAllChatsByUserIdQueryResult } from 'generated/graphql';

function Chat() {
  // console.log(props)
  useIsAuth();
    return (
      <>
        <ChatContainer />
      </>
    );
}
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {

    // const { username } = ctx.query;

    // console.log(username)

    // const data = await client.query<SearchAllChatsByUserIdQueryResult>({
    //   query: SearchAllChatsByUserIdDocument,
    //   variables: {
    //     username: username as string,
    //   },
    // });

    // console.log(data)

    return {
      props: {},
    };
  }
);
export default Chat
