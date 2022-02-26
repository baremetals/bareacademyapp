import cookie from "cookie";
import { NextApiResponse } from 'next';

export default async function (req: { cookies: { bareacademy: { cookies: string; }; }; }, res: NextApiResponse){
  if (!req.cookies.bareacademy) {
    console.log("me deyaaaa");
    return res.json({ message: "You have already logged out!" });
  } else {
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
  console.log('me gwarn')
  return res.status(200).json({ message: "Successfuly logged out!" });
}
