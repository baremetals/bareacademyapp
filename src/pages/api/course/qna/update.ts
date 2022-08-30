import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.body.data;
  const token = JSON.parse(req.cookies.bareacademy as string).jwt;

  //   console.log("we got here");

  try {
    console.log("testing 187");
    const response = await axios({
      method: "PUT",
      url: `${baseUrl}/question-and-answers/${id}`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        data: {
          id,
          //   course,
          //   user,
          //   publishedAt,
        },
      },
    });

    // console.log("If I am here then I succeeded", response.data.data.attributes.error);
    // res.send(response.data.data.attributes.error);
    res.status(200).json({ res: response.data });
  } catch (err: any) {
    // console.log("this is where it is all going wrong", JSON.stringify(err));
    console.log("fuck me finally", err.response.data.error.message);
    // res.send(err);
    res.status(401).json({ message: err.response.data.error.message });
  }
}
