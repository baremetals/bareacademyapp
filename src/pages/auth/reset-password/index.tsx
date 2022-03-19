import React from "react";
import Head from "next/head";
import PasswordReset from "components/Auth/PasswordReset";
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "lib/noAuth";

const ResetPassword = () => {
  useNoAuth();
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Reset Pasword</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Reset Password"
          key="title"
        />
        <meta name="description" content="Reset your baremetals.io password" />
        <meta property="og:type" content="reset-password" />
        <link
          rel="canonical"
          href="https://baremetals.io/auth/reset-password"
        />
        <meta
          property="og:url"
          content="https://baremetals.io/auth/reset-password"
        />
        <meta property="og:image" content="/assets/images/forgot.svg" />
        <meta property="og:image:width" content="450" />
        <meta property="og:image:height" content="300" />
      </Head>
      <PasswordReset />
    </>
  );
};

export default withApollo({ ssr: false })(ResetPassword);
