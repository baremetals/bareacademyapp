import React from "react";
import Head from "next/head";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import Profile from "components/Profile";
import { useIsAuth } from "lib/isAuth";
import { initializeApollo } from "lib/apolloClient";
import {
  MeQueryResult,
  MeDocument,
  UsersPermissionsUserEntityResponse,
  UsersPermissionsUser,
} from "generated/graphql";

type userProps = {
  id: string;
  attributes: UsersPermissionsUser;
};

const UserProfile = (props: {
  data: { usersPermissionsUser: UsersPermissionsUserEntityResponse };
}) => {
  const user = props.data.usersPermissionsUser?.data as userProps;
  useIsAuth();
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Online Courses</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Online Courses"
          key="title"
        />
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <meta property="og:type" content="user-profile" />
        <meta
          property="og:url"
          content={
            `https://baremetals.io/user-profile/${user?.attributes?.slug}/` ||
            ""
          }
        />
        <link
          rel="canonical"
          href={
            `https://baremetals.io/user-profile/${user?.attributes?.slug}/` ||
            ""
          }
        />
      </Head>
      <Profile props={user} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const cookies = JSON.parse(ctx.req.cookies.bareacademy as string);
    const { jwt, id,} = cookies;
    const token = `Bearer ${jwt}`;
    const apolloClient = initializeApollo(null, token);
    // console.log(id);
    const { data } = await apolloClient.query<MeQueryResult>({
      query: MeDocument,
      variables: {
        usersPermissionsUserId: id,
        filters: {
          creator: {
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
    // console.log(token);
    return {
      props: { data },
    };
  }
);

export default UserProfile;
