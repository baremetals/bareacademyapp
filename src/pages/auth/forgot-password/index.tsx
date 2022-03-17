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
        <title>Baretutorials</title>
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChangePassword />
    </>
  );
}

export default withApollo({ ssr: false })(ForgotPassword);
