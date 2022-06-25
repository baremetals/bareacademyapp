import type { NextApiRequest, NextApiResponse } from 'next'
import { initializeApollo } from "lib/apolloClient";
import { CreateSupportMessageDocument, CreateSupportMessageMutationOptions } from 'generated/graphql';


type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { subject, body, username, slug, fullName } = req.body.data;

  const cookies = JSON.parse(req.cookies.bareacademy).jwt;
  const token = `Bearer ${cookies}`;
  const apolloClient = initializeApollo(null, token);
  // console.log(req.body);
  try {
    // console.log("sending suppport message");
    await apolloClient.mutate<CreateSupportMessageMutationOptions>({
      mutation: CreateSupportMessageDocument,
      variables: {
        data: {
          subject,
          body,
          username,
          slug,
          fullName,
          publishedAt: new Date(),
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