import React from "react";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import CourseDetails from "../../components/Courses/CourseDetails";
import { useIsAuth } from "lib/isAuth";
import { initializeApollo } from "lib/apolloClient";
import { CourseDocument, CourseEntity, CourseQueryResult } from "generated/graphql";

type pageProps = {
  data: { data: { data: { courses: CourseEntity[] } } };
  loading: boolean;
  error: any;
};

function CourseDetailsPage(props: pageProps) {
  useIsAuth();
  // console.log(props);
  return (
    <>
      <CourseDetails props={props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const { slug } = ctx.query;
    const cookies = JSON.parse(ctx.req.cookies.bareacademy).jwt;
    const token = `Bearer ${cookies}`;
    const apolloClient = initializeApollo(null, token);
    const data = await apolloClient.query<CourseQueryResult>({
      query: CourseDocument,
      variables: {
        filters: {
          slug: {
            eq: slug,
          },
        },
      },
    });
    return {
      props: { data },
    };
  }
);
export default CourseDetailsPage;
