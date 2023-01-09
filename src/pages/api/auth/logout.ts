import cookie from "cookie";
import { initializeApollo } from "lib/apolloClient";
import { NextApiRequest, NextApiResponse } from "next";
import {
  UpdateUserStatusMutationOptions,
  UpdateUserStatusDocument,
} from "generated/graphql";

export default async function (req: NextApiRequest, res: NextApiResponse){
  if (!req.cookies.bareacademy) {
    // console.log("me deyaaaa");
    return res.json({ message: "You have already logged out!" });
  } else {
    const cookies = JSON.parse(req.cookies.bareacademy);
    const { id, jwt, } = cookies;
    const token = `Bearer ${jwt}`;
    const apolloClient = initializeApollo(null, token);
    await apolloClient.mutate<UpdateUserStatusMutationOptions>({
      mutation: UpdateUserStatusDocument,
      variables: {
        id: id,
        data: {
          online: false,
        },
      },
    });
    
    res.setHeader(
      "Set-Cookie",
      cookie.serialize(process.env.COOKIE_NAME as string, "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: -1, // deletes the cookie
        sameSite: "strict",
        path: "/",
      })
    );
  }
  // console.log('me gwarn')
  return res.status(200).json({ message: "Successfuly logged out!" });
}
