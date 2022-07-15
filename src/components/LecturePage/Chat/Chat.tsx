import React, { useEffect, useRef, useState } from "react";
import { FiFilePlus, FiMaximize, FiMinimize, FiSend } from "react-icons/fi";
import classNames from "classnames";
import styles from "../../../styles/LecturePage/Chat.module.css";
import Message from "./Message";
import ScrollToBottom from "react-scroll-to-bottom";

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
      type: "text",
      message: "I am fine wbu",
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
    {
      user: {
        userId: "sdxssdsd",
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
    {
      user: {
        userId: "sdsdsd",
        name: "John Doe",
        img: "https://via.placeholder.com/150",
        url: "#",
      },
      type: "text",
      message: "I am fine wbu",
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
    {
      user: {
        userId: "sdxssdsd",
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
    {
      user: {
        userId: "sdxssdsd",
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
    {
      user: {
        userId: "sdxssdsd",
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
    {
      user: {
        userId: "sdxssdsd",
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
  const [messages, setMessages] = useState(data.messages || []);
  const messagesRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState({
    user: {
      userId: "sdsdsd",
      name: "John Doe",
      img: "https://via.placeholder.com/150",
      url: "#",
    },
    type: "",
    message: "",
    file: null,
    time: "",
  });

  const handleMaximize = () => setIsMaximized((x) => !x);

  useEffect(() => {
    if (messagesRef.current) {
      const scroll =
        messagesRef.current.scrollHeight - messagesRef.current.clientHeight;
      messagesRef.current.scrollTo(0, scroll);
    }
  }, [messages]);

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
        <div ref={messagesRef} className={styles.messages}>
          {messages.map((message, index) => {
            return <Message message={message} key={index} />;
          })}
        </div>
        <form className={styles.ChatInput}>
          <input type="file" id="fileUpload" />
          <label htmlFor="fileUpload">
            <FiFilePlus size={25} />
          </label>
          <input type="text" placeholder="Type a message..." />
          <button type="submit">
            <FiSend size={25} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
