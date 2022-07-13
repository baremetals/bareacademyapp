import React, { useState } from "react";
import { FiFilePlus, FiMaximize, FiMinimize, FiSend } from "react-icons/fi";
import classNames from "classnames";
import styles from "../../../styles/LecturePage/Chat.module.css";
import Message from "./Message";

type Props = {
  courseId: string;
};

const data = {
  messages: [
    {
      user: {
        userId: "xdcdf",
        name: "John Doe",
        img: "https://via.placeholder.com/150",
        url: "#",
      },
      type: "text",
      message: "Hello, how are you?",
      time: "2020-01-01T00:00:00.000Z",
    },
    {
      user: {
        userId: "sdsdsd",
        name: "John Doe",
        img: "https://via.placeholder.com/150",
        url: "#",
      },
      type: "file",
      file: {
        name: "file.pdf",
        size: "1.5MB",
        url: "#",
      },
      time: "2020-01-01T00:00:00.000Z",
    },
  ],
};

const Chat = (props: Props) => {
  const { courseId } = props;
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => setIsMaximized((x) => !x);

  return (
    <div
      className={classNames(styles.Chat, {
        [styles.ChatMaximized]: isMaximized,
      })}
    >
      <div className={styles.ChatHeader}>
        <div className={styles.ChatHeaderTitle}>Group chat</div>
        <div className={styles.maximizeButton} onClick={handleMaximize}>
          {isMaximized ? <FiMinimize size={30} /> : <FiMaximize size={25} />}
        </div>
      </div>
      <div className={styles.ChatBody}>
        <div className={styles.messages}>
          {data.messages.map((message, index) => {
            return <Message message={message} key={index} />;
          })}
        </div>
        <div className={styles.ChatInput}>
          <button>
            <FiFilePlus size={25} />
          </button>
          <input type="text" placeholder="Type a message..." />
          <button>
            <FiSend size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
