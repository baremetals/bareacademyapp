import React, { useEffect, useRef, useState } from "react";
import { useSockets } from "context/socket.context";
import { useRouter } from "next/router";
import { FiFilePlus, FiMaximize, FiMinimize, FiSend } from "react-icons/fi";
import classNames from "classnames";
import styles from "../../../styles/LecturePage/Chat.module.css";
import Message from "./Message";

import { FormData } from "formdata-node";
// import fetch, { blobFrom } from "node-fetch";

// import axios from "axios";
// import { storage } from "lib/admin";
// import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
// import User from 'models/User';
import { ErrorMsg } from 'components/Input';

type Props = {
  courseId: string;
};

// type MessagePageType = {
//   message: string;
//   updatedAt: Date;
//   type: string;
//   id: string;
//   createdAt: Date;
//   allRead: boolean;
//   hasRead: JSON;
//   student: User;
//   course: {
//     id: string;
//   };
//   file?: string;
// };

type FileType = {
  lastModified: any;
  lastModifiedDate: {};
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

const Chat = (props: Props) => {
  const { courseId } = props;
  const router = useRouter();
  const { slug } = router.query;
  const { socket } = useSockets();
  const { user: user } = useAppSelector(isUser);
  const [isMaximized, setIsMaximized] = useState(false);
  const [body, setBody] = useState<string>("");
  // const [value, setValue] = useState(null);
  let [upload] = useState<FileType | null>(null);
  const [msg, setMsg] = useState("");
  const [fileSizeErr, setFileSizeErr] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const me: string | undefined | any = user?.id;
  // const scrollUpdate: any = useRef(null || undefined);

  const [messages, setMessages] = useState([]);

  // const [selectedEditMessage, setSelectedEditMessage] = useState({});

  const handleMaximize = () => setIsMaximized((x) => !x);

  useEffect(() => {
    if (messagesRef.current) {
      const scroll =
        messagesRef.current.scrollHeight - messagesRef.current.clientHeight;
      messagesRef.current.scrollTo(0, scroll);
    }
  }, [messages]);

  // Load all messages on mount
  useEffect(() => {
    if (socket == null) return;
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

  // listen for loaded messages
  useEffect(() => {
    socket.on("course messages loaded", (msgs) => {
      // console.log('to: ',msgs);
      if (msgs.to === courseId) setMessages(msgs.messages);
    });
  }, [socket]);



  const handleImageChange =
    (_name: string) => (event: { target: { files: {}[] } } | File | any) => {
      upload = event.target.files[0] as FileType;
      const size = upload?.size as number;
      setFileSizeErr(false);
      // console.log(upload);
      if (size > 102400) {
        upload = null;
        setMsg("File size cannot exceed 10MB");
        setFileSizeErr(true);
        setTimeout(() => {
          setFileSizeErr(false);
        }, 8000);
      }
    };

  const onSubmit = async () => {
    // console.log(upload);
    const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
    let form;
    let file;

    const course: string = courseId;
    const message = body === "" ? null : body;
    const student = me;
    const username = user?.username;
    // const file = form
    // console.log(file?.name);
    // console.log("message: ", form);
    // console.log('student: ', student)
    // // console.log(name);

    try {
      if (upload !== null) {
        form = new FormData();
        form.append("files", upload as any, upload?.name);
        const res = await fetch(`${baseUrl}/upload`, {
          method: "post",
          body: file as any,
        });
        file = await res.json();
      } else file = null;

      // const r = await res.json();
      // console.log(file);
      socket.emit(
        "new course message",
        { student, username, message, slug, course, file },
        (error: any) => {
          if (error) {
            console.log(" Something went wrong please try again later. error");
          }
        }
      );
      if (message !== '') setBody('')
    } catch (err) {
      console.log(err);
    }
  };

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
          {[...messages].map((message, index) => {
            return <Message message={message} key={index} />;
          })}
        </div>
        {fileSizeErr && <ErrorMsg>{msg}</ErrorMsg>}
        <form className={styles.ChatInput}>
          <input
            type="file"
            id="fileUpload"
            name="upload"
            onChange={handleImageChange("upload")}
          />
          <label htmlFor="fileUpload">
            <FiFilePlus size={25} />
          </label>
          <input
            type="text"
            placeholder="Type a message..."
            value={body as string}
            onChange={(e) => setBody(e.target.value)}
          />
          <button type="button" onClick={() => onSubmit()}>
            <FiSend size={25} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
