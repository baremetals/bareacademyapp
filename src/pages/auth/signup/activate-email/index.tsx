import React from 'react';
import Head from "next/head";
import EmailTemplate from 'components/EmailTemplate'
import { useNoAuth } from "lib/noAuth";


const message: string =
  "We've just sent you a link to verify your email address. Any problems?";
const ActivateEmail = () => {
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
      <EmailTemplate message={message}></EmailTemplate>
    </>
  );
};

export default ActivateEmail;
