import React from "react";
import Head from "next/head";
import ChangePassword from "components/Auth/ChangePassword";
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "lib/noAuth";

function ForgotPassword() {
  useNoAuth();
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Forgot Pasword</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Forgot Password"
          key="title"
        />
        <meta name="description" content="Reset your baremetals.io password" />
        <meta property="og:type" content="forgot-password" />
        <link
          rel="canonical"
          href="https://baremetals.io/auth/forgot-password"
        />
        <meta
          property="og:url"
          content="https://baremetals.io/auth/forgot-password"
        />
        <meta property="og:image" content="/assets/images/forgotpassword.svg" />
        <meta property="og:image:width" content="450" />
        <meta property="og:image:height" content="300" />
      </Head>
      <ChangePassword />
    </>
  );
}

export default withApollo({ ssr: false })(ForgotPassword);
