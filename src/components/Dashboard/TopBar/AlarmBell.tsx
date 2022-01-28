import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IconBadge, IconItem } from "./topbar.styles";

import { WellIcon } from "../../../../public/assets/icons/WellIcon";
import { useQuery } from '@apollo/client';
import {
  GetUnReadMessagesByUserIdDocument,
  useNewMessageSubscription,
  useMarkAllMessagesReadByUserIdMutation,
} from "generated/graphql";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


type NotificationsPageType = {
  image: string;
  body: string;
  createdOn: string;
  id: string;
};

const AlarmBell = (userId: { id: string; }) => {
  // const router = useRouter();
  // Notifications Call
  const { ...result } = useQuery(GetUnReadMessagesByUserIdDocument);
  const notices = result.data?.getUnReadMessagesByUserId.msgs;
  const { data } = useNewMessageSubscription();
  const newNotice = data?.newMessage;
  const [noticeArray, setNoticeArray] = useState([]);

  const [markAllNoticeRead] = useMarkAllMessagesReadByUserIdMutation();

  // console.log(id);
  // Notifications Call
  useEffect(() => {
    if (newNotice) {
      const newMessageItem: NotificationsPageType = newNotice;
      const newArrayItem: any = (prevArray: NotificationsPageType[]) => {
        return [newMessageItem, ...prevArray];
      };
      setNoticeArray(newArrayItem);
    }
  }, [newNotice]);

  const noticeLength: number = noticeArray.concat(notices).length;

  const markMessageRead = async () => {
    const id: string = userId.id;
    // console.log(id);
    const res = await markAllNoticeRead({
      variables: { id },
    });
    console.log(res, id);
    if (!res.data?.markAllMessagesReadByUserId.includes("edited")) {
      toast.error(res.data?.markAllMessagesReadByUserId);
    }
  };
  return (
    <>
      <IconItem>
        <Link href="/notifications">
        <div onClick={() => markMessageRead()}>
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



