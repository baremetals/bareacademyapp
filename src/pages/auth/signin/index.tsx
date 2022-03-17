
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
        <title>Baretutorials</title>
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
      <Footer />
    </>
  );
}

export default withApollo({ ssr: false })(SignIn);