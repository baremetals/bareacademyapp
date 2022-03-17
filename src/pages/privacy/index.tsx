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
          <title>Baretutorials</title>
          <meta
            name="description"
            content="Tutorial site for learning web and software development"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PrivacyPage />
      </>
    )
}

export default withApollo({ ssr: false })(Privacy);
