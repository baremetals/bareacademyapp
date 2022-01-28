import cookie from "cookie";
// import { MeDocument, MeQueryResult } from "generated/graphql";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
// import { client } from "pages/_app";

export function requireAuthentication(gssp: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const { req } = ctx;

    if (!req.headers.cookie) {
      return {
        redirect: {
          permanent: false,
          destination: "/signin",
        },
      };
    } else {
      const accessToken = cookie.parse(req.headers.cookie);
      // console.log(accessToken);
      const tokens = Object.keys(accessToken).includes(process.env.COOKIE_NAME as string);
      // console.log(tokens);
      const token = tokens

      // const response = await client.query<MeQueryResult>({
      //   query: MeDocument,
      // });
      // console.log(response)

      if (!token) {
        return {
          redirect: {
            permanent: false,
            destination: "/signin",
          },
        };
      } 
    }
    return await gssp(ctx);
    
  };
  
}
