import React from "react";
import { useForm } from "react-hook-form";
import { useSockets } from "context/socket.context";

import {
  ChatBoxBottom,
  ChatMessageInput,
  ChatMessageInputGroup,
  ChatSubmitButton,
} from "./msg.styles";
import { useRouter } from 'next/router';
// import { useCreateChatMessageMutation, useRespondToChatMessageMutation } from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import { SendIcon } from '../../../public/assets/icons/SendIcon';

type FormInput = {
  body: string;
};

function ChatForm(props: any) {
  const router = useRouter();
  const { socket } = useSockets();
  const { slug } = router.query;
  // console.log(socket)
  
  // const messageslug = slug as string;
  // const username = messageslug?.split("-")[1];

  const { user: user } = useAppSelector(isUser);
  const {
    // setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const pathname = router.pathname;
  // const { username } = router.query;
  const me = user;

  const data = props?.props ? props?.props: {};
  const {chatId, receiverId } = data
  // console.log(" the chat id data",chatId);

  const onSubmit = async ({ body }: any) => {
    if (chatId !== "" && chatId !== undefined) {
      // console.log(chatId, "are you shooting this off?");
      try {
        // console.log(" i went to off blud")
        socket.emit(
          "respondToChat",
          { sender: user?.id, chatId, body, receiver: receiverId },
          (error: any) => {
            if (error) {
              console.log(
                " Something went wrong please try again later.",
                error
              );
            }
          }
        );
      } catch (ex) {
        console.log(ex);
        // throw ex;
      }
    } else {
      try {
        // console.log(chatId, "we don't have a chat id broo");
        socket.emit(
          "createChat",
          { owner: me?.id, recipient: receiverId, body, slug },
          (error: any) => {
            if (error) {
              console.log(" Something went wrong please try again later.");
            }
          }
        );
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


