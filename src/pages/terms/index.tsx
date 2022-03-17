import React from 'react'
import Head from "next/head";
import TermsAndConditionsPage from "components/TermsAndConditions";
import { useNoAuthPages } from "lib/noAuth";
import { withApollo } from 'utils/withApollo';

const TermsOfService = () => {
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
        <TermsAndConditionsPage />
      </>
    )
}

export default withApollo({ ssr: false })(TermsOfService);
