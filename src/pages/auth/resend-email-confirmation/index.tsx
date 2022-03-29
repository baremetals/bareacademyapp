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
        <title>Bare Metals Aacademy | Resend email confirmation</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Resend email confirmation"
          key="title"
        />
        <meta name="description" content="Resend email confirmation" />
        <meta property="og:type" content="resend-email-confirmation" />
        <link
          rel="canonical"
          href="https://baremetals.io/auth/resend-email-confirmation"
        />
        <meta
          property="og:url"
          content="https://baremetals.io/auth/resend-email-confirmation"
        />
        <meta property="og:image" content="/assets/images/activate.svg" />
        <meta property="og:image:width" content="450" />
        <meta property="og:image:height" content="300" />
      </Head>
      <ResendEmailConfirmation />
    </>
  );
}

export default withApollo({ ssr: false })(EmailConfirmation);