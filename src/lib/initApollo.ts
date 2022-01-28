import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import {createUploadLink} from "apollo-upload-client"

const GRAPHQL_URL =
  process.env.NEXT_PUBLIC_GRAPHQL_URL || "http://localhost:8000/graphql";
// const GRAPHQL_URL = "http://localhost:8000/graphql";


export const client = new ApolloClient({
  link: createUploadLink({
    uri: GRAPHQL_URL,
  }),
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});

