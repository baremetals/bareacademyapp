import React, { useEffect } from "react";
import Head from "next/head";
import { useNoAuthPages } from "lib/noAuth";
import ArticlesPage from "components/ArticlesPage";
import { GetServerSidePropsContext } from "next";
import { client } from 'lib/initApollo';
import { analytics, logEvent } from "lib/admin";
import { ArticlesDocument, ArticlesQueryResult, Query } from "generated/graphql";

const Articles = (props: { data: Query; loading: boolean; error: any; }) => {
  useNoAuthPages();
  useEffect(() => {
    logEvent(analytics, `articlesPage_visited`);
  });
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Articles</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Articles"
          key="title"
        />
        <meta
          name="description"
          content="Check out the latest articles about software development, IT, DevOps and more..."
        />
        <meta property="og:url" content="https://baremetals.io/articles" />
        <meta property="og:type" content="articles" />
        <link rel="canonical" href="https://baremetals.io/articles" />
      </Head>
      <ArticlesPage props={props} />
    </>
  );
};

export async function getServerSideProps(_ctx: GetServerSidePropsContext) {

  const { data } = await client.query<ArticlesQueryResult>({
    query: ArticlesDocument,
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "updatedAt:desc",
    },
  });
  return {
    props: {data}, // will be passed to the page component as props
  };
}
export default Articles;
