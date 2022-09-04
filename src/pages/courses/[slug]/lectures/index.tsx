import React from "react";
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import LectureDetails from "components/Courses/CourseDetails/LectureDetails";
import { useIsAuth } from "lib/isAuth";
// import { client } from "lib/initApollo";
import { initializeApollo } from "lib/apolloClient";
import {
  GroupEntity,
  GroupDocument,
  GroupQueryResult,
  // CourseEntityResponseCollection,
} from "generated/graphql";

function LecturePage(props: { data: { groups: { data: GroupEntity[] } } }) {
  const { data } = props;
  useIsAuth();
  // console.log(data?.courses?.data[0]);
  const group = data?.groups?.data[0];
  // console.log(group);

  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | {group?.attributes?.name as string} </title>
        <meta
          property="og:title"
          content={group?.attributes?.name as string}
          key="title"
        />
        <meta name="description" content="lecture video" />
        <meta property="og:image:width" content="100%" />
        <meta property="og:image:height" content="auto" />
      </Head>
      <LectureDetails props={group} />
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { slug } = ctx.query;
  // console.log(lectureId);
  // let id = lectureId as string
  // id = id?.split('-')[1] as string
  // const vidId = id
  const cookies = JSON.parse(ctx.req.cookies.bareacademy as string);
  const { jwt } = cookies;
  const token = `Bearer ${jwt}`;
  const apolloClient = initializeApollo(null, token);
  const { data } = await apolloClient.query<GroupQueryResult>({
    query: GroupDocument,
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
