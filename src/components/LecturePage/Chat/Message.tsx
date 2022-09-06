import Link from "next/link";
import React from "react";
import classNames from "classnames";
import Markdown from "markdown-to-jsx";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import styles from "../../../styles/LecturePage/Chat.module.css";

type Props = {
  message: {
    student: {
      id: string;
      username: string;
      img: string;
      slug: string;
    };
    type: string;
    message?: string;
    file?: {
      name: string;
      size: string;
      url: string;
    };
    updatedAt: string;
  };
};

// const renderTime = (time: string) => {
//   const date = new Date(time);
//   const today = new Date();
//   const day = date.getDate();
//   const month = date.getMonth() + 1;
//   const year = date.getFullYear();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();

//   if (
//     today.getFullYear() === year &&
//     today.getMonth() === month - 1 &&
//     today.getDate() === day
//   ) {
//     return `Today ${hours}:${minutes}`;
//   } else if (
//     today.getFullYear() === year &&
//     today.getMonth() === month - 1 &&
//     today.getDate() - 1 === day
//   ) {
//     return `Yesterday ${hours}:${minutes}`;
//   } else {
//     return `${day}-${month}-${year}`;
//   }
// };

const renderMessage = (message: Props["message"]) => {
  const { type, message: msg, file } = message;
  if (type === "text") {
    return (
      <div className={styles.message}>
        <Markdown>{msg as string}</Markdown>
        <div className={styles.messageTime}>{dayjs(message.updatedAt).fromNow()}</div>
      </div>
    );
  } else if (type === "file" && file) {
    const ext = file.name.split(".").pop();
    return (
      <Link href={file.url}>
        <a className={styles.message}>
          <div className={styles.messageTime}>
            {dayjs(message.updatedAt).fromNow()}
          </div>
          <div className={styles.messageFile}>
            <div
              className={classNames(
                styles.messageFileIcon,
                styles[`messageFileIcon${ext?.toUpperCase()}`]
              )}
            >
              {ext}
            </div>
            <div className={styles.messageNameSize}>
              <div className={styles.messageFileName}>{file.name}</div>
              <div className={styles.messageFileSize}>{file.size}</div>
            </div>
          </div>
        </a>
      </Link>
    );
  }
};

const Message = (props: Props) => {
  const { message } = props;
  const { user: user } = useAppSelector(isUser);

  const myUserId = user?.id;
  const isMessageFromMe = message.student.id === myUserId;
  return (
    <div
      className={classNames(styles.messageContainer, {
        [styles.messageContainerFromMe]: isMessageFromMe,
      })}
    >
      {!isMessageFromMe && (
        <Link href={`/user-profile/${message?.student.slug}`}>
          <a
            className={styles.userPic}
            style={{
              backgroundImage: `url(${message.student.img})`,
            }}
          ></a>
        </Link>
      )}
      <>{renderMessage(message)}</>
    </div>
  );
};

export default Message;
