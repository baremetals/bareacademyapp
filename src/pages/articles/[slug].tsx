import React, { useEffect } from 'react'
// import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { client } from "lib/initApollo";
import {
  ArticleDocument,
  ArticleEntityResponseCollection,
  ArticleQueryResult,
} from "generated/graphql";
import ArticleDetail from "components/ArticlesPage/ArticleDetailPage";
import { useNoAuthPages } from "lib/noAuth";
import Layout from 'components/Layout';
import ErrorPage from 'components/ErrorPage';
import { logEvent } from 'firebase/analytics';
import { analytics } from 'lib/admin';



const ArticlesDetailsPage = (props: { data: { articles: ArticleEntityResponseCollection; }; loading: boolean; error: any; }) => {
  useNoAuthPages();
  const article = props?.data?.articles?.data[0];
  const meta = article?.attributes?.SEO;
  const error = props?.error;
  // console.log(article?.attributes?.slug);
  // console.log(meta?.title);
  useEffect(() => {
    logEvent(analytics, `${article?.attributes?.title} Page_visited`);
  });

  if (props?.loading) {
    return <div></div>;
  }
  if (error) {
    return <ErrorPage statusCode={error.statusCode || 500} />;
  }
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta?.title,
    description: meta?.description,
    author: [
      {
        "@type": "Person",
        name: meta?.author
      },
    ],
    image: meta?.image,
    datePublished: article?.attributes?.updatedAt,
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
        <ArticleDetail props={props} />
      </Layout>
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { slug } = ctx.query;
  // console.log(slug);
  const { data } = await client.query<ArticleQueryResult>({
    query: ArticleDocument,
    variables: {
      filters: {
        slug: {
          eq: slug,
        },
      },
    },
  });
  return {
    props: {data}, // will be passed to the page component as props
  };
}
export default ArticlesDetailsPage