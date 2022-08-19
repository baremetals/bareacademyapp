import React from "react";
import Head from "next/head";
import DetailPost from "components/ForumPage/DetailPost";
import {
  PostDocument,
  PostQueryResult,
  PostEntityResponseCollection,
} from "generated/graphql";
import { initializeApollo } from "lib/apolloClient";
import { useIsAuth } from "lib/isAuth";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";

const PostDetails = (props: {
  data: { data: { posts: PostEntityResponseCollection } };
  loading?: boolean;
  error?: any;
}) => {
  useIsAuth();

  const post = props?.data?.data?.posts?.data[0]?.attributes;
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
        <meta
          property="og:url"
          content={`https://baremetals.io/forum/${post?.slug}` || ""}
        />
        <link
          rel="canonical"
          href={`https://baremetals.io/forum/${post?.slug}` || ""}
        />
      </Head>
      <DetailPost
        props={
          props as {
            data: { data: { posts: PostEntityResponseCollection } };
            loading: boolean;
            error: any;
          }
        }
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const { slug } = ctx.query;
    const cookies = JSON.parse(ctx.req.cookies.bareacademy as string).jwt;
    const token = `Bearer ${cookies}`;
    const apolloClient = initializeApollo(null, token);
    const data = await apolloClient.query<PostQueryResult>({
      query: PostDocument,
      variables: {
        filters: {
          slug: {
            eq: slug,
          },
        },
        pagination: {
          start: 0,
          limit: 5,
        },
      },
    });
    console.log(token);
    return {
      props: { data },
    };
  }
);

export default PostDetails;
