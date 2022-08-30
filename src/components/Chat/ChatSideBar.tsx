import React, { SetStateAction, useEffect, useState } from "react";
// import Link from "next/link";
import Conversation from "../Chat/Conversation";
import OnlineChat from "../OnlineChat";
import { BackOverlay } from "components/Dashboard/LeftSideBar/leftside.styles";
// import slugify from "slugify";
import { v4 } from "uuid";

import {
  SearchUsersQuery,
  SearchUsersDocument,
} from "generated/graphql";

import { SearchNewIcon } from "../../../public/assets/icons/SearchNewIcon";

import Dashboard from "components/Dashboard/";
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
import { useRouter } from "next/router";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
// import { QueryResult } from '@apollo/client';
import { client } from "lib/initApollo";
import { useSockets } from "context/socket.context";
import { useForm } from "react-hook-form";

type chatProps = {
  id: string;
  slug: string;
  createdAt: {
    id: string;
    username: string;
    img: string;
  };
  owner: {
    id: string;
    username: string;
    img: string;
  };
  recipient: any;
  counUnread : any
};

type FormInput = {
  searchItem: string;
};


const ChatSideBar = ({children}: any) => {
  const [menuState, setMenuState] = useState(false);
  const { user: user } = useAppSelector(isUser);
  const { socket } = useSockets();
  // console.log(socket);
  {
    menuState && (
      <BackOverlay onClick={() => setMenuState(false)} className="" />
    );
  }
  const [filteredMessages, setFilteredMessages] = useState([]);

  const [messages, setMessages] = useState([]);
  const me = user;

  const [searchedUsers, setSearchedUsers] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [generatedslug, setSlug] = useState("");
  // const [existingSlug, setExistingSlug] = useState("");
  const [newChat, setNewChat] = useState(null);
  const [filteredSearchUsers , setfilteredSearchUsers] = useState([]);
  const router = useRouter();
  const queryparams = router.query
  const obj = {
    id : me?.id,
    slug : queryparams?.slug
  }

  const {
    // setValue,
    reset,
  } = useForm<FormInput>();
  
  
  useEffect(() => {
    if (newChat) {
      const newChatItem = newChat;
      const newArrayItem: any = (prevArray: []) => {
        return [...prevArray, newChatItem];
      };
      console.log({newChatItem})
      setFilteredMessages(newArrayItem);
    }
  }, [newChat]);

  useEffect(() => {
   
    if(queryparams?.slug)
    {
      obj.slug = queryparams?.slug
    }
    else{
      delete obj.slug
    }

    socket.emit("load all chats", obj, (error: any, d: any) => {

      if (error) {
        console.log(" Something went wrong please try again later.", error);
      }
      console.log("CHAT LOADED HERE MANY TIMES");
      
    });
  }, [me]);


  useEffect(() => {
    setFilteredMessages(messages);
  }, [messages]);

  useEffect(() => {
    
    socket.on("chats loaded", (dt) => {
      
      // setChat(dt);
      setMessages(dt.chat);
      console.log({dt} , "====>dt");
    });
  }, []);

  useEffect(() => {
    socket.on("chat", (dt) => {
      setNewChat(dt);
    });
  }, [])
  

  useEffect(() => {
    socket.on("emptyusers", (dt) => {
      setfilteredSearchUsers([]);
      reset({searchItem : ""})
    });
  }, [])

  useEffect(() => {
    socket.on("users", (users) => {
      setfilteredSearchUsers(users)
      console.log(users , "FILTERED USERS");
    });
  }, [])

  // useEffect(() => {
  //   if(searchedUsers.length > 0)
  //   { 
  //   }
  // }, [searchedUsers])
  
  const handleSearch = async (event: { target: { value: string } }) => {

    // const generatedToken = v4();
    const targetValue =event.target.value
    console.log(event.target.value , "eventtargetvalue");
    
    setSearchItem(event.target.value);
    console.log(searchItem);
    console.log(filteredMessages , "newmesssages2")
    if (filteredMessages.length > 0) {
      if (searchItem !== "") {
        console.log(messages , "newmesssages");
        const filteredData = messages?.filter((msg: any) => {
          console.log(msg?.attributes?.slug);
          setSlug(msg?.slug);
          return Object.values(msg?.owner?.username || msg?.recipient?.username)
            .join(" ")
            .toLowerCase()
            .includes(searchItem.toLowerCase());
        });
        console.log({filteredData});
        // setFilteredMessages(filteredData);
        if (filteredData && filteredData.length === 0) {
          console.log(filteredData, "I am filtered data");
          if(event.target.value != "")
          {
            socket.emit("getallusers", {targetValue , me : me?.id}, (error: any, d: any) => {
              if (error) {
                console.log(" Something went wrong please try again later.", error);
              }    
            });
          }
          else{
            setfilteredSearchUsers([])
          }
          


          const res = await client.query<SearchUsersQuery>({
            query: SearchUsersDocument,
            variables: {
              filters: {
                username: {
                  startsWith: searchItem,
                },
              },
            },
          });


      console.log({res} , "rrrrr");

          const searchUsers: any = res?.data?.usersPermissionsUsers?.data;
          // console.log(searchUsers, "I am response data");
          if (searchUsers.length !== 0 && searchItem !== "") {
            const generatedToken = v4();
            console.log({generatedToken})
            setSearchedUsers(searchUsers);
            setSlug(generatedToken);

            // searchUsers.map((usr: { attributes: { username: string } }) => {
            //   // console.log(user)
            //   setSlug(slugify(me?.username + "-" + usr.attributes.username));
            //   // console.log(slug);
            // });
            console.log({searchUsers});
          } else setSearchedUsers([]);
        }

        // console.log(filteredData);
      } else setFilteredMessages(filteredMessages);
    } else {
      console.log("I am searching here brah" ,searchItem);
      
      const res = await client.query<SearchUsersQuery>({
        query: SearchUsersDocument,
        variables: {
          filters: {
            username: {
              startsWith: searchItem,
            },
          },
        },
      });

        if(event.target.value != "")
            {
              socket.emit("getallusers", {targetValue , me : me?.id}, (error: any, d: any) => {
                if (error) {
                  console.log(" Something went wrong please try again later.", error);
                }    
              });
            }
      
      const searchUsers = res?.data?.usersPermissionsUsers?.data;
      console.log(searchUsers, "I am response data");
      if (searchUsers?.length !== 0) {
        const generatedToken = v4();
        setSearchedUsers(searchUsers as SetStateAction<never[]>);
        setSlug(generatedToken);
        // searchUsers?.map((usr) => {
        //   console.log(user);
        //   setSlug(slugify(me?.username + "-" + usr?.attributes?.username));
        //   console.log(slug);
        // });

        // console.log(searchedUsers);
      }
    }
  };

  // if (loading) {
  //   return <div>loading...</div>;
  // }

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
              {filteredMessages &&
                filteredMessages.map((msg: chatProps) =>
                  me?.id !== msg?.owner?.id ? (
                    <ConversationGroup
                      key={msg?.id}
                      className={menuState ? "opened" : ""}
                    >
                      <Conversation
                        key={msg?.id}
                        username={msg?.owner?.username}
                        image={msg?.owner?.img}
                        id={msg?.owner?.id}
                        slug={msg?.slug}
                        count={msg?.counUnread}
                      />
                    </ConversationGroup>
                  ) : (
                    <ConversationGroup
                      key={msg?.id}
                      className={menuState ? "opened" : ""}
                    >
                      <Conversation
                        key={msg?.id}
                        username={msg?.recipient?.username}
                        image={msg?.recipient?.img}
                        id={msg.recipient?.id}
                        slug={msg?.slug}
                        count={msg?.counUnread}
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
              {searchedUsers.length > 0 &&
                filteredSearchUsers.map(
                  ({ img, username, online , slug} , id) => (
                    <OnlineChat
                      key={id}
                      img={img}
                      username={username}
                      slug={slug != null  ? slug : generatedslug}
                      online={online}
                    />
                  )
                )}
            </OnlineChatWrapper>
          </OnlineChatContainer>
        </MsgContainer>
      </Dashboard>
    </>
  );
};

export default ChatSideBar;
