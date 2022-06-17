import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import VideoDetails from "components/Courses/CourseDetails/VideoDetails";
import { useIsAuth } from "lib/isAuth";
import { client } from "lib/initApollo";
import {
  CourseVideoDocument,
  CourseVideoEntity,
  CourseVideoEntityResponse,
  CourseVideoQueryResult,
} from "generated/graphql";

function CourseVideoPage(props: {
  data: { courseVideo: CourseVideoEntityResponse };
}) {
  useIsAuth();
  // console.log(props);
  const vid = props?.data?.courseVideo?.data as CourseVideoEntity;

  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | {vid?.attributes?.slug} </title>
        <meta
          property="og:title"
          content={vid?.attributes?.slug as string}
          key="title"
        />
        <meta name="description" content="lecture video" />
        <meta property="og:image:width" content="100%" />
        <meta property="og:image:height" content="auto" />
      </Head>
      <VideoDetails props={vid} />
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { videoId } = ctx.query;
  // console.log(videoId);
  let id = videoId as string
  id = id?.split('-')[1] as string
  const vidId = id
  const { data } = await client.query<CourseVideoQueryResult>({
    query: CourseVideoDocument,
    variables: {
      courseVideoId: vidId,
    },
  });
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default CourseVideoPage;
