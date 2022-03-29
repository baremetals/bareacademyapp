import React from "react";
import Head from "next/head";
import Register from "components/Auth/Register";
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "lib/noAuth";
import Footer from 'components/Footer/Footer';


function SignUp() {
  useNoAuth();
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Signup</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Signup"
          key="title"
        />
        <meta
          name="description"
          content="Register and checkout all the latest courses."
        />
        <meta property="og:type" content="login" />
        <link rel="canonical" href="https://baremetals.io/auth/signup" />
        <meta property="og:url" content="https://baremetals.io/auth/signup" />
        <meta property="og:image" content="/assets/images/reg.svg" />
        <meta property="og:image:width" content="450" />
        <meta property="og:image:height" content="300" />
      </Head>
      <Register />
      <Footer />
    </>
  );
}

export default withApollo({ ssr: false })(SignUp);