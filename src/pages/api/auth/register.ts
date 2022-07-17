import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type Data = {
  message?: string;
  resp?: boolean;
};


export default async function register(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = req.body;
  console.log(baseUrl);
  try {
    // console.log("register me!");
    const resp = await axios({
      method: "POST",
      url: `${baseUrl}/auth/local/register`,
      data: {
          fullName: data.fullName,
          username: data.username,
          email: data.email,
          password: data.password,
          slug: data.username
      },
    });

    res.status(200).json({ resp: resp.data.user.confirmed });
  } catch (err: any) {
    // console.log(err.response.data.error.message);
    res.status(401).json({ message: err.response.data.error.message });
  }
}
