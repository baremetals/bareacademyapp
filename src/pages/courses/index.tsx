import React, { useEffect } from "react";
import Head from "next/head";
import {
  CoursesDocument,
  CoursesQueryResult,
} from "generated/graphql";

import CoursesPage from "components/Courses";

import { useAppDispatch } from "app/hooks";
import { setCourse } from "features/courses/reducers";
import { client } from "lib/initApollo";
import { useIsAuth } from "lib/isAuth";
import { analytics, logEvent } from "lib/admin";

function courses(props: any) {
  useIsAuth();
  // console.log(props.data);
  const dispatch = useAppDispatch();
  const courseData = props.data?.courses;
  dispatch(setCourse(courseData));

  useEffect(() => {
    logEvent(analytics, `coursespage_visited`);
  });
  
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
      <CoursesPage />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query<CoursesQueryResult>({
    query: CoursesDocument,
    variables: {
      pagination: {
        start: 0,
        limit: 9,
      },
      sort: "updatedAt:desc",
    },
  });
  // console.log(data);
  return {
    props: { data },
  };
};

export default courses;
