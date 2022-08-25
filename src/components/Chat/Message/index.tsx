import React, { useEffect, useState, useRef } from "react";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { useRouter } from "next/router";
import { useSockets } from "context/socket.context";
import {
  MessageWrap,
  MessageTop,
  MessageImg,
  MessageText,
  MessageDateTime,
  OwnerMessageWrap,
  OwnerMessageText,
  ScrollChat,
  DeleteIcon,
  MessageTopName,
  EditIcon
} from "./message.styles";

import { ChatBoxTop, MessageGroup } from '../msg.styles';
import Chatform from "../ChatForm";
import User from 'models/User';

type MessagePageType = {
  body: string;
  updatedAt: Date;
  id: string;
  createdAt: Date;
  isRead: boolean;
  receiver: User;
  sender: User;
  chat: {
    id: string;
  }
};

type socketMessage = {
  msg: MessagePageType;
  to: string;
  from: string;
};

// type chatType = {
//   id: string;
// }

function Message() {
  const router = useRouter();
  const { socket } = useSockets();
  const { slug , username} = router.query;

  const { user: user } = useAppSelector(isUser);
  const pathname = router.pathname;

  // console.log(slug);

  // eslint-disable-next-line no-unused-vars
  const [newChatMessage, setNewChatMessage] = useState<socketMessage>();
  const [messages, setMessages] = useState([]);
  const [msgArray, setMsgArray] = useState([]);
  const [selectedEditMessage, setSelectedEditMessage] = useState({});
  const [chatId, setChatId] = useState<Object>({});

  // const [users, setUsers] = useState([]);

  const me: string | undefined | any = user?.id;
  const scrollUpdate: any = useRef(null || undefined);


  const requestAndShowPermission = ()=> {
    Notification.requestPermission(function (permission) {
    });
}
const showNotification =(msg : any)=> {
  //  if(document.visibilityState === "visible") {
  //      return;
  //  }
   const title = msg?.sender?.username;
   const icon = 'https://homepages.cae.wisc.edu/~ece533/images/zelda.png'; 
  //  // this is a large image may take more time to show notifiction, replace with small size icon
   const body = msg?.body;

   const notification = new Notification(title, { body, icon });

   notification.onclick = () => {
          notification.close();
          window.parent.focus();
   }
   
}
const deleteCurrentMessage = (id : any)=>{
  const con = confirm("Are you sure you want to delete" );
  const sendData = {
    slug : slug,
    chatId : id,
    userId : me,
    username : username
  }
  if(con)
  {
    socket.emit("deleteChatMsg" , sendData ,(error: any, d: any) => {
      if (error) {
        console.log(" Something went wrong please try again later while delete message.", error);
      }
    });
  }
  

  console.log({con});
  
}

const editCurrentMessage = (id : any , message : any)=>{
  setSelectedEditMessage({id, message })
}




  useEffect(() => {
    if (socket == null) return;
    console.log({me} , "=====>me");
    if(me != 'undefined')
    {
      socket.emit("load all messages", { slug  ,username , me}, (error: any, d: any) => {
        if (error) {
          console.log(" Something went wrong please try again later.", error);
        }
      });
    }
    
    socket.off("message");
  }, [socket, slug]);







  useEffect(() => {
    if (messages && messages.length > 0) {
      scrollUpdate.current?.scrollIntoView({
        behavior: "instant",
        block: "end",
      });
    }
  }, [messages, msgArray]);

  useEffect(() => {
    console.log('Iam am here')
    if (newChatMessage) {
      console.log(newChatMessage);
      const newChatMessageItem = newChatMessage.msg;
      const newArrayItem: any = (prevArray: MessagePageType[]) => {
        console.log({prevArray});
        return [newChatMessageItem];
      };
      if (me === newChatMessage.to && me !== newChatMessage.from)setMsgArray([]);
      // setMsgArray(newArrayItem);
    }
  }, [newChatMessage]);

  useEffect(() => {
    if (messages && messages.length > 0) {
      const msg: MessagePageType = messages[0];
      console.log({msg});
      
      const id = msg?.chat?.id;
      let receiverId;
      if (msg?.receiver?.id !== me) {
        receiverId = msg?.receiver?.id;
      } else {
        receiverId = msg?.sender?.id;
      }
      const data = {
        chatId: id,
        receiverId,
      };

      console.log(data , "data==>");
      console.log(msg , "===msg");
      
      
      setChatId(data);
    }
    else{
      setChatId({});
    }
  }, [messages]);

  useEffect(() => {
    // if (socket == null) return;
    socket.on("messages loaded", (dt) => {
      console.log({dt} , "=====>dt");
      setMessages(dt);
    });

    
    // socket.off("messages loaded");
  }, [socket]);


  useEffect(()=>{
    socket.on("getsinglechatnotification" , (msg)=>{
      console.log({me});
      console.log({msg});
      
      const permission = Notification.permission;
      if(permission === "granted"){
        // if()
        
        if(me == msg?.msg?.receiver?.id)
        {
          showNotification(msg?.msg);
        }
      
     } else if(permission === "default"){
        requestAndShowPermission();
     }
    })
  } , [socket])
  // useEffect(() => {
  //   // if (socket == null) return;
  //   socket.on("message", (dta) => {
  //     console.log(dta)
  //     if (me === dta.to || me === dta.from) {
  //       setNewChatMessage(dta.msg);
  //     }
  //     // setNewChatMessage(dta.msg);
  //   });

  //   socket.off("message");
  // }, [socket]);

  socket.on("message", (dta) => {
    console.log(dta.to, dta.from);
    // if (me === dta.to) {
    //   setNewChatMessage(dta.msg);
    // }
    setNewChatMessage(dta);
  });

  // socket.on("users", (usrs) => {
  //   console.log(usrs);
  //   // setUsers(usrs);
  // });

  console.log({msgArray});
  

  return (
    <>
     <MessageTopName> <b> {username} </b></MessageTopName>
      <ChatBoxTop>
        
        <MessageGroup>
          
          {pathname !== "/messages" && (
            <ScrollChat ref={scrollUpdate}>
              {/* {result.error || !messages || (msgArray.length === 0 && null)} */}
             
              {messages &&
                [...messages , ...msgArray].map((msg: any, id: any) =>
                  me == msg?.sender?.id ? (
                    // This part shows on the right, the right is for the logged in user
                    <OwnerMessageWrap key={id}>
                      <MessageTop>
                        <MessageImg
                          alt="Message image"
                          src={msg?.sender?.img}
                        />
                        <OwnerMessageText>{msg?.body}</OwnerMessageText>
                        <div onClick={()=> deleteCurrentMessage(msg?.id)}>
                        <DeleteIcon></DeleteIcon>
                       
                        </div>
                        <div>
                        <EditIcon onClick={()=>editCurrentMessage(msg?.id , msg?.body)}></EditIcon>
                        </div>

                      </MessageTop>
                      <MessageDateTime>
                        {dayjs(msg?.createdAt).fromNow()}
                      </MessageDateTime>
                    </OwnerMessageWrap>
                  ) : (
                    // This part shows on the left
                    <MessageWrap key={id}>
                      <MessageTop>
                        <MessageImg
                          alt="Message image"
                          src={msg?.sender?.img}
                        />
                        <MessageText>{msg?.body}</MessageText>
                        {/* <div onClick={()=> deleteCurrentMessage(msg?.id)}>
                        <DeleteIcon></DeleteIcon>
                        </div> */}
                        
                      </MessageTop>
                      <MessageDateTime>
                        {dayjs(msg?.createdAt).fromNow()}
                      </MessageDateTime>
                    </MessageWrap>
                  )
                )}
            </ScrollChat>
          )}
        </MessageGroup>
      </ChatBoxTop>
      <Chatform props={chatId} messages={messages} setSelectedEditMessage={setSelectedEditMessage}  selectedEditMessage={selectedEditMessage}/>
    </>
  );
}

export default Message;
