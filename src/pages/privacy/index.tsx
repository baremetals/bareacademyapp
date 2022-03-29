import React from 'react'
import Head from "next/head";
import PrivacyPage from "components/PrivacyPage";
import { useNoAuthPages } from "lib/noAuth";
import { withApollo } from 'utils/withApollo';
export const Privacy = () => {
    useNoAuthPages();
    return (
      <>
        <Head>
          <title>Bare Metals Aacademy | Privacy Settings</title>
          <meta
            property="og:title"
            content="Bare Metals Aacademy | Privacy Settings"
            key="title"
          />
          <meta
            name="description"
            content="Tutorial site for learning web and software development"
          />
          <meta property="og:type" content="privacy" />
          <meta property="og:url" content="https://baremetals.io/privacy" />
          <link rel="canonical" href="https://baremetals.io/privacy" />
        </Head>
        <PrivacyPage />
      </>
    );
}

export default withApollo({ ssr: false })(Privacy);
