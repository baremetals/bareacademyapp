import React from 'react'
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useIsAuth } from 'lib/isAuth';
import ChatContainer from 'components/Chat/ChatContainer';
import { initializeApollo } from "lib/apolloClient";
import {
  // ChatsDocument,
  // ChatsQueryResult,
  ChatMsgsQueryResult,
  ChatMsgsDocument,
} from "generated/graphql";
import { queryProps } from "models/Shared";

function Chat(props: queryProps) {
  useIsAuth();
  return (
    <>
      <ChatContainer props={props} />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const { slug } = ctx.query;
    const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
    const cookies = JSON.parse(ctx.req.cookies.bareacademy);
    const { jwt, id } = cookies;
    const token = `Bearer ${jwt}`

    const getChatData = async () => {
      try {
        return (
          await axios({
            method: "GET",
            url: `${baseUrl}/chats`,
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
            data: {
              id,
            },
          })
        ).data;

        // console.log(response.data, "I am the response going off brah")
      } catch (err) {
        console.log("fuck me finally", err);
      }
    };

    const data = await getChatData();
    
    const apolloClient = initializeApollo(null, token);
    // const chatData = await apolloClient.query<ChatsQueryResult>({
    //   query: ChatsDocument,
    // });

    const msgData = await apolloClient.query<ChatMsgsQueryResult>({
      query: ChatMsgsDocument,
      variables: {
        filters: {
          chat: {
            slug: {
              eq: slug,
            },
          },
        },
        pagination: {
          start: 0,
          limit: 20,
        },
        sort: "updatedAt:asc",
      },
    });
    return {
      props: {
        data: {
          data,
          msgData,
        },
      },
    };
  }
);
export default Chat
