import React from 'react'
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import CourseDetails from '../../components/Courses/CourseDetails'
import { useIsAuth } from 'lib/isAuth';
import { client } from 'lib/initApollo';
import { CourseResult, GetCourseBySlugDocument, GetCourseBySlugQueryResult, Maybe, } from 'generated/graphql';


type detailProps = {
  data: { data: { getCourseBySlug: Maybe<CourseResult> | undefined } };
  loading: boolean;
  error: any;
};

function CourseDetailsPage(props: detailProps) {
  useIsAuth();
  return (
    <>
      <CourseDetails props={props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const { slug } = ctx.query;

    const data = await client.query<GetCourseBySlugQueryResult>({
      query: GetCourseBySlugDocument,
      variables: {
        slug: slug as string,
      },
    });
    return {
      props: {data},
    };
  }
);
export default CourseDetailsPage
