import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type Data = {
  message?: string;
  resp?: any
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
//   console.log(req.body);
  
  if (req.body.data.flag === "FORGOTPASSWORD") {
    try {
      // console.log("I forgot my password", req.body.data.email);
      const resp = await axios({
        method: "POST",
        url: `${baseUrl}/auth/forgot-password`,
        data: {
          email: req.body.data.email,
        },
      });

      res.status(200).json({resp: resp.data});
    } catch (err: any) {
      // console.log(err.response.data);
      res
        .status(401)
        .json({ message: "Something went wrong please try again later." });
    }
  } else if (req.body.data.flag === "RESETPASSWORD") {
    try {
      console.log("I am resetting my password");
      const { code, password, passwordConfirmation } = req.body.data
      const resp = await axios({
        method: "POST",
        url: `${baseUrl}/auth/reset-password`,
        data: {
          code,
          password,
          passwordConfirmation,
        },
      });

    //   console.log(resp.data.user.username);
      res.status(200).json({ resp: resp.data.user.confirmed });
    } catch (err: any) {
      // console.log(err.response.data);
      res
        .status(401)
        .json({ message: "Something went wrong please try again later." });
    }
  } else {
    try {
      console.log("I need new email confirmation");
      await axios({
        method: "POST",
        url: `${baseUrl}/auth/send-email-confirmation`,
        data: {
          email: req.body.data.email,
        },
      });

      // console.log(response)
      res.status(200).json({ message: "Successfuly registered!" });
    } catch (err: any) {
      // console.log(err.response.data);
      res
        .status(401)
        .json({ message: "Something went wrong please try again later." });
    }
  }

  
}
