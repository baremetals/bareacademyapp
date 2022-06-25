import React from 'react';
import Head from "next/head";
import { useRouter } from "next/router";
import EmailTemplate from 'components/EmailTemplate'
import { useNoAuth } from "lib/noAuth";


const message: string =
  "We've just sent you a link to verify your email address. Any problems?";
const ActivateEmail = () => {
  useNoAuth();
  const router = useRouter();
  setTimeout(() => {
    router.push("/auth/signin");
  }, 10000);
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Activate Account</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Activate Account"
          key="title"
        />
        <meta
          name="description"
          content="check your email to verify the email address."
        />
        <meta property="og:type" content="activate-account" />
        <link
          rel="canonical"
          href="https://baremetals.io/auth/signup/activate-email"
        />
        <meta
          property="og:url"
          content="https://baremetals.io/auth/signup/activate-email"
        />
      </Head>
      <EmailTemplate message={message}></EmailTemplate>
    </>
  );
};

export default ActivateEmail;
