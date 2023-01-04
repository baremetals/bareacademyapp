import React, { useEffect } from "react";
import { useNoAuthPages } from "lib/noAuth";
import ArticlesPage from "components/ArticlesPage";
import { GetServerSidePropsContext } from "next";
import { client } from 'lib/initApollo';
import { analytics, logEvent } from "lib/admin";
import { ArticlesDocument, ArticlesQueryResult, Query } from "generated/graphql";
import ErrorPage from 'components/ErrorPage';
import Layout from 'components/Layout';

const Articles = (props: { data: Query; loading: boolean; error: any; }) => {
  useNoAuthPages();
  useEffect(() => {
    logEvent(analytics, `articlesPage_visited`);
  }, []);
  if (props?.loading) {
    return <div></div>;
  }
  if (props?.error) {
    return <ErrorPage statusCode={props?.error.statusCode || 500} />;
  }
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPostings",
  };
  return (
      <Layout
        title={`Bare Metals Aacademy | Articles}`}
        metaDescription="Check out the latest articles about software development, IT, DevOps and more..."
        canonicalUrl="https://www.baremetals.io/articles"
        pageUrl="https://www.baremetals.io/articles"
        data={JSON.stringify(structuredData)}
        type="articles"
      >
        <ArticlesPage props={props} />
      </Layout>
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
