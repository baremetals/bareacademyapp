import { initializeApollo } from "lib/apolloClient";
import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import {
  UpdateMeMutationOptions,
  UpdateMeDocument,
  ChangePasswordDocument,
  ChangePasswordMutationOptions,
} from "generated/graphql";

type user = {
  id: string;
  username: string;
  slug: string;
  img: string;
  backgroundImg: string;
  online: boolean;
  jwt: string;
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { email, username, fullName, description, location, password, flag } = req.body.data;
    const cookies = JSON.parse(req.cookies.bareacademy);
    const { id, jwt, img, backgroundImg } = cookies;
    const token = `Bearer ${jwt}`;
    const apolloClient = initializeApollo(null, token);
    // console.log(id);

    if (flag === "PASSWORD") {
      try {
        console.log("password update");
        await apolloClient.mutate<ChangePasswordMutationOptions>({
          mutation: ChangePasswordDocument,
          variables: {
            updateUsersPermissionsUserId: id,
            data: {
              password,
            },
          },
        });
        
        res.status(200).json({ message: "Password Successfully changed" });
      } catch (err) {
        res
          .status(401)
          .json({ message: "Something went wrong please try again later." });
      }
    } else {
      try {
        // console.log("profile details update");
        const resp = await apolloClient.mutate<UpdateMeMutationOptions>({
          mutation: UpdateMeDocument,
          variables: {
            updateUsersPermissionsUserId: id,
            data: {
              email: email,
              username: username,
              fullName: fullName,
              slug: username,
              description: description,
              location: location,
            },
          },
        });

        if (resp?.data) {
           const user: user = {
             id: id,
             username: username,
             slug: username,
             img: img,
             backgroundImg: backgroundImg,
             online: true,
             jwt: jwt,
           };

           res.setHeader(
             "Set-Cookie",
             cookie.serialize(
               process.env.COOKIE_NAME as string,
               JSON.stringify(user),
               {
                 httpOnly: true,
                 secure: process.env.NODE_ENV !== "development",
                 maxAge: 60 * 60 * 24 * 2, // 2 days
                 sameSite: "strict",
                 path: "/",
               }
             )
           );
        }
         
          res.status(200).json({ message: "Successfully changed." });
      } catch (err: any) {
        // console.log(err.graphQLErrors[0].message);
        if (err.graphQLErrors[0].message) {
          res.status(401).json({ message: err.graphQLErrors[0].message });
        }
        else {
          res
            .status(401)
            .json({ message: "Something went wrong please try again later." });
        }
        
      }
    }
    
    

}