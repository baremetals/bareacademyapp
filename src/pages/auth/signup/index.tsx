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
          <title>Baretutorials</title>
          <meta
            name="description"
            content="Tutorial site for learning web and software development"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Register />
        <Footer />
    </>
  );
}

export default withApollo({ ssr: false })(SignUp);