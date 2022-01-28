import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  NoticesWrapper,
  NoticeLeftWrap,
  SenderProfileImge,
  NoticeMessage,
  NoticeDate,
  NoticeTopRightWrap,
  DeleteIcon,
} from "./notice.styles";
import {
  PageHeading,
} from "../../styles/common.styles";
import {
  GetMessagesByUserIdDocument,
  useNewMessageSubscription,
  useDeleteMessageMutation,
} from "../../generated/graphql";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useQuery } from "@apollo/client";
import Dashboard from 'components/Dashboard';
import ErrorPage from 'components/ErrorPage';
dayjs.extend(relativeTime);

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type NotificationsPageType = {
  image: string;
  body: string;
  createdOn: string;
  id: string;
  from: string;
  isRead: boolean;
};
function NotificationsPage({...props}:any) {
  const { ...result } = useQuery(GetMessagesByUserIdDocument);
  const notices = result.data?.getMessagesByUserId.msgs;
  const { data } = useNewMessageSubscription();
  const newNotice = data?.newMessage;
  const [noticeArray, setNoticeArray] = useState([]);
  const [deleteNotice] = useDeleteMessageMutation();

  const errorMessage = result.data?.getMessagesByUserId.messages || ""
  // console.log(result)
  useEffect(() => {
    if (newNotice) {
      const newMessageItem: NotificationsPageType = newNotice;
      const newArrayItem: any = (prevArray: NotificationsPageType[]) => {
        return [newMessageItem, ...prevArray];
      };
      setNoticeArray(newArrayItem);
    }
  }, [newNotice]);

  const handleDelete = async (id: string) => {
    const res = await deleteNotice({
      variables: {id}
    })
    if (res.data?.deleteMessage.includes("deleted")) {
      // console.log(res);
      result.refetch(GetMessagesByUserIdDocument);
    } else {
      toast.error(res.data?.deleteMessage);
    }
  }

  if (!result.data || result.loading) {
    return <div>loading...</div>;
  }

  if (result.error) {
    return <ErrorPage statusCode={500} />;
  }

  // console.log(noticeArray);

  return (
    <Dashboard>
      <PageHeading>Notifications</PageHeading>
      {errorMessage ? (
        <div> You do not have any notifications</div>
      ) : (
        <>
          {noticeArray
            .concat(notices)
            .map(
              ({
                body,
                image,
                createdOn,
                from,
                isRead,
                id,
              }: NotificationsPageType) => (
                <NoticesWrapper key={id}>
                  <NoticeLeftWrap>
                    <Link href={`user-profile/${from}`}>
                      <SenderProfileImge
                        alt="sender profile image"
                        src={image == "BM" ? "/colorlogo.svg" : image}
                      />
                    </Link>

                    <NoticeMessage isRead={isRead} {...props}>
                      <NoticeDate>{dayjs(createdOn).fromNow()}</NoticeDate>
                      {body}
                    </NoticeMessage>
                  </NoticeLeftWrap>
                  <NoticeTopRightWrap>
                    <DeleteIcon {...props} onClick={() => handleDelete(id)} />
                  </NoticeTopRightWrap>
                </NoticesWrapper>
              )
            )}
        </>
      )}
      <ToastContainer />
    </Dashboard>
  );
}

export default NotificationsPage;


