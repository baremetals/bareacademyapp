import React from 'react'
import Head from "next/head";
import { GetServerSidePropsContext } from "next";
import { client } from "lib/initApollo";
import {
  ArticleDocument,
  ArticleEntityResponseCollection,
  ArticleQueryResult,
} from "generated/graphql";
import ArticleDetail from "components/ArticlesPage/ArticleDetailPage";
import { useNoAuthPages } from "lib/noAuth";



const ArticlesDetailsPage = (props: { data: { articles: ArticleEntityResponseCollection; }; loading: boolean; error: any; }) => {
  useNoAuthPages();
  const article = props?.data?.articles?.data[0];
  const meta = article?.attributes?.SEO;
  // console.log(meta?.title);
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | {meta?.title} </title>
        <meta property="og:title" content={meta?.title as string} key="title" />
        <meta name="description" content={meta?.description as string} />
        <meta property="og:type" content={meta?.type as string} />
        <meta property="og:url" content={meta?.url as string} />
        <meta property="og:image" content={meta?.image as string} />
        <meta property="og:image:width" content="100%" />
        <meta property="og:image:height" content="auto" />
        <link
          rel="canonical"
          href={`https://baremetals.io/articles/${meta?.title}`}
        />
      </Head>
      <ArticleDetail props={props} />
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