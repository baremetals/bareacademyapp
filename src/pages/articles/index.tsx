import ArticlesPage from 'components/ArticlesPage';
import { GetServerSidePropsContext } from 'next';
import React from 'react'

const Articles = () => {
  return (
    <ArticlesPage/>
  )
}

export async function getServerSideProps(
  ctx: GetServerSidePropsContext
) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default Articles