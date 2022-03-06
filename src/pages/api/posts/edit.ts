import type { NextApiRequest, NextApiResponse } from "next";
import { initializeApollo } from "lib/apolloClient";
import {
  UpdatePostDocument,
  UpdatePostMutationOptions,
} from "generated/graphql";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body, updatePostId, slug, title } = req.body.data;
  const cookies = JSON.parse(req.cookies.bareacademy).jwt;
  const token = `Bearer ${cookies}`;
  const apolloClient = initializeApollo(null, token);
  console.log(req.body);

  try {
    console.log("editing post");
    await apolloClient.mutate<UpdatePostMutationOptions>({
      mutation: UpdatePostDocument,
      variables: {
        updatePostId: updatePostId,
        data: {
          title,
          slug,
          body,
        },
      },
    });

    res.status(200).json({ message: "Successfuly sent!" });
  } catch (err) {
    res
      .status(401)
      .json({ message: "Something went wrong please try again later." });
  }
}
