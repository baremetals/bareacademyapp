import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
// import { createUploadLink } from "apollo-upload-client";

let apolloClient: ApolloClient<NormalizedCacheObject>;
// const GRAPHQL_URL = "http://localhost:1339/graphql";
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL;

// console.log(GRAPHQL_URL);

// const httpLink = createUploadLink({
//   uri: GRAPHQL_URL,
//   credentials: "include",
// });

// const httpLink = new HttpLink({ uri: GRAPHQL_URL });

function createApolloClient(token?: string) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    uri: GRAPHQL_URL,
    cache: new InMemoryCache(),
    headers: {
      authorization: token ? token : ("" as string),
    },
  });
}


export function initializeApollo(initialState: null | undefined, token: string) {
  const _apolloClient = apolloClient ?? createApolloClient(token);

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState: null | undefined, token?: string) {
  const store = useMemo(() => initializeApollo(initialState, token as string), [initialState],);
  return store;
}
