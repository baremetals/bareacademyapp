import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import CourseDetails from "../../components/Courses/CourseDetails";
import { useNoAuthPages } from "lib/noAuth";
import { client } from "lib/initApollo";
import { CourseDocument, CourseEntityResponseCollection, CourseQueryResult } from "generated/graphql";



function CourseDetailsPage(props: { data: { courses: CourseEntityResponseCollection; }; loading: boolean; error: any; }) {
  useNoAuthPages();
  const course = props?.data?.courses?.data[0];
  const meta = course?.attributes?.SEO;
  // console.log(meta);

  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | {meta?.title} </title>
        <meta property="og:title" content={meta?.title as string} key="title" />
        <meta name="description" content={meta?.description as string} />
        <meta property="og:type" content={meta?.type as string} />
        <meta property="og:url" content={meta?.url as string} />
        <meta property="og:image" content={meta?.image as string} />
        <meta property="og:image:width" content="100%" />
        <meta property="og:image:height" content="auto" />
        <link
          rel="canonical"
          href={`https://baremetals.io/courses/${meta?.title}`}
        />
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
