import React from 'react'
import Head from "next/head";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import BooksPage from 'components/Books'

import { GetBooksQueryResult, GetBooksDocument } from "generated/graphql";
import { queryProps } from 'models/Shared';
import { initializeApollo } from 'lib/apolloClient';
import { useIsAuth } from 'lib/isAuth';



function Books(props: queryProps) {
  useIsAuth()
  // console.log(props);
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Books</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Books"
          key="title"
        />
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <meta property="og:type" content="books" />
        <meta property="og:url" content="https://baremetals.io/books" />
        <link rel="canonical" href="https://baremetals.io/books" />
      </Head>
      <BooksPage props={props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const cookies = JSON.parse(ctx.req.cookies.bareacademy).jwt;
    const token =
      `Bearer ${cookies}`; 
    const apolloClient = initializeApollo(null, token);
    const { data } = await apolloClient.query<GetBooksQueryResult>({
      query: GetBooksDocument,
      variables: {
        sort: "updatedAt:desc",
        pagination: {
          start: 0,
          limit: 6,
        },
      },
    });
    return {
      props: {data},
    };
  }
);


export default Books

