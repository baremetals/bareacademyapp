import React, { useEffect } from "react";
// import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import CourseDetails from "../../../components/Courses/CourseDetails";
import { useNoAuthPages } from "lib/noAuth";
import { client } from "lib/initApollo";
import { CourseDocument, CourseEntityResponseCollection, CourseQueryResult } from "generated/graphql";
import Layout from 'components/Layout';
import ErrorPage from 'components/ErrorPage';
import { logEvent } from 'firebase/analytics';
import { analytics } from 'lib/admin';



function CourseDetailsPage(props: { data: { courses: CourseEntityResponseCollection; }; loading: boolean; error: any; }) {
  useNoAuthPages();
  const course = props?.data?.courses?.data[0];
  const meta = course?.attributes?.SEO;
  const error = props?.error
  // console.log(course?.attributes?.slug);
  useEffect(() => {
    logEvent(analytics, `${course?.attributes?.title} Page_visited`);
  });

  if (props?.loading) {
    return <div></div>;
  }
  if (error) {
    return <ErrorPage statusCode={error.statusCode || 500} />;
  }

   const structuredData = {
     "@context": "https://schema.org",
     "@type": "Course",
     name: meta?.title,
     description: meta?.description,
     author: [
       {
         "@type": "Person",
         name: meta?.author,
       },
     ],
     contentLocation: {
      place: 
       {
         "@type": "VirtualLocation",
         url: `/course/${course?.attributes?.slug}/lectures`,
       },
     },
     url: meta?.url,
     image: meta?.image,
     datePublished: course?.attributes?.updatedAt,
   };

  return (
    <>
      <Layout
        title={`Bare Metals Aacademy | ${meta?.title as string}`}
        metaDescription={meta?.description as string}
        canonicalUrl={meta?.url as string}
        pageUrl={meta?.url as string}
        image={meta?.image as string}
        data={JSON.stringify(structuredData)}
        imageHeight={"auto"}
        imageWidth={"100%"}
        type={meta?.type as string}
      >
        <CourseDetails props={props} />
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

  try {
    const { slug } = ctx.query;
    // console.log('the rass slug', slug);
    // const cookies = JSON.parse(ctx.req.cookies.bareacademy as string);
    const cookie = ctx.req.cookies.bareacademy;
    // const { id } = cookies;
    // console.log('the cookie', cookie);

    if (cookie === undefined || cookie === null) {
      const { data } = await client.query<CourseQueryResult>({
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
        props: { data }, // will be passed to the page component as props
      };
    } else {
           const { id } = JSON.parse(cookie as string);
           const { data } = await client.query<CourseQueryResult>({
             query: CourseDocument,
             variables: {
               filters: {
                 slug: {
                   eq: slug,
                 },
               },
               groupsFilters2: {
                 students: {
                   id: {
                     eq: id ? id : null,
                   },
                 },
               },
             },
           });
      return {
        props: { data }, // will be passed to the page component as props
      };
    }
  } catch (err) {
    console.log('the error', err);
    return err
  }

}


export default CourseDetailsPage;
