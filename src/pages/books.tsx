import React from 'react'
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import BooksPage from '../components/Books'
import { useIsAuth } from "../lib/isAuth";
import { GetBooksQueryResult, GetBooksDocument } from "generated/graphql";
import { client } from 'lib/initApollo';
import { queryProps } from 'models/Shared';



function Books(props: queryProps) {
  useIsAuth();
  // console.log();
  return (
    <>
      <BooksPage props={props} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    const { data } = await client.query<GetBooksQueryResult>({
      query: GetBooksDocument,
    });
    return {
      props: {data},
    };
  }
);

export default Books

