import React from 'react'
import { useIsAuth } from "lib/isAuth";
import SearchResult from "components/SearchResult";
import { GetServerSideProps } from "next";
import { requireAuthentication } from "lib/requireAuthentication";
import {
  Query,
  SearchBySearchTermDocument,
  SearchBySearchTermQueryResult,
} from "generated/graphql";
import { client } from "../../lib/initApollo";

const SeachResultsPage = (props: JSX.IntrinsicAttributes & { props: { data: Query; loading: boolean; error: any; }; }) => {
  // console.log(props)
    useIsAuth();
    return (
      <>
        <SearchResult {...props}/>
      </>
    );
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const { term } = ctx.query
    // console.log(term)
    const { data } = await client.query<SearchBySearchTermQueryResult>({
      query: SearchBySearchTermDocument,
      variables: {
        searchItem: term
      },
    });
    return {
      props: {data},
    };
  }
);

export default SeachResultsPage
