import React from "react";
import Head from "next/head";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import Orders from "components/Orders";
import { useIsAuth } from "lib/isAuth";
import { initializeApollo } from "lib/apolloClient";
import {
  OrderEntityResponseCollection,
  MyOrdersDocument,
  MyOrdersQueryResult,
} from "generated/graphql";

function OrdersPage(props: {
  data: { orders: OrderEntityResponseCollection };
}) {
  useIsAuth();
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Orders</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Orders"
          key="title"
        />
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <meta property="og:type" content="user-orders" />
        <meta property="og:url" content="https://baremetals.io/home/orders" />
        <link rel="canonical" href="https://baremetals.io/home/orders" />
      </Head>
      <Orders props={props} />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const cookies = JSON.parse(ctx.req.cookies.bareacademy);
    const { jwt, id } = cookies;
    const token = `Bearer ${jwt}`;
    const apolloClient = initializeApollo(null, token);
    const { data } = await apolloClient.query<MyOrdersQueryResult>({
      query: MyOrdersDocument,
      variables: {
        filters: {
          user: {
            id: {
              eq: id,
            },
          },
        },
        sort: "updatedAt:desc",
        pagination: {
          start: 0,
          limit: 6,
        },
      },
    });
    return {
      props: { data },
    };
  }
);

export default OrdersPage;
