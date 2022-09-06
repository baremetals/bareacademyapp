import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { total, quantity, course, imageUrl, orderType, isFree } =
    req.body.data;
  const token = JSON.parse(req.cookies.bareacademy as string).jwt;

  console.log("we got here");

  try {
    // console.log("testing 187")
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/orders`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        data: {
          total,
          quantity,
          course,
          imageUrl,
          orderType,
          isFree,
        },
      },
    });

    // console.log("If I am here then I succeeded", response.data);
    // res.send(response);
    res.status(200).json({ data: response.data });
  } catch (err: any) {
    // console.log("fuck me finally", err?.response.data.error.message);
    // console.log("we going to make it", err?.response.data.error.details);
    res.status(400).json({ error: err?.response.data.error.message });
    // res.send(err);
  }
}
