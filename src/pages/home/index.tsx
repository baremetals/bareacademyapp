import React from "react";
import Head from "next/head";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import Home from "components/Home";
import { useIsAuth } from "lib/isAuth";
import { initializeApollo } from "lib/apolloClient";
import {
  UserGroupsDocument,
  UserGroupsQueryResult,
 GroupRelationResponseCollection,
} from "generated/graphql";

type Props = {
  data: {
    usersPermissionsUser: {
      data: { attributes: { groups: GroupRelationResponseCollection } };
    };
  };
};

function HomePage(props: Props) {
  const groups = props?.data?.usersPermissionsUser?.data?.attributes;
  // console.log(props);
  useIsAuth();
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Dashboard</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Dashboard"
          key="title"
        />
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <meta property="og:type" content="user-dashboard" />
        <meta property="og:url" content="https://baremetals.io/home" />
        <link rel="canonical" href="https://baremetals.io/home" />
      </Head>
      <Home groups={groups} />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    try {
      const cookies = JSON.parse(ctx.req.cookies.bareacademy as string);
      const { jwt, id } = cookies;
      const token = `Bearer ${jwt}`;
      const apolloClient = initializeApollo(null, token);
      const { data } = await apolloClient.query<UserGroupsQueryResult>({
        query: UserGroupsDocument,
        variables: {
          usersPermissionsUserId: id,
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
    } catch (err) {
      console.log(err);
      return {
        props: { data: { courses: { data: [] } } },
      };
    }
  }
);

export default HomePage;
