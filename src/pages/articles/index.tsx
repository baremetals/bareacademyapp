import React from "react";
import { useNoAuthPages } from "lib/noAuth";
import ArticlesPage from "components/ArticlesPage";
import { GetServerSidePropsContext } from "next";

const Articles = () => {
  useNoAuthPages();
  return <ArticlesPage />;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default Articles;
