import React from "react";
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

function courses(props: any) {
  useIsAuth();

  const dispatch = useAppDispatch();
  const courseData = props.data?.courses;
  dispatch(setCourse(courseData));
  
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Courses</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Courses"
          key="title"
        />
        <meta
          name="description"
          content="Check out the latest courses on web development, IT, cloud technology and more..."
        />
        <meta property="og:url" content="https://baremetals.io/courses" />
        <meta property="og:type" content="courses" />
        <link rel="canonical" href="https://baremetals.io/courses" />
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
}

export default courses;
