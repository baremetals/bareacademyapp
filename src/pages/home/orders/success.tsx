import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from 'next';
// import { useRouter } from "next/router";
import axios from 'axios';
import MessageTemplate from "components/EmailTemplate/MsgTemplate";

type errorProps = {
  data: {
    message: string,
    name: string,
    status: number
  }
}

type successProps = {
  data: {
    id: 1,
    attributes: {
      // eslint-disable-next-line camelcase
      checkout_session: string,
      status: string,
      total: number,
      createdAt: string,
      updatedAt: string,
      publishedAt: string,
      quantity: number
    }
  }
};

type pagePros = successProps | errorProps;


const Success = (props: pagePros) => {
  console.log(props);
  const data = {
    message: "Your Payment was successfully processed.",
    route: "/home",
    note: "Thanks for your purchase"
  }

  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Orders </title>
        <meta
          property="og:title"
          content="Thank you for your purchase"
          key="title"
        />
        <meta name="description" content="Thank you for your purchase" />
        <meta property="og:image:width" content="100%" />
        <meta property="og:image:height" content="auto" />
      </Head>
      <MessageTemplate data={data}></MessageTemplate>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  // eslint-disable-next-line camelcase
  const { session_id } = ctx.query;
  const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
  const cookies = JSON.parse(ctx.req.cookies.bareacademy);
  const { jwt } = cookies;
  const token = `Bearer ${jwt}`;
  console.log(session_id)

  const fetchOrder = async () => {
    try {
      return (
        await axios({
         method: "POST",
         url: `${baseUrl}/orders/confirm`,
         headers: {
           Accept: "application/json",
           Authorization: `Bearer ${token}`,
         },
         data: { checkout_session: session_id },
       })
      ).data

    } catch (err: any) {
      // console.log(err?.response.data.error)
      return err?.response?.data?.error;
      // throw err;
    }
  }

  // eslint-disable-next-line camelcase
  if (session_id === undefined) {
    const resp = {
      message: 'string',
      name: 'Error',
      status: 400,
    };
    return {
      props: { data: resp }, // will be passed to the page component as props
    };
  }
  
  // console.log(session_id);
  const { data } = await fetchOrder()

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default Success;
