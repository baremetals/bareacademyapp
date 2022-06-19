import type { NextApiRequest, NextApiResponse } from "next";
import { initializeApollo } from "lib/apolloClient";
import {
  DeletePostDocument,
  DeletePostMutationOptions,
} from "generated/graphql";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { deletePostId } = req.body.data;
  const cookies = JSON.parse(req.cookies.bareacademy).jwt;
  const token = `Bearer ${cookies}`;
  const apolloClient = initializeApollo(null, token);
  // console.log(req.body);

  try {
    // console.log("deleting post");
    await apolloClient.mutate<DeletePostMutationOptions>({
      mutation: DeletePostDocument,
      variables: { deletePostId },
    });

    res.status(200).json({ message: "Successfuly deleted" });
  } catch (err) {
    res
      .status(401)
      .json({ message: "Something went wrong please try again later." });
  }
}
