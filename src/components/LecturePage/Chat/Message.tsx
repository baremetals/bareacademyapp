import Link from "next/link";
import React from "react";
import Image from "next/image"
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
      url: string;
      name: string;
      type: string;
      size: number;
      ext: string;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          width: number;
          height: number;
        };
      };
    };
    updatedAt: Date;
  };
};


const renderMessage = (message: Props["message"]) => {
  const { type, message: msg, file } = message;
  // console.log(file);
  if (type === "text") {
    return (
      <div className={styles.message}>
        <div className={styles.messageText}>
          <Markdown>{msg as string}</Markdown>
        </div>
        <div className={styles.messageTime}>
          {dayjs(message.updatedAt).fromNow()}
        </div>
      </div>
    );
  } else if (type === "file" && file) {
    const ext = file.name.split(".").pop();
    const extensionArrays: string[] = ['.png', '.jpg', '.jpeg', '.svg']
    return (
      <div className={styles.message}>
        <div className={styles.messageTime}>
          {dayjs(message.updatedAt).fromNow()}
        </div>
        <Link href={file.url} passHref>
          <a className={styles.messageFile} target="_blank">
            {extensionArrays.includes(file.ext) ? (
              <Image
                src={file.url}
                alt={file.name}
                // height={4000}
                height={
                  file && file.ext === ".svg"
                    ? file?.height
                    : file.formats?.thumbnail?.height
                }
                width={
                  file && file.ext === ".svg"
                    ? file?.width
                    : file.formats?.thumbnail?.width
                }
                // width={file.formats?.thumbnail?.width || 0}
                // width={file?.width}
                className={styles.messageImage}
              />
            ) : (
              <>
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
              </>
            )}
          </a>
        </Link>
        {msg && (
          <div className={styles.messageText}>
            <Markdown>{msg as string}</Markdown>
          </div>
        )}
      </div>
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
              backgroundImage: `url('${message.student.img}')`,
            }}
          ></a>
        </Link>
      )}
      <>{renderMessage(message)}</>
    </div>
  );
};

export default Message;
