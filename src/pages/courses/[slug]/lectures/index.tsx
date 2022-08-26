import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import LectureDetails from "components/Courses/CourseDetails/LectureDetails";
import { useIsAuth } from "lib/isAuth";
import { client } from "lib/initApollo";
import { initializeApollo } from "lib/apolloClient";
import {
  LecturesDocument,
  LecturesQueryResult,
  CourseEntityResponseCollection,
} from "generated/graphql";

function LecturePage({ data }) {
  useIsAuth();
  // console.log(data?.courses?.data[0]);
  const lect = data?.courses?.data[0];
  // console.log(lect);

  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | {lect?.attributes?.slug} </title>
        <meta
          property="og:title"
          content={lect?.attributes?.slug as string}
          key="title"
        />
        <meta name="description" content="lecture video" />
        <meta property="og:image:width" content="100%" />
        <meta property="og:image:height" content="auto" />
      </Head>
      <LectureDetails props={lect}/>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { slug } = ctx.query;
  // console.log(lectureId);
  // let id = lectureId as string
  // id = id?.split('-')[1] as string
  // const vidId = id
  const cookies = JSON.parse(ctx.req.cookies.bareacademy);
  const { jwt } = cookies;
  const token = `Bearer ${jwt}`;
  const apolloClient = initializeApollo(null, token);
  const { data } = await apolloClient.query<LecturesQueryResult>({
    query: LecturesDocument,
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
      },
    },
  });

  // console.log(data);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default LecturePage;
