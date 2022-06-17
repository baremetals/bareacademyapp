import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { total, quantity, course, imageUrl } = req.body.data;
  const token = JSON.parse(req.cookies.bareacademy).jwt;

  // console.log("we got here");

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
        },
      },
    });

    // console.log("If I am here then I succeeded", response.data.data.attributes.error);
    res.send(response.data);
  } catch (err) {
    // console.log("this is where it is all going wrong", JSON.stringify(err));
    // console.log("fuck me finally", err);
    res.send(err);
  }
}
