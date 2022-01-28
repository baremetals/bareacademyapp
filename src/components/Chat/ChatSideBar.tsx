import React, { useEffect, useState } from "react";
import Conversation from "../Chat/Conversation";
import OnlineChat from "../OnlineChat";
import {
  BackOverlay,
} from "components/Dashboard/LeftSideBar/leftside.styles";

import { SearchNewIcon } from "../../../public/assets/icons/SearchNewIcon";

import Dashboard from "components/Dashboard/"
import {
  MsgContainer,
  MsgChatMenu,
  MsgChatMenuWrapper,
  MsgChatMenuInput,
  OnlineChatContainer,
  OnlineChatWrapper,
  ChatBoxContainer,
  ChatBoxWrapper,
  MasSearchGroup,
  ConversationGroup,
} from "./msg.styles";
import {
  ChatMsg,
  GetAllChatsByUserIdDocument,
  SearchUsersDocument,
  SearchUsersQueryResult,
  useNewChatSubscription,
  User,
} from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import { client } from 'lib/initApollo';
// import Message from 'components/Message';
import { useQuery } from '@apollo/client';

type ChatBarType = {
  id: string;
  chatMsgs: ChatMsg;
  owner: User;
  recipient: User;
};

const ChatSideBar = ({ children, props }: any) => {
  const { ...result } = useQuery(GetAllChatsByUserIdDocument);

  const { data } = useNewChatSubscription();
  const [menuState, setMenuState] = useState(false);
  const { user: user } = useAppSelector(isUser);
  {
    menuState && (
      <BackOverlay onClick={() => setMenuState(false)} className="" />
    );
  }
  const [filteredMessages, setFilteredMessages] = useState([]);

  const chats: any = result.data?.getAllChatsByUserId;
  const messages = chats?.chats;
  const errMsg: any = result.data?.getAllChatsByUserId;
  const errorMsg = errMsg?.messages;
  const me = user;

  // chat subscription data
  const newChat = data?.newChat;

  const [searchedUsers, setSearchedUsers] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  // console.log(messages);

  useEffect(() => {
    setFilteredMessages(messages);
  }, [messages]);

  useEffect(() => {
    if (newChat) {
      const newChatItem = newChat;
      const newArrayItem: any = (prevArray: ChatBarType[]) => {
        return [...prevArray, newChatItem];
      };
      setFilteredMessages(newArrayItem);
    }
  }, [newChat]);

  const handleSearch = async (event: { target: { value: string } }) => {
    setSearchItem(event.target.value);
    // console.log(searchItem);
    if (filteredMessages !== []) {
      if (searchItem !== "") {
        const filteredData = messages.filter((msg: any) => {
          return Object.values(msg.owner.username || msg.recipient.username)
            .join(" ")
            .toLowerCase()
            .includes(searchItem.toLowerCase());
        });
        setFilteredMessages(filteredData);
        if (filteredData && filteredData.length === 0) {
          console.log(filteredData);
          const res = await client.query<SearchUsersQueryResult>({
            query: SearchUsersDocument,
            variables: {
              searchItem,
            },
          });
            const { searchUsers }: any = res.data;
          if (searchUsers.users.length !== 0 && searchItem !== "") {
            setSearchedUsers(searchUsers.users);
            // console.log(searchedUsers);
          } else setSearchedUsers([]);
        }

        // console.log(filteredData);
      } else setFilteredMessages(filteredMessages);
    } else {
      const res = await client.query<SearchUsersQueryResult>({
        query: SearchUsersDocument,
        variables: {
          searchItem,
        },
      });
      const { searchUsers }: any = res.data;
      if (searchUsers.users) {
        setSearchedUsers(searchUsers.users);
        // console.log(searchedUsers);
      }
    }
  };

  if (!result.data?.getAllChatsByUserId || result.loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <Dashboard>
        <MsgContainer>
          {menuState && (
            <BackOverlay
              onClick={() => setMenuState(false)}
              className="BackOverlay"
            />
          )}
          <MsgChatMenu>
            <MsgChatMenuWrapper>
              <MasSearchGroup>
                <SearchNewIcon />
                <MsgChatMenuInput
                  type="text"
                  placeholder="Search for a user"
                  onChange={handleSearch}
                  name="searchItem"
                  // value={searchItem}
                />
              </MasSearchGroup>

              {errorMsg && (
                <>
                  <br />
                  <br />
                  <p style={{paddingLeft: 40}}>You have no messages</p>
                </>
              )}
              {filteredMessages !== undefined &&
                filteredMessages.map(
                  (
                    msg: {
                      id: string | undefined;
                      recipient: {
                        id: string | undefined;
                        username: string;
                        profileImage: string;
                      };
                      owner: {
                        id: string;
                        username: string;
                        profileImage: string;
                      };
                    },
                    id: React.Key | null | undefined
                  ) =>
                    me?.id !== msg.recipient.id ? (
                      <ConversationGroup
                        key={id}
                        className={menuState ? "opened" : ""}
                      >
                        <Conversation
                          username={msg.recipient.username}
                          image={msg.recipient.profileImage}
                          id={msg.id}
                        />
                      </ConversationGroup>
                    ) : (
                      <ConversationGroup
                        key={id}
                        className={menuState ? "opened" : ""}
                      >
                        <Conversation
                          username={msg.owner.username}
                          image={msg.owner.profileImage}
                          id={msg.id}
                        />
                      </ConversationGroup>
                    )
                )}
            </MsgChatMenuWrapper>
          </MsgChatMenu>

          <ChatBoxContainer>
            <ChatBoxWrapper>{children}</ChatBoxWrapper>
          </ChatBoxContainer>

          <OnlineChatContainer>
            <OnlineChatWrapper>
              {searchedUsers !== [] &&
                searchedUsers.map(({ profileImage, username, online }, id) => (
                  <OnlineChat
                    key={id}
                    profileImage={profileImage}
                    username={username}
                    online={online}
                  />
                ))}
            </OnlineChatWrapper>
          </OnlineChatContainer>
        </MsgContainer>
      </Dashboard>
    </>
  );
};

export default ChatSideBar


