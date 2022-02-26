import { createWithApollo } from "./createWithApollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";

// const GRAPHQL_URL = "http://localhost:1339/graphql";
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL;

export const createClient = (ctx: NextPageContext) =>
  new ApolloClient({
    uri: GRAPHQL_URL,
    // credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) || "",
    },
    cache: new InMemoryCache({ resultCaching: false }),
  });


export const withApollo = createWithApollo(createClient);
