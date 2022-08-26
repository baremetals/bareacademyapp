import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import { useForm } from "react-hook-form";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  // FiArrowUpCircle,
  FiMessageSquare,
  FiSend,
  // FiPlus,
} from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import classNames from "classnames";
import TextareaAutosize from "react-textarea-autosize";
import styles from "../../styles/LecturePage/QNA.module.css";
import Modal from "components/ShareForm/Modal"


const LectureEditor = dynamic(() => import("./LectureEditor"), {
  ssr: false,
});

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth";

import {

  TitleInput,
  BodyTextWrapper,
  InputFormGroupRow,
  InputFormGroup,
  InputContainer,
  ButtonContainer,
  CloseButton,
  SubmitButton,
  MainContainer,
  FormWrap,
  CloseButtonWrap,
  CardText,
} from "../ShareForm/modal.styles";
import { ErrorMsg, SuccessMsg } from "components/Input";
import { QuestionAndAnswersDocument } from 'generated/graphql';



// type Props = {
//   data: Array<{
//     user: {
//       name: string;
//       img: string;
//       url: string;
//     };
//     title: string;
//     question: string;
//     votes: number;
//     voted: boolean;
//     time: string;
//     comments: Array<{
//       user: {
//         name: string;
//         img: string;
//         url: string;
//       };
//       message: string;
//       time: string;
//     }>;
//     url: string;
//   }>;
// };

const renderTime = (time: string) => {
  const date = new Date(time);
  const today = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (
    today.getFullYear() === year &&
    today.getMonth() === month - 1 &&
    today.getDate() === day
  ) {
    return `Today ${hours}:${minutes}`;
  } else if (
    today.getFullYear() === year &&
    today.getMonth() === month - 1 &&
    today.getDate() - 1 === day
  ) {
    return `Yesterday ${hours}:${minutes}`;
  } else {
    return `${day}-${month}-${year}`;
  }
};

export type FormInput = {
  title: string;
  category: string;
  body: string;
  id?: string;
};

type IdType = {
  id: string;
}

const QNA = (props: IdType) => {
  const router = useRouter();
  const { slug } = router.query;
  const { id } = props;
  // const data = []
  const { refetch, ...result } = useQuery(QuestionAndAnswersDocument, {
    variables: {
      filters: {
        course: {
          slug: {
            eq: slug,
          },
        },
      },
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "updatedAt:desc",
    },
  });
  const data: any = result.data?.questionAndAnswers?.data || [];
  // console.log(result);
  const { user: user } = useAppSelector(isUser);

   const [showInput, setShowInput] = React.useState(false);
  
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInput>();

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [content, setContent] = useState<string>("");
  const [body, setBody] = useState<string>("");
  

  // useEffect(() => {
  //   console.log(showInput);
  // }, [showInput]);

  const onSubmit = async (info: FormInput) => {
    console.log(info);
    // console.log(slugify(info.title))
    // setShowModal(false);

    await axios
      .post("/api/course/qna", {
        data: {
          title: info.title,
          question: info.body,
          user: user?.id as string,
          course: id,
          publishedAt: new Date(),
        },
      })
      .then(() => {
        console.log("Question created successfully");
        refetch();
        setShowModal(false);
        setMsg("Question created successfully");
        setSuccess(true);
      })
      .catch((_err) => {
        setMsg("Sorry something went wrong please try again later.");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 10000);
      });
  };

  const onSubmitComment = async () => {
    console.log(body);
    await axios
      .post("/api/course/comments", {
        data: {
          body,
          user: user?.id as string,
          course: id,          
          publishedAt: new Date(),
        },
      })
      .then(() => {
        refetch();
        setShowModal(false);
        setMsg("Comment created successfully");
        setSuccess(true);
        setShowInput(!showInput);
        setBody("");
      })
      .catch((_err) => {
        setMsg("Sorry something went wrong please try again later.");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 10000);
      });
  };

  return (
    <div className={styles.QNATab}>
      <button onClick={() => setShowModal(true)}>Ask a question</button>
      <br />
      <br />
      <div className={styles.qnas}>
        {data.map((qna: { attributes: { user: { data: { attributes: { slug: string; img: string; username: string }; }; }; title: string; updatedAt: string; question: string; comments: { data: string | any[]; }; }; }, id: number) => {
          return (
            <div className={styles.qnaContainer} key={id}>
              <div className={styles.qna}>
                <div className={styles.qnaContent}>
                  <Link
                    href={`/user-profile/${qna?.attributes?.user?.data?.attributes?.slug}`}
                  >
                    <a>
                      <div
                        className={styles.qnaUserPic}
                        style={{
                          backgroundImage: `url(${qna?.attributes?.user?.data?.attributes?.img})`,
                        }}
                      ></div>
                    </a>
                  </Link>
                  <div className={styles.qnaDetails}>
                    <Link
                      href={`/user-profile/${qna?.attributes?.user?.data?.attributes?.slug}`}
                    >
                      <a className={styles.qnaTitle}>
                        {qna?.attributes?.title}
                      </a>
                    </Link>
                    <div className={styles.qnaUsernameTimestamp}>
                      <Link
                        href={`/user-profile/${qna?.attributes?.user?.data?.attributes?.slug}`}
                      >
                        <a>
                          <div className={styles.qnaUsername}>
                            {qna?.attributes?.user?.data?.attributes?.username}
                          </div>
                        </a>
                      </Link>
                      <div className={styles.dot}></div>
                      <div className={styles.qnaTimestamp}>
                        {renderTime(qna?.attributes?.updatedAt)}
                      </div>
                    </div>
                    <div className={styles.qnaMessage}>
                      <Markdown>{qna?.attributes?.question}</Markdown>
                    </div>
                  </div>
                </div>
                <div className={styles.qnaInteractions}>
                  {/* <div
                    className={classNames(styles.interaction, styles.qnaVotes, {
                      [styles.interactionActive]: qna.voted,
                    })}
                  >
                    <FiArrowUpCircle size={20} />
                    <span>{qna.votes}</span>
                  </div> */}
                  <div
                    className={classNames(
                      styles.interaction,
                      styles.qnaComments
                    )}
                    onClick={() => setShowInput(!showInput)}
                  >
                    <FiMessageSquare size={20} />
                    <span>{qna?.attributes?.comments?.data.length}</span>
                  </div>
                </div>
              </div>
              {showInput && (
                <form className={styles.qnaCommentInput}>
                  <TextareaAutosize
                    className={styles.qnaCommentTextarea}
                    rows={1}
                    placeholder="Write a comment..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => onSubmitComment()}
                    disabled={!showInput}
                    className={styles.qnaCommentSubmit}
                  >
                    <FiSend size={20} />
                  </button>
                </form>
              )}
            </div>
          );
        })}
      </div>
      <Modal
        showModal={showModal}
        closeM={() => setShowModal(false)}
        setShowModal={setShowModal}
      >
        <FormWrap onSubmit={handleSubmit(onSubmit)}>
          <MainContainer>
            <CloseButtonWrap>
              <AiFillCloseCircle onClick={() => setShowModal(false)} />
            </CloseButtonWrap>
            <CardText>Question?</CardText>
            {error && <ErrorMsg>{msg}</ErrorMsg>}
            {success && <SuccessMsg>{msg}</SuccessMsg>}
            <InputContainer>
              <InputFormGroupRow>
                <InputFormGroup>
                  <TitleInput
                    {...register("title", { required: true })}
                    placeholder="title"
                    type="text"
                    name="title"
                    {...props}
                  />
                  {errors.title && <span>Title is required</span>}
                </InputFormGroup>
              </InputFormGroupRow>

              <BodyTextWrapper>
                <LectureEditor
                  id={user?.id as string}
                  editorState={editorState}
                  onEditorStateChange={(newState: EditorState) => {
                    setEditorState(newState);
                    setContent(
                      draftToHtml(convertToRaw(newState.getCurrentContent()))
                    );
                    setValue("body", content);
                  }}
                />
              </BodyTextWrapper>
            </InputContainer>
            <ButtonContainer>
              <CloseButton
                onClick={() => setShowModal(false)}
                {...props}
                type="button"
              >
                close
              </CloseButton>
              <SubmitButton type="submit">submit</SubmitButton>
            </ButtonContainer>
          </MainContainer>
        </FormWrap>
      </Modal>
    </div>
  );
};

export default QNA;
