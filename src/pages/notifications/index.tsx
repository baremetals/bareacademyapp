import React from 'react'
import Head from "next/head";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import NotificationsPage from 'components/NotificationsPage'
import { initializeApollo } from "lib/apolloClient";
import {
  NotificationsDocument,
  NotificationsQueryResult,
} from "../../generated/graphql";
import { useIsAuth } from 'lib/isAuth';

function Notifications(props: { data: any; loading: boolean; error: any; }) {
  useIsAuth();
    return (
      <>
        <Head>
          <title>Bare Metals Aacademy | Notifications</title>
          <meta
            property="og:title"
            content="Bare Metals Aacademy | Notifications"
            key="title"
          />
          <meta
            name="description"
            content="Tutorial site for learning web and software development"
          />
          <meta property="og:type" content="user-dashboard" />
          <meta
            property="og:url"
            content="https://baremetals.io/notifications"
          />
          <link rel="canonical" href="https://baremetals.io/notifications" />
        </Head>
        <NotificationsPage props={props} />
      </>
    );
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const cookies = JSON.parse(ctx.req.cookies.bareacademy as string);
    const { jwt, slug } = cookies;
    const token = `Bearer ${jwt}`;
    const apolloClient = initializeApollo(null, token);
    const data = await apolloClient.query<NotificationsQueryResult>({
      query: NotificationsDocument,
      variables: {
        filters: {
          user: {
            slug: {
              eq: slug,
            },
          },
        },
        pagination: {
          start: 0,
          limit: 10,
        },
        sort: "updatedAt:desc",
      },
    });
    return {
      props: {data},
    };
  }
);

export default Notifications
