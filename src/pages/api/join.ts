import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export default async function (
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { joined, slug, course, user, publishedAt } =
    req.body.data;
  const token = JSON.parse(req.cookies.bareacademy).jwt;

  // console.log("we got here");

  try {
    // console.log("testing 187")
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/students`,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        data: {
          joined,
          slug,
          course,
          user,
          publishedAt,
        },
      },
    });

    // console.log("If I am here then I succeeded", response.data.data.attributes.error);
    res.send(response.data.data.attributes.error);
  } catch (err) {
    // console.log("this is where it is all going wrong", JSON.stringify(err));
    console.log("fuck me finally", err);
    res.send(err);
  }
}

// export const leaveCourse = (req, res) => {
//   console.log(req.body.data);
// };
