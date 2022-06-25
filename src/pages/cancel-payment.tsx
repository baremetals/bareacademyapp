import React, { useEffect } from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
// import axios from "axios";
// import MessageTemplate from "components/EmailTemplate/MsgTemplate";

const CancelPayment = () => {
  const router = useRouter();
  // console.log('i am the sessions id - ',router.query.session_id);

  useEffect(() => {
    setTimeout(() => {
      router.push(`/home/orders/cancel?session_id=${router.query.session_id}`);
    }, 0);
  });

  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Order Cancelled </title>
        <meta property="og:title" content="Payment cancelled" key="title" />
        <meta name="description" content="Payment cancelled" />
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
export default CancelPayment;
