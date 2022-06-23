import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
// import axios from "axios";
// import MessageTemplate from "components/EmailTemplate/MsgTemplate";




const Success = () => {
  
  const router = useRouter();
  // console.log('i am the sessions id - ',router.query.session_id);


  setTimeout(() => {
    router.push(`/home/orders/success?session_id=${router.query.session_id}`);
  }, 5);

  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Order Confirmation </title>
        <meta
          property="og:title"
          content="Thank you for your purchase"
          key="title"
        />
        <meta name="description" content="Thank you for your purchase" />
        <meta property="og:image:width" content="100%" />
        <meta property="og:image:height" content="auto" />
      </Head>
      {/* <MessageTemplate data={data}></MessageTemplate> */}
    </>
  );
};

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default Success;
