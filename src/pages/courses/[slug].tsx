import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import CourseDetails from "../../components/Courses/CourseDetails";
import { useNoAuthPages } from "lib/noAuth";
import { client } from "lib/initApollo";
import { CourseDocument, CourseEntityResponseCollection, CourseQueryResult } from "generated/graphql";



function CourseDetailsPage(props: { data: { courses: CourseEntityResponseCollection; }; loading: boolean; error: any; }) {
  useNoAuthPages();
  // console.log(props);
  
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
      <CourseDetails props={props} />
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { slug } = ctx.query;
  // console.log(slug);
  const { data } = await client.query<CourseQueryResult>({
    query: CourseDocument,
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
      },
    },
  });
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default CourseDetailsPage;
