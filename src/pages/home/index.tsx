import React from "react";
import Head from "next/head";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import Home from "components/Home";
import { useIsAuth } from "lib/isAuth";
import { initializeApollo } from "lib/apolloClient";
import {
  CourseEntityResponseCollection,
  GetCoursesByUserIdDocument,
  GetCoursesByUserIdQueryResult,
} from "generated/graphql";


function HomePage(props: { data: { courses: CourseEntityResponseCollection; }; }) {
  useIsAuth();
  return (
    <>
      <Head>
        <title>Baretutorials</title>
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home props={props}/>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const cookies = JSON.parse(ctx.req.cookies.bareacademy);
    const { jwt, id } = cookies;
    const token = `Bearer ${jwt}`;
    const apolloClient = initializeApollo(null, token);
    const { data } = await apolloClient.query<GetCoursesByUserIdQueryResult>({
      query: GetCoursesByUserIdDocument,
      variables: {
        filters: {
          students: {
            user: {
              id: {
                eq: id,
              },
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
      props: {data},
    };
  }
);

export default HomePage;
