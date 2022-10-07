import React, { useEffect, useRef, useState } from "react";
import { useSockets } from "context/socket.context";
import { useRouter } from "next/router";
import {
  FiFilePlus,
  FiMaximize,
  FiMinimize,
  FiSend,
  FiX,
} from "react-icons/fi";
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
import User from "models/User";
import { ErrorMsg } from "components/Input";

type Props = {
  groupId: string;
};

type MessagePageType = {
  message?: string;
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
};

// type FileType = {
//   lastModified: any;
//   lastModifiedDate: {};
//   name: string;
//   size: number;
//   type: string;
//   webkitRelativePath: string;
// };

const Chat = (props: Props) => {
  const { groupId } = props;
  const router = useRouter();
  const { slug } = router.query;
  const { socket } = useSockets();
  const { user: user } = useAppSelector(isUser);
  const [isMaximized, setIsMaximized] = useState(false);
  const [body, setBody] = useState<string>("");
  // const [value, setValue] = useState(null);
  const [msg, setMsg] = useState("");
  const [fileSizeErr, setFileSizeErr] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const me: string | undefined | any = user?.id;
  // const scrollUpdate: any = useRef(null || undefined);

  const [messages, setMessages] = useState<MessagePageType[]>([
    // {
    //   message: "Hello check this out ",
    //   updatedAt: new Date(),
    //   type: "file",
    //   id: "1",
    //   createdAt: new Date(),
    //   allRead: true,
    //   hasRead: JSON,
    //   student: user,
    //   course: {
    //     id: "1",
    //   },
    //   file: {
    //     url: "https://images.unsplash.com/photo-1651253659634-948a2e126838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    //     name: "image.png",
    //     type: "image/png",
    //     size: 1000,
    //   },
    // },
    // {
    //   message: "Cool! check out my file",
    //   updatedAt: new Date(),
    //   type: "text",
    //   id: "1",
    //   createdAt: new Date(),
    //   allRead: true,
    //   hasRead: JSON,
    //   student: {
    //     id: "1",
    //     name: "John Doe",
    //     img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    //     slug: "john-doe",
    //     username: "john-doe",
    //   },
    //   course: {
    //     id: "1",
    //   },
    // },
    // {
    //   // message: "Cool! check out my file",
    //   updatedAt: new Date(),
    //   type: "file",
    //   id: "1",
    //   createdAt: new Date(),
    //   allRead: true,
    //   hasRead: JSON,
    //   student: {
    //     id: "1",
    //     name: "John Doe",
    //     img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    //     slug: "john-doe",
    //     username: "john-doe",
    //   },
    //   course: {
    //     id: "1",
    //   },
    //   file: {
    //     url: "https://images.unsplash.com/photo-1651253659634-948a2e126838?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    //     name: "document.pdf",
    //     type: "application/pdf",
    //     size: 2560,
    //   },
    // },
  ]);
  const [file, setFile] = useState<{ file: File; preview?: string } | null>(
    null
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

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
        "load all group messages",
        { slug, me, groupId },
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
    socket.on("group messages loaded", (msgs) => {
      // console.log('to: ',msgs.to);
      if (msgs?.to === groupId) setMessages(msgs?.messages);
    });
  }, [socket]);

  const handleImageChange = async (
    event: { target: { files: {}[] } } | File | any
  ) => {
    let upload = { file: event.target.files[0], preview: "" }; // as FileType;
    const size = upload?.file?.size as number;
    setFileSizeErr(false);
    // console.log(upload);
    if (size > 209715200) {
      setMsg("File size cannot exceed 256MB");
      setFileSizeErr(true);
      setTimeout(() => {
        setFileSizeErr(false);
      }, 8000);
      return;
    }
    const preview = await getPreview(upload?.file);
    upload = { ...upload, preview };
    setFile(upload);
    event.target.value = null;
  };

  const onSubmit = async () => {
    // console.log(upload);
    const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
    let form;
    let fileUrl;

    const group: string = groupId;
    const message = body === "" ? null : body;
    const student = me;
    const username = user?.username;
    // const file = form
    // console.log(file?.name);
    // console.log("message: ", form);
    // console.log('student: ', student)
    // console.log(name);

    try {
      if (file !== null) {
        // console.log(upload);
        form = new FormData();
        form.append("files", file?.file as any, file?.file?.name);
        const res = await fetch(`${baseUrl}/upload`, {
          method: "post",
          body: form as any,
        });
        fileUrl = await res.json();
      } else fileUrl = null;

      console.log(fileUrl);
      socket.emit(
        "new group message",
        { student, username, message, slug, group, fileUrl },
        (error: any) => {
          if (error) {
            console.log(" Something went wrong please try again later. error");
          }
        }
      );
      if (message !== "") setBody("");
      if (file !== null) setFile(null);
    } catch (err) {
      console.log(err);
      setMsg("Something went wrong please try again later");
      setFileSizeErr(true);
      setTimeout(() => {
        setFileSizeErr(false);
      }, 8000);
    }
  };

  const getPreview = async (file: Blob) => {
    const type = file.type.split("/")[0];
    switch (type) {
      case "image": // get the base64 image
        const base64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
        return base64 as string;
      default:
        return "/images/file.png";
    }
  };

  const getSize = (size: number) => {
    // human readable file size
    const i = Math.floor(Math.log(size) / Math.log(1024));
    const readableSize =
      (size / Math.pow(1024, i)).toFixed(2) +
      " " +
      ["B", "kB", "MB", "GB", "TB"][i];
    return readableSize;
  };

  const removeFile = () => setFile(null);

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
            return (
              <Message
                message={{
                  student: {
                    id: message.student.id,
                    username: message.student.username,
                    img: message.student.img,
                    slug: message.student.slug,
                  },
                  type: message.type,
                  message: message.message,
                  file: message.file,
                  updatedAt: message.updatedAt,
                }}
                key={index}
              />
            );
          })}
        </div>
        {fileSizeErr && <ErrorMsg>{msg}</ErrorMsg>}
        <div className={styles.ChatInputWrapper}>
          {file && (
            <div className={styles.filesContainer}>
              <div className={styles.fileEntry}>
                <div
                  className={styles.filePreview}
                  style={{
                    backgroundImage: `url('${file.preview}')`,
                  }}
                ></div>
                <div className={styles.FileInfos}>
                  <div className={styles.fileName}>
                    {file.file.name.substring(0, 20) +
                      (file.file.name.length > 20 ? "..." : "")}
                  </div>
                  <div className={styles.fileSize}>
                    {getSize(file.file.size)}
                  </div>
                </div>
                <div className={styles.removeFile} onClick={removeFile}>
                  <FiX size={20} />
                </div>
              </div>
            </div>
          )}
          <form className={styles.ChatInput}>
            <input
              type="file"
              id="fileUpload"
              name="upload"
              onChange={handleImageChange}
              disabled={file !== null}
            />
            <label
              className={classNames({
                [styles.uploadDisabled]: file !== null,
              })}
              htmlFor="fileUpload"
            >
              <FiFilePlus size={25} />
            </label>
            <input
              ref={fileInputRef}
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
    </div>
  );
};

export default Chat;
