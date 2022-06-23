import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import MessageTemplate from "components/EmailTemplate/MsgTemplate";
import { useIsAuth } from 'lib/isAuth';

type errorProps = {
  data: {
    message: string;
    name: string;
    status: number;
  };
};

type successProps = {
  data: {
    id: 1;
    attributes: {
      // eslint-disable-next-line camelcase
      checkout_session: string;
      status: string;
      total: number;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      quantity: number;
    };
  };
};

type pagePros = successProps | errorProps | any;

const Success = (props: pagePros) => {
  useIsAuth();
  // console.log(props);
  const router = useRouter();
  let data: { message: string; route: string; note: string } = {
    message: "Your Payment was successfully processed",
    route: "/home",
    note: "Thanks for your purchase",
  };
  
  if (props?.data?.status === 400 || 403 || 500) {
    data = {
      message:
        "Sorry something went wrong, please check your email for confirmation",
      route: "/home",
      note: "Thanks for your purchase",
    };
  } 

  if (props?.data?.data?.id || props?.id) {
    data = {
      message: "Your Payment was successfully processed and confirmed.",
      route: "/home",
      note: "Thanks for your purchase",
    };
  }

  setTimeout(() => {
    router.push("/home/orders");
  }, 12000);

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
      <MessageTemplate data={data}></MessageTemplate>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  // eslint-disable-next-line camelcase
  const { session_id } = ctx.query;
  const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
  const cookies = JSON.parse(ctx?.req?.cookies?.bareacademy) || {};
  // console.log(cookies);
  const { jwt, id } = cookies;
  // const token = `Bearer ${jwt}`;
  // console.log(session_id)

  const fetchOrder = async () => {
    try {
      return (
        await axios({
          method: "POST",
          url: `${baseUrl}/orders/confirm`,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${jwt}`,
          },
          data: { checkout_session: session_id },
        })
      ).data;
    } catch (err: any) {
      // console.log(err?.response.data.error)
      return err?.response?.data?.error;
      // throw err;
    }
  };

  // eslint-disable-next-line camelcase
  if (session_id === undefined) {
    const resp = {
      message: "string",
      name: "Error",
      status: 400,
    };
    return {
      props: { data: resp }, // will be passed to the page component as props
    };
  }

  // eslint-disable-next-line camelcase
  if (session_id === "free-purchase") {
    return {
      props: { id }, // will be passed to the page component as props
    };
  }

  // console.log(session_id);
  // eslint-disable-next-line camelcase
  const data = await fetchOrder();
  // console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default Success;
