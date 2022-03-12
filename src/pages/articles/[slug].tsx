import React from 'react'
import { GetServerSidePropsContext } from "next";
import ArticleDetail from "components/ArticlesPage/ArticleDetailPage";
import { useNoAuthPages } from "lib/noAuth";

const ArticlesDetailsPage = () => {
  useNoAuthPages();
  return <ArticleDetail />;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default ArticlesDetailsPage