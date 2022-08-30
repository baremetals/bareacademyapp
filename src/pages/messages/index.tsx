import React from "react";
import Head from "next/head";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import { useIsAuth } from 'lib/isAuth';
import ChatSideBar from 'components/Chat/ChatSideBar';

function Messages() {
  useIsAuth();
  return (
    <>
        <Head>
          <title>Baretutorials</title>
          <meta
            name="description"
            content="Tutorial site for learning web and software development"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ChatSideBar />
      </>
  );
}
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    return {
      props: {},
    };
  }
);
export default Messages;
