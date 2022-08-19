import React from "react";
import Head from "next/head";
// import ImagePostCard from "../components/Dashboard/Forum/ImagePostCard";
// import TextPostCard from "../components/Dashboard/Forum/TextPostCard";
// import VideoPostCard from "../components/Dashboard/Forum/VideoPostCard";
import { PostsDocument, PostsQueryResult } from "generated/graphql";

import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import { initializeApollo } from "lib/apolloClient";
import ForumPage from "components/ForumPage";
import { useIsAuth } from "lib/isAuth";
// import {
//   ForumWrapper,
//   ForumContainer,
//   // DropAndCenterWrap,
// } from "../components/Dashboard/Forum/forum.styles";
// import { Comment } from "../components/Comments";
// import { withApollo } from "utils/withApollo";
import { queryProps } from "models/Shared";



function Forum(props: queryProps) {
  useIsAuth();
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Forum</title>
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Forum"
          key="title"
        />
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <meta property="og:type" content="forum" />
        <meta property="og:url" content="https://baremetals.io/forum" />
        <link rel="canonical" href="https://baremetals.io/forum" />
      </Head>
      <ForumPage props={props}></ForumPage>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const cookies = JSON.parse(ctx.req.cookies.bareacademy as string).jwt;
    const token = `Bearer ${cookies}`;
    const apolloClient = initializeApollo(null, token);
    const { data } = await apolloClient.query<PostsQueryResult>({
      query: PostsDocument,
      variables: {
        pagination: {
          start: 0,
          limit: 6,
        },
        sort: "updatedAt:desc",
      },
    });
    console.log('data')
    return {
      props: {data},
    };
  }
);

export default Forum;
// export default useApollo(Forum);
