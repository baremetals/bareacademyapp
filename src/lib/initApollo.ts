import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import {createUploadLink} from "apollo-upload-client"

// const GRAPHQL_URL = "http://localhost:1339/graphql";
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL;


export const client = new ApolloClient({
  link: createUploadLink({
    uri: GRAPHQL_URL,
  }),
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});
