import React from "react";
import Head from "next/head";
import EmailTemplate from "components/EmailTemplate";
import { useNoAuth } from "lib/noAuth";
import { useRouter } from 'next/router';

const message: string =
  "We've just sent you a link to reset your password. Any problems?";
const ResetEmail = () => {
  useNoAuth();
  const router = useRouter();
  setTimeout(() => {
    router.push("/auth/signin");
  }, 10000);
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Check your email</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Check your email"
          key="title"
        />
        <meta
          name="description"
          content="check your email to reset the password"
        />
        <meta property="og:type" content="reset-email" />
        <link
          rel="canonical"
          href="https://baremetals.io/auth/reset-password/reset-email"
        />
        <meta
          property="og:url"
          content="https://baremetals.io/auth/reset-password/reset-email"
        />
      </Head>
      <EmailTemplate message={message}></EmailTemplate>
    </>
  );
};

export default ResetEmail;
