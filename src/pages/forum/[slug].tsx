import DetailPost from "components/ForumPage/DetailPost";
import {
  PostDocument,
  PostQueryResult,
  Maybe,
  CommentEntity,
} from "generated/graphql";
import { initializeApollo } from "lib/apolloClient";
import { useIsAuth } from 'lib/isAuth';
import { requireAuthentication } from 'lib/requireAuthentication';
import { GetServerSideProps } from 'next';
import React from "react";

type detailProps = {
  data: { data: { comments: Maybe<CommentEntity> | undefined } };
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
    const cookies = JSON.parse(ctx.req.cookies.bareacademy).jwt;
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
    // console.log(data);
    return {
      props: {data},
    };
  }
);

export default PostDetails;
