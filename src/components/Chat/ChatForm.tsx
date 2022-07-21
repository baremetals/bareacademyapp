import React from "react";
import { useForm } from "react-hook-form";
import { useSockets } from "context/socket.context";

import {
  ChatBoxBottom,
  ChatMessageInput,
  ChatMessageInputGroup,
  ChatSubmitButton,
} from "./msg.styles";
import { useRouter } from "next/router";
// import { useCreateChatMessageMutation, useRespondToChatMessageMutation } from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import { SendIcon } from "../../../public/assets/icons/SendIcon";

type FormInput = {
  body: string;
};

function ChatForm(props: any) {
  const router = useRouter();
  const { socket } = useSockets();
  const { slug, username } = router.query;
  // const messageslug = slug as string;
  // const username = messageslug?.split("-")[1];

  const { user: user } = useAppSelector(isUser);
  console.log(router.query, "query");

  const {
    // setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInput>();

  const pathname = router.pathname;
  // const { username } = router.query;
  const me = user;

  const data = props?.props ? props?.props : {};
  // const msgs = props?.messages ? props?.messages: {};
  const { chatId, receiverId } = data;

  const onSubmit = async ({ body }: any) => {
    console.log(" the chat id data", data);
    if (chatId !== "" && chatId !== undefined) {
      console.log(chatId, "are you shooting this off?");
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
              throw error;
            }
          }
        );

        reset({ body: "" });
      } catch (ex) {
        console.log(ex);
        // throw ex;
      }
    } else {
      try {
        console.log(username, "we don't have a chat id broo");
        socket.emit(
          "createChat",
          { owner: me?.id, recipient: username, body, slug },
          (error: any) => {
            if (error) {
              console.log(
                " Something went wrong please try again later. error"
              );
            }
          }
        );

        reset({ body: "" });
      } catch (ex) {
        console.log(ex, "here is error");
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

export default ChatForm;
