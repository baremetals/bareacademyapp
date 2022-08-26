import React from "react";
import Head from "next/head";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import Profile from "components/Profile";
import { useIsAuth } from "lib/isAuth";
import { initializeApollo } from "lib/apolloClient";
import {
  UserQueryResult,
  UserDocument,
  UsersPermissionsUserEntityResponseCollection,
  UsersPermissionsUser,
} from "generated/graphql";

type userProps = {
  id: string;
  attributes: UsersPermissionsUser;
};

const UserProfile = (props: {
  data: { usersPermissionsUsers: UsersPermissionsUserEntityResponseCollection };
}) => {
  // console.log(props);

  const user = props?.data.usersPermissionsUsers?.data[0] as userProps;
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
    const { slug } = ctx.query;
    const cookies = JSON.parse(ctx.req.cookies.bareacademy);
    const { jwt, slug: loggedInUser} = cookies;
    const token = `Bearer ${jwt}`;
    const apolloClient = initializeApollo(null, token);
    if (slug === loggedInUser) {
      return {
        redirect: {
          permanent: false,
          destination: "/user-profile",
        },
      };
    }

    const { data } = await apolloClient.query<UserQueryResult>({
        query: UserDocument,
        variables: {
          filters: {
            slug: {
              eq: slug,
            },
          },
          postsFilters2: {
            creator: {
            slug: {
              eq: slug,
            },
          },
          },
          sort: "updatedAt:desc",
          pagination: {
            start: 0,
            limit: 6
          }
        },
      }); 
    // console.log(loggedInUser);
    return {
      props: {data},
    };
  }
);

export default UserProfile;

