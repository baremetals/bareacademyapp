import React from 'react'
import { GetServerSideProps } from "next";
import { requireAuthentication } from 'lib/requireAuthentication';
import { initializeApollo } from "lib/apolloClient";
import EditProfile from 'components/Profile/EditProfile';
import { useIsAuth } from "lib/isAuth";

import {
  GetUserByIdDocument,
  GetUserByIdQueryResult,
} from "generated/graphql";

const EditProfilePage = (props: { data: any; loading: any; }) => {
    useIsAuth();
    return (
        <>
            <EditProfile props={props}/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const cookies = JSON.parse(ctx.req.cookies.bareacademy);
    const { jwt, id } = cookies;
    const token = `Bearer ${jwt}`;
    const apolloClient = initializeApollo(null, token);
     const {data} = await apolloClient.query<GetUserByIdQueryResult>({
       query: GetUserByIdDocument,
       variables: {
         usersPermissionsUserId: id,
       },
     });
    //  console.log(data)
    return {
      props: {data},
    };
  }
);

export default EditProfilePage;