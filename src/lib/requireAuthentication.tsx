import { GetServerSideProps, GetServerSidePropsContext } from "next";


export function requireAuthentication(gssp: GetServerSideProps) {
  return async (ctx: GetServerSidePropsContext) => {
    const { req } = ctx;
    if (!req.cookies) {
      return {
        redirect: {
          permanent: false,
          destination: "/auth/signin",
        },
      };
    } else {
      // console.log("i am printing", "accessToken");
      const tokens = Object.keys(req.cookies).includes(
        process.env.COOKIE_NAME as string
      );
      const token = tokens

      if (!token) {
        return {
          redirect: {
            permanent: false,
            destination: "/auth/signin",
          },
        };
      } 
    }
    return await gssp(ctx);
    
  };
  
}
