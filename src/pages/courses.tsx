import React from "react";
import {
  GetLatestCoursesDocument,
  GetLatestCoursesQueryResult,
} from "generated/graphql";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import CoursesPage from "../components/Courses";

import { useAppDispatch } from "app/hooks";
import { setCourse } from "features/courses/reducers";
import { client } from "../lib/initApollo";
import { useIsAuth } from "../lib/isAuth";

function courses(props: any) {
  useIsAuth();
  const dispatch = useAppDispatch();
  const courseData = props.data?.getLatestCourses?.courses;
  dispatch(setCourse(courseData));
  
  return (
    <>
      <CoursesPage />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    
    const { data } = await client.query<GetLatestCoursesQueryResult>({
      query: GetLatestCoursesDocument,
    });
    //   console.log(data);
    return {
      props: { data },
    };
  }
);

export default courses;
