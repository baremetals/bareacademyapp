import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import axios from "axios";
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



type Props = {
  data: Array<{
    user: {
      name: string;
      img: string;
      url: string;
    };
    title: string;
    question: string;
    votes: number;
    voted: boolean;
    time: string;
    comments: Array<{
      user: {
        name: string;
        img: string;
        url: string;
      };
      message: string;
      time: string;
    }>;
    url: string;
  }>;
};

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

const QNA = (props: Props) => {
  const router = useRouter();
  const { slug } = router.query;
  // const { data } = props;
  const data = []
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
        limit: 4,
      },
      sort: "updatedAt:desc",
    },
  });
  const comments: any = result.data?.comments.data;
  console.log(slug)
  const { user: user } = useAppSelector(isUser);
  const [showInput, setShowInput] = React.useState(
    Array(data.length).fill(false)
  );
  const [input, setInput] = React.useState(Array(data.length).fill(""));
  const [showModal, setShowModal] = useState(false)
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

  useEffect(() => {
    console.log(showInput);
  }, [showInput]);

  const onSubmit = async (info: FormInput) => {
    console.log(info);
    // console.log(slugify(info.title))
    // setShowModal(false);

    await axios
      .post("/api/posts", {
        data: {
          title: info.title,
          question: info.body,
          user: user?.id as string,
          course: "1",
          publishedAt: new Date(),
        },
      })
      .then(() => {
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

  return (
    <div className={styles.QNATab}>
      <button onClick={() => setShowModal(true)}>
        Ask a question
      </button>
      <br />
      <br />
      <div className={styles.qnas}>
        {data.map((qna, index) => {
          return (
            <div className={styles.qnaContainer} key={index}>
              <div className={styles.qna}>
                <div className={styles.qnaContent}>
                  <Link href={`${qna.user.url}`}>
                    <a>
                      <div
                        className={styles.qnaUserPic}
                        style={{
                          backgroundImage: `url(${qna.user.img})`,
                        }}
                      ></div>
                    </a>
                  </Link>
                  <div className={styles.qnaDetails}>
                    <Link href={`${qna.url}`}>
                      <a className={styles.qnaTitle}>{qna.title}</a>
                    </Link>
                    <div className={styles.qnaUsernameTimestamp}>
                      <Link href={`${qna.user.url}`}>
                        <a>
                          <div className={styles.qnaUsername}>
                            {qna.user.name}
                          </div>
                        </a>
                      </Link>
                      <div className={styles.dot}></div>
                      <div className={styles.qnaTimestamp}>
                        {renderTime(qna.time)}
                      </div>
                    </div>
                    <div className={styles.qnaMessage}>{qna.question}</div>
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
                    onClick={() =>
                      setShowInput(
                        showInput.map((item, i) => (index === i ? !item : item))
                      )
                    }
                  >
                    <FiMessageSquare size={20} />
                    <span>{qna.comments.length}</span>
                  </div>
                </div>
              </div>
              {showInput[index] && (
                <div className={styles.qnaCommentInput}>
                  <TextareaAutosize
                    className={styles.qnaCommentTextarea}
                    rows={1}
                    placeholder="Write a comment..."
                    value={input[index]}
                    onChange={(e) =>
                      setInput(
                        input.map((item, i) =>
                          index === i ? e.target.value : item
                        )
                      )
                    }
                  />
                  <button
                    disabled={input[index].length === 0}
                    className={styles.qnaCommentSubmit}
                  >
                    <FiSend size={20} />
                  </button>
                </div>
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
