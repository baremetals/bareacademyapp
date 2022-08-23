import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { useSockets } from "context/socket.context";
import { IconBadge, IconItem } from "./topbar.styles";
// import { useQuery } from "@apollo/client";
import { CommentIcon } from "../../../../public/assets/icons/CommentIcon";

// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// type MessagePageType = {
//   body: string;
//   createdBy: string;
//   id: string;
//   createdOn: string;
//   isRead: boolean;
//   // receiver: User;
//   // sender: User;
// };


const ChatIcon = (userId: { id: string }) => {
  const { socket } = useSockets();
  // const [msgArray, setMsgArray] = useState([]);
  const [msgTotal, setMsgTotal] = useState("");
  // const _isMounted = useRef(true);

  // Chat Messages Call
  // useEffect(() => {
  //   if (newChatMessage) {
  //     const newChatMessageItem = newChatMessage;
  //     const newArrayItem: any = (prevArray: MessagePageType[]) => {
  //       return [...prevArray, newChatMessageItem];
  //     };
  //     setMsgArray(newArrayItem);
  //   }
  // }, [newChatMessage]);

  // useEffect(() => {
  //   // let mounted = true;
  //   if (userId.id !== "") {
  //     if (_isMounted) {
  //       socket.emit(
  //         "load unread messages",
  //         { id: userId.id },
  //         (error: any, d: any) => {
  //           if (error) {
  //             console.log(
  //               " Something went wrong please try again later.",
  //               error
  //             );
  //           }
  //         }
  //       );
  //     }
  //   }

  //   return () => {
  //     _isMounted.current = false;
  //   };
    
  // }, [userId.id]);

  useEffect(() => {
    socket.on("chatMsgs loaded", (dt) => {

      console.log("call to chaticon");
      
      setMsgTotal(dt);
      // console.log(dt);
    });
  }, [socket])

  

  return (
    <>
      <IconItem>
        <Link href="/messages">
          <div>
            <CommentIcon />
          </div>
        </Link>
        {msgTotal != '' && <IconBadge>{msgTotal}</IconBadge>}
      </IconItem>
      {/* <ToastContainer /> */}
    </>
  );
};

export default ChatIcon
