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
          <title>Baretutorials</title>
          <meta
            name="description"
            content="Tutorial site for learning web and software development"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PasswordReset />
    </>
  );
};

export default withApollo({ ssr: false })(ResetPassword);
