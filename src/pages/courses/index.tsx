import React, { useEffect } from "react";
import {
  CoursesDocument,
  CoursesQueryResult,
  CourseEntityResponseCollection,
} from "generated/graphql";

import CoursesPage from "components/Courses";
import { client } from "lib/initApollo";
import { useIsAuth } from "lib/isAuth";
import { logEvent } from 'firebase/analytics';
import { analytics } from 'lib/admin';
import Layout from 'components/Layout';
import ErrorPage from 'components/ErrorPage';

function courses(props: { data: { courses: CourseEntityResponseCollection }, error: any; loading: boolean }) {
  useIsAuth();

  useEffect(() => {
    logEvent(analytics, `coursesPage_visited`);
  });
  
  const courses = props.data?.courses?.data;
  const error = props?.error;

  if (props?.loading) {
    return <div></div>;
  }
  if (error) {
    return <ErrorPage statusCode={error.statusCode || 500} />;
  }

  // console.log(courses);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Courses",
  };
  const description = "Check out the latest courses on web development, IT, cloud technology and more..."

  return (
    <Layout
      title={`Bare Metals Aacademy | Online Courses`}
      metaDescription={description}
      canonicalUrl="https://www.baremetals.io/courses"
      pageUrl="https://www.baremetals.io/courses"
      data={JSON.stringify(structuredData)}
    >
      <CoursesPage desc={description} courses={courses} />
    </Layout>
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
