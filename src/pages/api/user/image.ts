import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { initializeApollo } from "lib/apolloClient";
import {
  EditBackGroundImageMutationOptions,
  EditBackGroundImageDocument,
  EditProfileImageDocument,
  EditProfileImageMutationOptions,
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

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  //   const { id, file, flag } = req.body.data;
  const { profileImage, image, flag } = req.body.data;
  const cookies = JSON.parse(req.cookies.bareacademy);
  const { id, jwt, slug, img, backgroundImg, username } = cookies;
  const token = `Bearer ${jwt}`;
  const apolloClient = initializeApollo(null, token);
  //   console.log(cookies);
  if (flag === "COVERIMAGE") {
    try {
      console.log("back ground image update");
      const { data } =
        await apolloClient.mutate<EditBackGroundImageMutationOptions>({
          mutation: EditBackGroundImageDocument,
          variables: {
            updateUsersPermissionsUserId: id,
            data: {
              backgroundImg: image,
            },
          },
        });
      // console.log(data);
      if (data) {
        const user: user = {
          id: id,
          username: username,
          slug: slug,
          img: img,
          backgroundImg: image,
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
      res.status(200).send({ data: data });
    } catch (err) {
      //   console.log("i am the error", err);
      res.status(401).json({ message: "try again later." });
    }
  } else {
    try {
      console.log("profile image update");
      const { data } =
        await apolloClient.mutate<EditProfileImageMutationOptions>({
          mutation: EditProfileImageDocument,
          variables: {
            updateUsersPermissionsUserId: id,
            data: {
              img: profileImage,
            },
          },
        });
      // console.log(data);
      if (data) {
        const user: user = {
          id: id,
          username: username,
          slug: slug,
          img: profileImage,
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
      res.status(200).send({ data: data });
    } catch (err) {
      console.log("i am the error", err);
      res.status(401).json({ message: "try again later." });
    }
  }
}
