import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import LectureDetails from "components/Courses/CourseDetails/LectureDetails";
import { useIsAuth } from "lib/isAuth";
import { client } from "lib/initApollo";
import {
  LectureDocument,
  LectureEntity,
  LectureEntityResponse,
  LectureQueryResult,
} from "generated/graphql";

function LecturePage(props: { data: { lecture: LectureEntityResponse } }) {
  useIsAuth();
  // console.log(props);
  const lect = props?.data?.lecture?.data as LectureEntity;

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
      <LectureDetails props={lect} />
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { lectureId } = ctx.query;
  // console.log(lectureId);
  let id = lectureId as string
  id = id?.split('-')[1] as string
  // const vidId = id
  const { data } = await client.query<LectureQueryResult>({
    query: LectureDocument,
    variables: {
      lectureId: id,
    },
  });

  console.log(data);
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default LecturePage;
