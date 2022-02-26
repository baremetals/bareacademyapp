import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

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

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import Dashboard from "components/Dashboard";
import ErrorPage from "components/ErrorPage";
// import { useQuery } from "@apollo/client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// type NotificationsPageType = {
//   id: string;
//   attributes: {
//     image: string;
//     body: string;
//     updatedAt: string;
//     from: string;
//     isRead: boolean;
//   };
// };
function NotificationsPage(props: { props: { data: any; loading: boolean; error: any; }; }) {
  // const { ...result } = useQuery(NotificationsDocument);
  // const notices = result.data?.getMessagesByUserId.msgs;
  // const [deleteNotice] = useDeleteNotificationMutation();
  // const newNotice = data?.newMessage;
  // eslint-disable-next-line no-unused-vars
  const [noticeArray, setNoticeArray] = useState([]);
  // const [deleteNotice] = useDeleteMessageMutation();

  // const errorMessage = result.data?.getMessagesByUserId.messages || ""
  // console.log(result)
  // useEffect(() => {
  //   if (newNotice) {
  //     const newMessageItem: NotificationsPageType = newNotice;
  //     const newArrayItem: any = (prevArray: NotificationsPageType[]) => {
  //       return [newMessageItem, ...prevArray];
  //     };
  //     setNoticeArray(newArrayItem);
  //   }
  // }, [newNotice]);

  const { data, loading, error } = props.props;
  if (!data || loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <ErrorPage statusCode={500} />;
  }
  const notices = data?.data?.notifications?.data;
  // console.log(notices);

  const handleDelete = async (id: string) => {

    await axios.post(`/api/notice`, {
      data: {
        id,
        flag: "DELETEONE",
      },
    })
    .then((res) => {
      console.log(res);
      // result.refetch(GetMessagesByUserIdDocument);
    })
    .catch((err) => {
      console.log(err)
      toast.error("Something went wrong please try again later.");
    }) 
  };


  return (
    <Dashboard>
      <PageHeading>Notifications</PageHeading>
      {!notices ? (
        <div> You do not have any notifications</div>
      ) : (
        <>
          {noticeArray
            .concat(notices)
            .map(({ id, attributes: { body, updatedAt, image, isRead, from } }) => (
              <NoticesWrapper key={id}>
                <NoticeLeftWrap>
                  <Link href={`user-profile/${from}`}>
                    <SenderProfileImge
                      alt="sender profile image"
                      src={image == "BM" ? "/colorlogo.svg" : image}
                    />
                  </Link>

                  <NoticeMessage
                  isRead={isRead}
                  >
                    <NoticeDate>{dayjs(updatedAt).fromNow()}</NoticeDate>
                    {body}
                  </NoticeMessage>
                </NoticeLeftWrap>
                <NoticeTopRightWrap>
                  <DeleteIcon {...props} onClick={() => handleDelete(id)} />
                </NoticeTopRightWrap>
              </NoticesWrapper>
            ))}
        </>
      )}
      <ToastContainer />
    </Dashboard>
  );
}

export default NotificationsPage;


