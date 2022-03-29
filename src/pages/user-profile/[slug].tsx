import React from "react";
import Head from "next/head";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import Profile from "components/Profile";
import { useIsAuth } from "../../lib/isAuth";
import { initializeApollo } from "lib/apolloClient";
import {
  GetUserByIdDocument,
  GetUserByIdQueryResult,
  GetUserQueryResult,
  GetUserDocument,
} from "generated/graphql";



const UserProfile = (props: { data: any; loading: any; error: any; }) => {
  const searchedUser =
    props?.data?.data?.usersPermissionsUsers?.data[0]?.attributes;
  const loggedInUser =
    props?.data?.data?.usersPermissionsUser?.data?.attributes || {};
  const user = loggedInUser ? loggedInUser : searchedUser || {};
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
          content={`https://baremetals.io/user-profile/${user?.slug}/` || ""}
        />
        <link
          rel="canonical"
          href={`https://baremetals.io/user-profile/${user?.slug}/` || ""}
        />
      </Head>
      <Profile props={props} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const { slug } = ctx.query;
    const cookies = JSON.parse(ctx.req.cookies.bareacademy);
    const { jwt, id, slug: loggedInUser} = cookies;
    const token = `Bearer ${jwt}`;
    const apolloClient = initializeApollo(null, token);
    // console.log(loggedInUser);
    let data;
    if (slug !== loggedInUser) {
      data = await apolloClient.query<GetUserQueryResult>({
        query: GetUserDocument,
        variables: {
          filters: {
            slug: {
              eq: slug,
            },
          },
          sort: "updatedAt:desc",
          pagination: {
            start: 0,
            limit: 6
          },
          coursesSort2: "updatedAt:desc",
          coursesPagination2: {
            start: 0,
            limit: 4
          }
        },
      });
    } else {
      data = await apolloClient.query<GetUserByIdQueryResult>({
        query: GetUserByIdDocument,
        variables: {
          usersPermissionsUserId: id,
          pagination: {
            start: 0,
            limit: 6,
          },
          sort: "updatedAt:desc",
          coursesSort2: "updatedAt:desc",
          coursesPagination2: {
            start: 0,
            limit: 4
          }
        },
      });
      // return data
    }
    return {
      props: {data},
    };
  }
);

export default UserProfile;

