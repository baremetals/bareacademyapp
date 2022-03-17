import React from 'react'
import Head from "next/head";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import SupportPage from 'components/SuppportPage'
import { useIsAuth } from "lib/isAuth";

function Support() {
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
        <SupportPage />
      </>
    )
}
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    return {
      props: {},
    };
  }
);

export default Support
