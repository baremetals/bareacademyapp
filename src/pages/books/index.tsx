import React from 'react'
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
  return <>{<BooksPage props={props} />}</>;
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const cookies = JSON.parse(ctx.req.cookies.bareacademy).jwt;
    const token =
      `Bearer ${cookies}`; 
    const apolloClient = initializeApollo(null, token);
    const { data } = await apolloClient.query<GetBooksQueryResult>({
      query: GetBooksDocument,
    });
    return {
      props: {data},
    };
  }
);


export default Books

