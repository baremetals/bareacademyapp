import React from "react";
import { useForm } from "react-hook-form";

import {
  ChatBoxBottom,
  ChatMessageInput,
  ChatMessageInputGroup,
  ChatSubmitButton,
} from "./msg.styles";
import { useRouter } from 'next/router';
import { useCreateChatMessageMutation, useRespondToChatMessageMutation } from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import { SendIcon } from '../../../public/assets/icons/SendIcon';

type FormInput = {
  body: string;
};

function ChatForm(props: { props: string; }) {
  const router = useRouter();
  const [newChat] = useCreateChatMessageMutation();
  const [newChatMsg] = useRespondToChatMessageMutation();
  const { user: user } = useAppSelector(isUser);
  const {
    // setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const pathname = router.pathname;
  const { username } = router.query;
  const me = user;

  // console.log(props?.props);
  const chatId = props?.props as string;

  const onSubmit = async ({ body }: any) => {

    if (chatId !== "" && chatId !== undefined) {
      // console.log(chatId, "are you shooting this off?");
      try {
        const response = await newChatMsg({
          variables: {
            senderUserId: user?.id as string,
            chatId,
            body,
          },
        });

        if (response.data?.respondToChatMessage) {
          console.log(response.data?.respondToChatMessage);
        }
      } catch (ex) {
        console.log(ex);
        throw ex;
      }
    } else {
      try {
        const response = await newChat({
          variables: {
            ownerUserId: me?.id as string,
            username: username as string,
            body,
          },
        });

        if (response.data?.createChatMessage) {
          console.log(response.data?.createChatMessage);
        }
      } catch (ex) {
        console.log(ex);
        throw ex;
      }
    }
  };
    
  return (
    <>
      <ChatBoxBottom>
        <ChatMessageInputGroup>
          {pathname !== "/messages" && (
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.body && <span>text is required</span>}
              <ChatMessageInput
                placeholder="write something..."
                {...register("body", { required: true })}
                name="body"
              ></ChatMessageInput>
              <ChatSubmitButton type="submit">
                <SendIcon />
              </ChatSubmitButton>
            </form>
          )}
        </ChatMessageInputGroup>
      </ChatBoxBottom>
    </>
  );
}

export default ChatForm


