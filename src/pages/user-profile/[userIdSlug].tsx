import React from "react";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import Profile from "components/Profile";
import { useIsAuth } from "../../lib/isAuth";
// import { client } from 'lib/initApollo';
// import { GetUserBySlugIdDocument, GetUserBySlugIdQueryResult } from 'generated/graphql';



const UserProfile = () => {
  useIsAuth();
  
  return (
    <>
      <Profile />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    // const { userIdSlug } = ctx.query;
    // const { data } = await client.query<GetUserBySlugIdQueryResult>({
    //   query: GetUserBySlugIdDocument,
    //   variables: {
    //     userIdSlug,
    //   },
    // });
    // console.log(data);
    return {
      props: {},
    };
  }
);

export default UserProfile;

