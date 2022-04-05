import React, { useState } from "react";
import Link from "next/link";
import { IconBadge, IconItem } from "./topbar.styles";
import { useRouter } from "next/router";


import { WellIcon } from "../../../../public/assets/icons/WellIcon";
import { useQuery } from '@apollo/client';
import {
  GetUnReadNotificationsDocument,
  // useMarkAllMessagesReadByUserIdMutation,
} from "generated/graphql";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


// type NotificationsPageType = {
//   image: string;
//   body: string;
//   createdOn: string;
//   id: string;
// };

const AlarmBell = (userId: { id: string; }) => {
  const router = useRouter();
  // Notifications Call
  
  const { ...result } = useQuery(GetUnReadNotificationsDocument, {
    variables: {
      filters: {
        user: {
          id: {
            eq: userId.id,
          },
        },
        and: [
          {
            isRead: {
              eq: false,
            },
          },
        ],
      },
    },
  });
  const notices = result?.data?.notifications?.data;
  // const { data } = useNewMessageSubscription();
  // const newNotice = data?.newMessage;
  // eslint-disable-next-line no-unused-vars
  const [noticeArray, setNoticeArray] = useState([]);

  // const [markAllNoticeRead] = useMarkAllMessagesReadByUserIdMutation();

  // console.log(result?.data?.notifications?.data);
  // Notifications Call
  // useEffect(() => {
  //   if (newNotice) {
  //     const newMessageItem: NotificationsPageType = newNotice;
  //     const newArrayItem: any = (prevArray: NotificationsPageType[]) => {
  //       return [newMessageItem, ...prevArray];
  //     };
  //     setNoticeArray(newArrayItem);
  //   }
  // }, [newNotice]);



  const noticeLength: number = noticeArray.concat(notices).length;


  const markMessageRead = async () => {
    // const id: string = userId.id;
    // // console.log(id);
    // const res = await markAllNoticeRead({
    //   variables: { id },
    // });
    // console.log(res, id);
    // if (!res.data?.markAllMessagesReadByUserId.includes("edited")) {
    //   toast.error(res.data?.markAllMessagesReadByUserId);
    // }
    router.push('/notifications')
  };
  return (
    <>
      <IconItem>
        <Link href="/notifications">
        <div 
          onClick={() => markMessageRead()}
        >
          <WellIcon />
        </div>
        </Link>
        {noticeLength !== 0 && notices !== undefined && (
          <IconBadge>{noticeLength}</IconBadge>
        )}
      </IconItem>
      <ToastContainer />
    </>
  );
};

export default AlarmBell;



