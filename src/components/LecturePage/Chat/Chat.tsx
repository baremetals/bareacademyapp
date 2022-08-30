import React, { useEffect, useRef, useState } from "react";
import { useSockets } from "context/socket.context";
import { useRouter } from "next/router";
import { FiFilePlus, FiMaximize, FiMinimize, FiSend } from "react-icons/fi";
import classNames from "classnames";
import styles from "../../../styles/LecturePage/Chat.module.css";
import Message from "./Message";

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import User from 'models/User';

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

type MessagePageType = {
  message: string;
  updatedAt: Date;
  type: string;
  id: string;
  createdAt: Date;
  allRead: boolean;
  hasRead: JSON;
  student: User;
  course: {
    id: string;
  };
  file?: string;
};

type socketMessage = {
  msg: MessagePageType;
  to: string;
  from: string;
};
const Chat = (props: Props) => {
  const { courseId } = props;
  const router = useRouter();
  const { slug } = router.query;
  const { socket } = useSockets();
  const { user: user } = useAppSelector(isUser);
  const [isMaximized, setIsMaximized] = useState(false);
  // const [messages, setMessages] = useState(data.messages || []);
  // const messages = useState(data.messages || [])[0];
  const messagesRef = useRef<HTMLDivElement>(null);
  const me: string | undefined | any = user?.id;
  // const scrollUpdate: any = useRef(null || undefined);

  const [newChatMessage, setNewChatMessage] = useState<socketMessage>();
  const [messages, setMessages] = useState([]);
  const [msgArray, setMsgArray] = useState([]);
  // const [selectedEditMessage, setSelectedEditMessage] = useState({});

  const handleMaximize = () => setIsMaximized((x) => !x);

  useEffect(() => {
    if (messagesRef.current) {
      const scroll =
        messagesRef.current.scrollHeight - messagesRef.current.clientHeight;
      messagesRef.current.scrollTo(0, scroll);
    }
  }, [messages, msgArray]);

  useEffect(() => {
    if (socket == null) return;
    console.log({ me }, "=====>me");
    if (me != "undefined") {
      socket.emit(
        "load all course messages",
        { slug, me, courseId },
        (error: any, d: any) => {
          if (error) {
            console.log(" Something went wrong please try again later.", error);
          }
        }
      );
    }

    socket.off("message");
  }, [socket, slug]);

  useEffect(() => {
    // if (socket == null) return;
    socket.on("course messages loaded", (msgs) => {
      // console.log({ msgs }, "=====>dt");
      setMessages(msgs);
    });

    // socket.off("messages loaded");
  }, [socket]);

  socket.on("new message", (dta) => {
    console.log(dta.to, dta.from);
    // if (me === dta.to) {
    //   setNewChatMessage(dta.msg);
    // }
    setNewChatMessage(dta);
  });

  console.log(messages);

  // useEffect(() => {
  //   if (messages && messages.length > 0) {
  //     scrollUpdate.current?.scrollIntoView({
  //       behavior: "instant",
  //       block: "end",
  //     });
  //   }
  // }, [messages, msgArray]);
    useEffect(() => {
      console.log("Iam am here");
      if (newChatMessage) {
        console.log(newChatMessage);
        const newChatMessageItem = newChatMessage.msg;
        const newArrayItem: any = (prevArray: MessagePageType[]) => {
          console.log({ prevArray });
          return [newChatMessageItem];
        };
        if (me === newChatMessage.to && me !== newChatMessage.from) {
          setMsgArray([]);
          console.log({ newArrayItem });
        }
        // setMsgArray(newArrayItem);
      }
    }, [newChatMessage]);

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
          {[...messages, ...msgArray].map((message, index) => {
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
