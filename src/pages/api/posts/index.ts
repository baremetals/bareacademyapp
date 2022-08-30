import type { NextApiRequest, NextApiResponse } from "next";
import { initializeApollo } from "lib/apolloClient";
import {
  CreatePostDocument,
  CreatePostMutationOptions,
} from "generated/graphql";


type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
){

    const { title, body, category, creator, slug } = req.body.data;
    const cookies = JSON.parse(req.cookies.bareacademy as string).jwt;
    const token = `Bearer ${cookies}`;
    const apolloClient = initializeApollo(null, token);
    // console.log(req.body);

    try {
        // console.log("creating post");
        await apolloClient.mutate<CreatePostMutationOptions>({
          mutation: CreatePostDocument,
          variables: {
            data: {
              title,
              body,
              category,
              creator,
              slug,
              publishedAt: new Date(),
            },
          },
        });

        res.status(200).json({ message: "Successfuly created!" });
    }
    catch (err) {
        res
          .status(401)
          .json({ message: "Something went wrong please try again later." });
    }

}