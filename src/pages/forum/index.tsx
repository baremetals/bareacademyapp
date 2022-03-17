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
        <title>Baretutorials</title>
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ForumPage props={props}></ForumPage>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const cookies = JSON.parse(ctx.req.cookies.bareacademy).jwt;
    const token = `Bearer ${cookies}`;
    const apolloClient = initializeApollo(null, token);
    const { data } = await apolloClient.query<PostsQueryResult>({
      query: PostsDocument,
    });
    // console.log(data)
    return {
      props: {data},
    };
  }
);

export default Forum;
// export default useApollo(Forum);
