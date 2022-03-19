
import React from "react";
import Head from "next/head";
import Login from "components/Auth/Login";
import { useNoAuth } from "lib/noAuth";
import { withApollo } from "utils/withApollo";
import Footer from 'components/Footer/Footer';


function SignIn() {
  useNoAuth()
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Signin</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Signin"
          key="title"
        />
        <meta
          name="description"
          content="Sign in to continue with your learning experience"
        />
        <meta property="og:type" content="login" />
        <link rel="canonical" href="https://baremetals.io/auth/signin" />
        <meta property="og:url" content="https://baremetals.io/auth/signin" />
        <meta property="og:image" content="/assets/images/login.svg" />
        <meta property="og:image:width" content="450" />
        <meta property="og:image:height" content="300" />
      </Head>
      <Login />
      <Footer />
    </>
  );
}

export default withApollo({ ssr: false })(SignIn);