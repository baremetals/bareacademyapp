import { CreateSupportMessageDocument, CreateSupportMessageMutation } from 'generated/graphql';
import { client } from 'lib/initApollo';

type message = {
  fullName: string | undefined;
  email: string | undefined;
  body: string | undefined;
  subject: string | undefined;
  username?: string | undefined;
};

export const supportMessage = async ({ ...props }: message) => {
  const { data } = await client.mutate<CreateSupportMessageMutation>({
    mutation: CreateSupportMessageDocument,
    variables: {
      ...props,
    },
  });
  return data
};