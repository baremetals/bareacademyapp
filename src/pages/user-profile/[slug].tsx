import React from "react";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import Profile from "components/Profile";
import { useIsAuth } from "../../lib/isAuth";
import { initializeApollo } from "lib/apolloClient";
import {
  GetUserByIdDocument,
  GetUserByIdQueryResult,
  GetUserQueryResult,
  GetUserDocument,
} from "generated/graphql";



const UserProfile = (props: { data: any; loading: any; error: any; }) => {
  useIsAuth();
  
  return (
    <>
      <Profile props={props}/>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const { slug } = ctx.query;
    const cookies = JSON.parse(ctx.req.cookies.bareacademy);
    const { jwt, id, slug: loggedInUser} = cookies;
    const token = `Bearer ${jwt}`;
    const apolloClient = initializeApollo(null, token);
    // console.log(loggedInUser);
    let data;
    if (slug !== loggedInUser) {
      data = await apolloClient.query<GetUserQueryResult>({
        query: GetUserDocument,
        variables: {
          filters: {
            slug: {
              eq: slug,
            },
          },
          sort: "updatedAt:desc",
          pagination: {
            start: 0,
            limit: 6
          },
          coursesSort2: "updatedAt:desc",
          coursesPagination2: {
            start: 0,
            limit: 4
          }
        },
      });
    } else {
      data = await apolloClient.query<GetUserByIdQueryResult>({
        query: GetUserByIdDocument,
        variables: {
          usersPermissionsUserId: id,
          pagination: {
            start: 0,
            limit: 6,
          },
          sort: "updatedAt:desc",
          coursesSort2: "updatedAt:desc",
          coursesPagination2: {
            start: 0,
            limit: 4
          }
        },
      });
      // return data
    }
    return {
      props: {data},
    };
  }
);

export default UserProfile;

