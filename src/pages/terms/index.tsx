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
          <title>Bare Metals Aacademy | Terms Of Service</title>
          <meta
            property="og:title"
            content="Bare Metals Aacademy | Terms Of Service"
            key="title"
          />
          <meta
            name="description"
            content="Tutorial site for learning web and software development"
          />
          <meta property="og:type" content="terms" />
          <meta property="og:url" content="https://baremetals.io/terms" />
          <link rel="canonical" href="https://baremetals.io/terms" />
        </Head>
        <TermsAndConditionsPage />
      </>
    );
}

export default withApollo({ ssr: false })(TermsOfService);
