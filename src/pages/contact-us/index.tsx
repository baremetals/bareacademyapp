import React from "react";
import Head from "next/head";
import ContactUsPage from "components/ContactUs";
import { useNoAuthPages } from "lib/noAuth";
import { withApollo } from 'utils/withApollo';


function Contact() {
  useNoAuthPages();
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Contact Us</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Contact Us"
          key="title"
        />
        <meta
          name="description"
          content="Reach out to baremetals academy if you have any questions."
        />
        <meta property="og:type" content="contact-us" />
        <meta property="og:url" content="https://baremetals.io/contact-us" />
        <link rel="canonical" href="https://baremetals.io/contact-us" />
      </Head>
      <ContactUsPage />
    </>
  );
}

export default withApollo({ ssr: false })(Contact);
