import React from "react";
// import Conversation from "../Chat/Conversation";
// import OnlineChat from "../OnlineChat";
// import { BackOverlay } from "components/Dashboard/LeftSideBar/leftside.styles";
// import slugify from "slugify";
// import { v4 } from "uuid";
// import { useRouter } from "next/router";

import {
  // SearchUsersQuery,
  // Exact,
  // useSearchUsersQuery,
  // SearchUsersQueryResult,
  // SearchUsersDocument,
} from "generated/graphql";

// import { SearchNewIcon } from "../../../public/assets/icons/SearchNewIcon";

// import Dashboard from "components/Dashboard/";
// import {
//   MsgContainer,
//   MsgChatMenu,
//   MsgChatMenuWrapper,
//   MsgChatMenuInput,
//   OnlineChatContainer,
//   OnlineChatWrapper,
//   ChatBoxContainer,
//   ChatBoxWrapper,
//   MasSearchGroup,
//   ConversationGroup,
// } from "./msg.styles";

// import { useAppSelector } from "app/hooks";
// import { isUser } from "features/auth/selectors";
// import { QueryResult } from '@apollo/client';
// import { client } from "lib/initApollo";
// import { useSockets } from "context/socket.context";

// type pageProps = {
//   props: { data: { data: any } };
//   children:
//     | boolean
//     | React.ReactChild
//     | React.ReactFragment
//     | React.ReactPortal
//     | null
//     | undefined;
// };



type newProps = {
  children: any;
  // data: {
  //   data: {};
  // };
  props: {
    data: {
      
    };
  };
};


const ChatSideBar = ({ children, props }: newProps) => {
  // const router = useRouter()
  // console.log(props.data);
  // const dta = props.data;
  // const data = props.data?.data;
  // const [menuState, setMenuState] = useState(false);
  // const { user: user } = useAppSelector(isUser);
  // const { socket } = useSockets();

  // {
  //   menuState && (
  //     <BackOverlay onClick={() => setMenuState(false)} className="" />
  //   );
  // }
  // const [filteredMessages, setFilteredMessages] = useState([]);
  // const messages = data ? data : dta;
  // const me = user;

  // const [searchedUsers, setSearchedUsers] = useState([]);
  // const [searchItem, setSearchItem] = useState("");
  // const [slug, setSlug] = useState("");
  // const [newChat, setNewChat] = useState(null);

  // // console.log(messages)

  // useEffect(() => {
  //   setFilteredMessages(messages);
  // }, [messages]);

  // useEffect(() => {
  //   if (newChat) {
  //     const newChatItem = newChat;
  //     const newArrayItem: any = (prevArray: []) => {
  //       return [...prevArray, newChatItem];
  //     };
  //     setFilteredMessages(newArrayItem);
  //   }
  // }, [newChat]);

  // socket.on("chat", (dt) => {
  //   console.log(dt);
  //   setNewChat(dt);
  // });

  // const handleSearch = async (event: { target: { value: string } }) => {
  //   // const generatedToken = v4();
  //   setSearchItem(event.target.value);
  //   // console.log(searchItem);
  //   if (filteredMessages !== []) {
  //     if (searchItem !== "") {
  //       // console.log(messages);
  //       const filteredData = messages?.filter((msg: any) => {
  //         // console.log(msg?.attributes?.slug);
  //         setSlug(msg?.attributes?.slug);
  //         return Object.values(
  //           msg.attributes?.owner?.data.attributes.username ||
  //             msg.attributes?.recipient?.data.attributes.username
  //         )
  //           .join(" ")
  //           .toLowerCase()
  //           .includes(searchItem.toLowerCase());
  //       });
  //       // console.log(filteredData);
  //       setFilteredMessages(filteredData);
  //       if (filteredData && filteredData.length === 0) {
  //         // console.log(filteredData, "I am filtered data");
  //         const res = await client.query<SearchUsersQueryResult>({
  //           query: SearchUsersDocument,
  //           variables: {
  //             filters: {
  //               username: {
  //                 startsWith: searchItem,
  //               },
  //             },
  //           },
  //         });

  //         const searchUsers: any = res?.data?.usersPermissionsUsers.data;
  //         // console.log(searchUsers, "I am response data");
  //         if (searchUsers.length !== 0 && searchItem !== "") {
  //           // const generatedToken = v4();
  //           setSearchedUsers(searchUsers);

  //           searchUsers.map((usr) => {
  //             // console.log(user)
  //             setSlug(slugify(me?.username + "-" + usr.attributes.username));
  //             // console.log(slug);
  //           });
  //           // console.log(searchedUsers);
  //         } else setSearchedUsers([]);
  //       }

  //       // console.log(filteredData);
  //     } else setFilteredMessages(filteredMessages);
  //   } else {
  //     // console.log("I am searching here brah");
  //     const res = await client.query<SearchUsersQueryResult>({
  //       query: SearchUsersDocument,
  //       variables: {
  //         filters: {
  //           username: {
  //             startsWith: searchItem,
  //           },
  //         },
  //       },
  //     });
  //     const searchUsers = res?.data?.usersPermissionsUsers.data;
  //     // console.log(searchUsers.length, "I am response data");
  //     if (searchUsers.length !== 0) {
  //       // const generatedToken = v4();
  //       setSearchedUsers(searchUsers);
  //       searchUsers.map((usr) => {
  //         console.log(user);
  //         setSlug(slugify(me?.username + "-" + usr.attributes.username));
  //         console.log(slug);
  //       });

  //       // console.log(searchedUsers);
  //     }
  //   }
  // };

  // if (loading) {
  //   return <div>loading...</div>;
  // }

  return (
    <>
      {/* <Dashboard>
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
                  value={searchItem}
                />
              </MasSearchGroup>

              {!filteredMessages && (
                <>
                  <br />
                  <br />
                  <p style={{ paddingLeft: 40 }}>You have no messages</p>
                </>
              )}
              {filteredMessages !== undefined &&
                filteredMessages.map((msg: messageProps) =>
                  me?.id !== msg?.attributes?.owner?.data.id ||
                  me?.id == msg?.recipient?.id ? (
                    <ConversationGroup
                      key={msg?.id ? msg?.id : msg?.slug}
                      className={menuState ? "opened" : ""}
                    >
                      <Conversation
                        username={
                          msg?.attributes?.owner?.data.attributes.username
                            ? msg?.attributes?.owner?.data.attributes.username
                            : msg?.owner?.username
                        }
                        image={
                          msg?.attributes?.owner?.data.attributes.img
                            ? msg?.attributes?.owner?.data.attributes.img
                            : msg?.owner?.img
                        }
                        id={
                          msg?.attributes?.owner?.data.id
                            ? msg?.attributes?.owner?.data.id
                            : msg?.owner?.id
                        }
                        slug={
                          msg?.attributes?.slug
                            ? msg?.attributes?.slug
                            : msg?.slug
                        }
                      />
                    </ConversationGroup>
                  ) : (
                    <ConversationGroup
                      key={msg?.id ? msg?.id : msg?.slug}
                      className={menuState ? "opened" : ""}
                    >
                      <Conversation
                        username={
                          msg.attributes?.recipient?.data.attributes.username
                            ? msg.attributes?.recipient?.data.attributes
                                .username
                            : msg?.recipient?.username
                        }
                        image={
                          msg.attributes?.recipient?.data.attributes.img
                            ? msg.attributes?.recipient?.data.attributes.img
                            : msg?.recipient?.img
                        }
                        id={
                          msg?.attributes?.recipient?.data.id
                            ? msg?.attributes?.recipient?.data.id
                            : msg.recipient?.id
                        }
                        slug={
                          msg?.attributes?.slug
                            ? msg?.attributes?.slug
                            : msg?.slug
                        }
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
                searchedUsers.map(
                  ({ attributes: { img, username, online } }, id) => (
                    <OnlineChat
                      key={id}
                      img={img}
                      username={username}
                      slug={slug}
                      online={online}
                    />
                  )
                )}
            </OnlineChatWrapper>
          </OnlineChatContainer>
        </MsgContainer>
      </Dashboard> */}
    </>
  );
};

export default ChatSideBar;
