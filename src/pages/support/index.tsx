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
          <title>Bare Metals Aacademy | Support</title>
          <meta
            property="og:title"
            content="Bare Metals Aacademy | Support"
            key="title"
          />
          <meta
            name="description"
            content="Tutorial site for learning web and software development"
          />
          <meta property="og:type" content="support" />
          <meta property="og:url" content="https://baremetals.io/support" />
          <link rel="canonical" href="https://baremetals.io/support" />
        </Head>
        <SupportPage />
      </>
    );
}
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    return {
      props: {},
    };
  }
);

export default Support
