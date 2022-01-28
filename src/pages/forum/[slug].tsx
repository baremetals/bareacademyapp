import DetailPost from "components/ForumPage/DetailPost";
import {
  GetPostBySlugDocument,
  GetPostBySlugQueryResult,
  Maybe,
  PostResult,
} from "generated/graphql";
import { client } from 'lib/initApollo';
import { useIsAuth } from 'lib/isAuth';
import { requireAuthentication } from 'lib/requireAuthentication';
import { GetServerSideProps } from 'next';
import React from "react";

type detailProps = {
  data: { data: { getPostBySlug: Maybe<PostResult> | undefined } };
  loading: boolean;
  error: any;
};

const PostDetails = (props: detailProps) => {
  useIsAuth();
  return (
    <>
      <DetailPost props={props} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const { slug } = ctx.query;
    const data = await client.query<GetPostBySlugQueryResult>({
      query: GetPostBySlugDocument,
      variables: {
        slug: slug,
      },
    });
    // console.log(data);
    return {
      props: {data},
    };
  }
);

export default PostDetails;
