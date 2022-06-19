import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = JSON.parse(req.cookies.bareacademy).jwt;
  if (req.body.data && req.body.data.isDecrement !== undefined) {
    const { isDecrement, post, user, publishedAt } = req.body.data;
    console.log("me deya");
    try {
      const response = await axios({
        method: "POST",
        url: `${baseUrl}/post-points`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: {
          data: {
            isDecrement,
            post,
            user,
            publishedAt,
          },
        },
      });

      res.send(response.data.data.attributes.error);
    } catch (err) {
      console.log("fuck me finally", err);
      res.send(err);
    }
  } else {
    const { pointsId } = req.body;
    console.log(pointsId);
    try {
      const response = await axios({
        method: "DELETE",
        url: `${baseUrl}/post-points/${pointsId}`,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      res.send(response.data.data.attributes.error);
    } catch (err) {
      console.log("fuck you finally", err);
      res.send(err);
    }
  }
}
