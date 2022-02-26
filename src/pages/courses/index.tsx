import React from "react";
import {
  CoursesDocument,
  CoursesQueryResult,
} from "generated/graphql";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import CoursesPage from "components/Courses";

import { useAppDispatch } from "app/hooks";
import { setCourse } from "features/courses/reducers";
import { initializeApollo } from "lib/apolloClient";
import { useIsAuth } from "lib/isAuth";

function courses(props: any) {
  useIsAuth();
  // console.log(props.data);
  const dispatch = useAppDispatch();
  const courseData = props.data?.courses;
  dispatch(setCourse(courseData));
  
  return (
    <>
      <CoursesPage />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const cookies = JSON.parse(ctx.req.cookies.bareacademy).jwt;
    const token = `Bearer ${cookies}`;
    const apolloClient = initializeApollo(null, token);
    const { data } = await apolloClient.query<CoursesQueryResult>({
      query: CoursesDocument,
    });
    // console.log(data);
    return {
      props: { data },
    };
  }
);

export default courses;
