import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import MessageTemplate from "components/EmailTemplate/MsgTemplate";
import { useIsAuth } from "lib/isAuth";

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

const Cancel = (props: pagePros) => {
  useIsAuth();
  // console.log(props);
  const router = useRouter();
  let data: { message: string; route: string; note: string } = {
    message: "Your order has been cancelled",
    route: "/home",
    note: "Order cancelled",
  };

  if (props?.data?.status === 400 || 403 || 500) {
    data = {
      message:
        "Sorry something went wrong, please check your email for confirmation",
      route: "/home",
      note: "Order unconfirmed",
    };
  }

  setTimeout(() => {
    router.push("/home");
  }, 9000);

  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Order Cancellation </title>
        <meta property="og:title" content="Order cancelled" key="title" />
        <meta name="description" content="Order cancelled" />
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
  const cookies = JSON.parse(ctx?.req?.cookies?.bareacademy as string) || {};
  // console.log(cookies);
  const { jwt } = cookies;
  // const token = `Bearer ${jwt}`;
  // console.log(session_id)

  const cancelOrder = async () => {
    try {
      return (
        await axios({
          method: "POST",
          url: `${baseUrl}/orders/confirm`,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${jwt}`,
          },
          data: { checkout_session: session_id, cancel: true },
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


  // console.log(session_id);
  // eslint-disable-next-line camelcase
  const data = await cancelOrder();
  // console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default Cancel;
