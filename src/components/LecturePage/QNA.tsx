import Link from "next/link";
import React, { useEffect } from "react";
import { FiArrowUpCircle, FiMessageSquare, FiSend } from "react-icons/fi";
import classNames from "classnames";
import TextareaAutosize from "react-textarea-autosize";
import styles from "../../styles/LecturePage/QNA.module.css";

type Props = {
  data: Array<{
    user: {
      name: string;
      img: string;
      url: string;
    };
    title: string;
    message: string;
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

const QNA = (props: Props) => {
  const { data } = props;
  const [showInput, setShowInput] = React.useState(
    Array(data.length).fill(false)
  );
  const [input, setInput] = React.useState(Array(data.length).fill(""));

  useEffect(() => {
    console.log(showInput);
  }, [showInput]);

  return (
    <div className={styles.QNATab}>
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
                    <div className={styles.qnaMessage}>{qna.message}</div>
                  </div>
                </div>
                <div className={styles.qnaInteractions}>
                  <div
                    className={classNames(styles.interaction, styles.qnaVotes, {
                      [styles.interactionActive]: qna.voted,
                    })}
                  >
                    <FiArrowUpCircle size={20} />
                    <span>{qna.votes}</span>
                  </div>
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
    </div>
  );
};

export default QNA;
