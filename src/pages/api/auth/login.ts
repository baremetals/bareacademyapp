import cookie from "cookie";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type user = {
  id: string;
  username: string;
  slug: string;
  // eslint-disable-next-line camelcase
  img: string;
  // eslint-disable-next-line camelcase
  backgroundImg: string;
  online: boolean;
  jwt: string;
};


export default async function login(req: NextApiRequest, res: NextApiResponse) {
  // console.log(req.body);
  const { usernameOrEmail, password, } = req.body;
  
  try {
    // console.log("failing here");
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/auth/local`,
      data: { identifier: usernameOrEmail, password },
    });

    const user: user = {
      id: response.data.user.id,
      username: response.data.user.username,
      slug: response.data.user.slug,
      img: response.data.user.img,
      backgroundImg: response.data.user.backgroundImg,
      online: true,
      jwt: response.data.jwt,
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

    // console.log(response)
    res.send(response.data.user);
  } catch (err: any) {
    // console.log(err.response.data);
    res.send(err.response.data);
  }
}
