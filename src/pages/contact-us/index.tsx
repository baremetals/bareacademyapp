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
          <title>Baretutorials</title>
          <meta
            name="description"
            content="Tutorial site for learning web and software development"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ContactUsPage />
    </>
  );
}

export default withApollo({ ssr: false })(Contact);
