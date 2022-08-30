import type { NextApiRequest, NextApiResponse } from "next";

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bareacademyCookie = req.cookies.bareacademy;
  if (bareacademyCookie !== undefined) {
    const cookies = JSON.parse(req.cookies.bareacademy as string);
    try {
      const { id, username, slug, img: img, backgroundImg, online } = cookies;
      const user = {
        id,
        username,
        slug,
        img,
        backgroundImg,
        online,
      };
      res.send(user);
    } catch (err) {
      return;
    }
  } else {
    res.send("no user found, please log in.");
  }
}
