import React, { useEffect, useState } from "react";
// import axios from "axios";
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

type meta = {
  data: {
    id: string,
    attributes: {
      description: string;
      metaTitle: string;
      metaDescription: string;
      metaUrl: string;
    }
  }
}

type u = meta | null;



function courses(props: any) {
  useIsAuth();
  const [metaData, setMetaData] = useState<u>(null);

  const getMetadata = async () => {
    const res = await(
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses-page`)
    ).json();
    return setMetaData(res);
  }

  useEffect(() => {
    getMetadata()
  }, [])

  console.log(metaData?.data?.attributes.description);

  const dispatch = useAppDispatch();
  const courseData = props.data?.courses;
  dispatch(setCourse(courseData));

  return (
    <>
      <Head>
        <title>Bare Academy Courses</title>
        <meta property="og:title" content="Bare Academy Courses" key="title" />
        <meta
          name="description"
          content="Check out the latest courses on web development, IT, cloud technology and more..."
        />
        <meta property="og:url" content="https://www.baremetals.io/courses" />
        <meta property="og:type" content="courses" />
        <link rel="canonical" href="https://www.baremetals.io/courses" />
      </Head>

      <CoursesPage desc="Check out the latest courses on web development, IT, cloud technology and more..." />
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query<CoursesQueryResult>({
    query: CoursesDocument,
    variables: {
      filters: {
        private: {
          eq: false,
        },
      },
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
