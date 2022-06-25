// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { initializeApollo } from "lib/apolloClient";
import {
  DeleteNotificationMutationOptions,
  DeleteNotificationDocument,
  // ChangePasswordDocument,
  // ChangePasswordMutationOptions,
} from "generated/graphql";


type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    id,
    flag,
  } = req.body.data;

  const cookies = JSON.parse(req.cookies.bareacademy).jwt;
  const token = `Bearer ${cookies}`;
  const apolloClient = initializeApollo(null, token);
  // console.log(id);
  if (flag === "DELETEONE") {
      try {
        console.log("deleting one notification");
        await apolloClient.mutate<DeleteNotificationMutationOptions>({
          mutation: DeleteNotificationDocument,
          variables: {
            deleteNotificationId: id,
          },
        });
        res.status(200).json({ message: "Successfuly deleted!" });
      } catch (err) {
        // console.log(err);
        res
          .status(401)
          .json({ message: "Something went wrong please try again later." });
      }
    } else {
      try {
        // console.log("profile details update");
        // await apolloClient.mutate<UpdateMeMutationOptions>({
        //   mutation: UpdateMeDocument,
        //   variables: {
        //     updateUsersPermissionsUserId: id,
        //     data: {
        //       email: email,
        //       username: username,
        //       fullName: fullName,
        //       description: description,
        //       location: location,
        //     },
        //   },
        // });
        // res.status(200).json({ message: "Successfuly logged out!" });
      } catch (err) {
        res
          .status(401)
          .json({ message: "Something went wrong please try again later." });
      }
    }
}
