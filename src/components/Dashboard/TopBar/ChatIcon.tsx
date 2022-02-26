import React from 'react'
import Link from "next/link";
// import { IconBadge, IconItem } from "./topbar.styles";
import {IconItem } from "./topbar.styles";
// import { useQuery } from "@apollo/client";
import { CommentIcon } from "../../../../public/assets/icons/CommentIcon";

// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { GetAllUnReadChatMsgsByUserIdDocument, useNewChatMessageSubscription, User } from 'generated/graphql';

// type MessagePageType = {
//   body: string;
//   createdBy: string;
//   id: string;
//   createdOn: string;
//   isRead: boolean;
//   // receiver: User;
//   // sender: User;
// };


const ChatIcon = () => {
  // Chat Messages Call
  // const rs = useQuery(GetAllUnReadChatMsgsByUserIdDocument);
  // const dta = useNewChatMessageSubscription();
  // const newChatMessage = dta?.data?.newChatMessage;
  // const messages = rs.data?.getAllUnReadChatMsgsByUserId.chatMsgs;

  // const [msgArray, setMsgArray] = useState([]);

// const [markAllNoticeRead] = useMarkAllMessagesReadByUserIdMutation();

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

  // const chatMsgLength: number = msgArray.concat(messages).length;

//   const markMessageRead = async () => {
//     const id: string = userId.id;
//     // console.log(id);
//     const res = await markAllNoticeRead({
//       variables: { id },
//     });
//     console.log(res, id);
//     if (!res.data?.markAllMessagesReadByUserId.includes("edited")) {
//       toast.error(res.data?.markAllMessagesReadByUserId);
//     }
//   };

  return (
    <>
      <IconItem>
        <Link href="/messages">
          <div>
            <CommentIcon />
          </div>
        </Link>
        {/* {chatMsgLength != 0 && messages !== undefined && (
          <IconBadge>{chatMsgLength}</IconBadge>
        )} */}
      </IconItem>
      {/* <ToastContainer /> */}
    </>
  );
}

export default ChatIcon
