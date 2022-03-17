import React from 'react'
import Head from "next/head";
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "lib/noAuth";
import ResendEmailConfirmation from 'components/Auth/EmailConfirmationPage';
const EmailConfirmation = () => {
    useNoAuth();
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
      <ResendEmailConfirmation />
    </>
  );
}

export default withApollo({ ssr: false })(EmailConfirmation);