import React, { useState, useEffect } from "react";
import { FiStar } from "react-icons/fi";
import styles from "../../styles/LecturePage/Reviews.module.css";
import classNames from "classnames";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import { useQuery } from "@apollo/client";
import axios from "axios";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
// import { useRouter } from "next/router";
import { ReviewsDocument } from "generated/graphql";

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth";

import Modal from "components/ShareForm/Modal";
import {
  BodyTextWrapper,
  ButtonContainer,
  CardText,
  CloseButton,
  CloseButtonWrap,
  FormWrap,
  InputContainer,
  InputFormGroupRow,
  MainContainer,
  SubmitButton,
} from "components/ShareForm/modal.styles";
import { AiFillCloseCircle } from "react-icons/ai";
import { ErrorMsg } from "components/Input";
import { Rating } from "react-simple-star-rating";
import { useForm } from "react-hook-form";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
const LectureEditor = dynamic(() => import("./LectureEditor"), {
  ssr: false,
});

type IdType = {
  id: string;
};

export type FormInput = {
  comment?: string;
  rating: number;
  id?: string;
};

const Reviews = (props: IdType) => {
  const [error, setError] = useState(false);
  // const [success, setSuccess] = useState(false);
  const [msg, setMsg] = useState("");
  const { id } = props;

  const { refetch, ...result } = useQuery(ReviewsDocument, {
    variables: {
      filters: {
        course: {
          id: {
            eq: id,
          },
        },
      },
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "createdAt:desc",
    },
  });
  const data = result.data?.reviews?.data || [];
  // const data = [];
  // console.log(data);
  const { user: user } = useAppSelector(isUser);
  const [showInput, setShowInput] = React.useState(false);
  const [showButton, setShowButton] = React.useState(true);
  const [rating, setRating] = React.useState<number>(0);

  const {
    // register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm<FormInput>();

  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [content, setContent] = useState<string>("");

  const avgReviews =
    data?.reduce((acc: number, cur: { attributes: { rating: number } }) => {
      // console.log(acc)
      return acc + cur?.attributes?.rating;
    }, 0) / data?.length;

  const reviewsByNumber = [1, 2, 3, 4, 5].map((number) => {
    return data
      ?.filter(
        (review: { attributes: { rating: number } }) =>
          review?.attributes?.rating === number
      )
      ?.reduce((acc: number, cur: any) => {
        return acc + 1;
      }, 0);
  });


  function showReviewButton() {
    data.find((element: { attributes: { user: { data: { id: string | undefined; }; }; }; }) => {
      console.log(element?.attributes?.user?.data?.id);
      element?.attributes?.user?.data?.id === user?.id.toString();
      setShowButton(false);
    });
    console.log(data)
    // console.log(found);
    // if (found) setShowButton(true)
  }

  useEffect(() => {
    showReviewButton()
  },[data])

  const onSubmit = async (data: FormInput) => {

    await axios
      .post("/api/course/reviews", {
        data: {
          rating: data.rating,
          message: data.comment,
          user: user?.id as string,
          course: id,
          publishedAt: new Date(),
        },
      })
      .then(() => {
        refetch();
        setShowInput(!showInput);
        // setRating(0);
      })
      .catch((err) => {
        console.log(err);
        setMsg("Sorry something went wrong please try again later.");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 10000);
      });
  };

  return (
    <div className={styles.reviewsTab}>
      {data?.length > 0 && (
        <div className={styles.avgContainer}>
          <div className={styles.avg}>
            <FiStar size={60} />
            <div className={styles.avgRating}>{avgReviews.toFixed(1)}</div>
          </div>
          <div className={styles.avgByNumber}>
            {reviewsByNumber.map((number, index) => {
              return (
                <div key={index} className={styles.avgByNumberItem}>
                  <div className={styles.avgByNumberItemNumber}>
                    {index + 1}
                  </div>
                  <div className={styles.avgByNumberItemProgress}>
                    <div
                      className={styles.avgByNumberItemProgressBar}
                      style={{ width: `${(number / data.length) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {showButton && (
        <button
          className={styles.leaveReviewButton}
          onClick={() => setShowInput(!showInput)}
        >
          Leave a review
        </button>
      )}

      <div className={styles.reviews}>
        {data &&
          data?.map(
            (
              review: {
                attributes: {
                  user: {
                    data: {
                      attributes: {
                        slug: string;
                        img: string;
                        username: string;
                      };
                    };
                  };
                  createdAt: string;
                  rating: number;
                  message: string;
                };
              },
              index: number
            ) => {
              return (
                <div key={index} className={styles.review}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.reviewUserRating}>
                      <div className={styles.reviewUserTimestamp}>
                        <Link
                          href={`/user-profile/${review?.attributes?.user?.data?.attributes?.slug}`}
                        >
                          <a>
                            <div className={styles.reviewUser}>
                              <div
                                className={styles.reviewUserPic}
                                style={{
                                  backgroundImage: `url('${review?.attributes?.user?.data?.attributes?.img}')`,
                                }}
                              ></div>
                              <div className={styles.reviewUserName}>
                                {
                                  review?.attributes?.user?.data?.attributes
                                    ?.username
                                }
                              </div>
                            </div>
                          </a>
                        </Link>
                        <div className={styles.reviewTimestamp}>
                          <div className={styles.dot}></div>
                          <span>
                            {dayjs(review?.attributes?.createdAt).fromNow()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.reviewRating}>
                      {[1, 2, 3, 4, 5].map((number, index) => {
                        return (
                          <div
                            key={index}
                            className={classNames(styles.reviewRatingStar, {
                              [styles.reviewRatingStarActive]:
                                number <= review?.attributes?.rating,
                            })}
                          >
                            <FiStar size={20} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.reviewMessage}>
                    <Markdown>{review?.attributes?.message}</Markdown>
                  </div>
                </div>
              );
            }
          )}
      </div>
      <Modal
        showModal={showInput}
        closeM={() => setShowInput(false)}
        setShowInput={setShowInput}
      >
        <FormWrap onSubmit={handleSubmit(onSubmit)}>
          <MainContainer>
            <CloseButtonWrap>
              <AiFillCloseCircle onClick={() => setShowInput(false)} />
            </CloseButtonWrap>
            <CardText>Leave a review</CardText>
            {error && <ErrorMsg>{msg}</ErrorMsg>}
            {/* {success && <SuccessMsg>{msg}</SuccessMsg>} */}
            <InputContainer>
              <InputFormGroupRow>
                <div className={styles.ratingInput}>
                  <Rating
                    allowHalfIcon
                    onClick={(rate: number) => {
                      setRating(rate), setValue("rating", (rate / 100) * 5);
                    }}
                    size={50}
                    ratingValue={rating}
                  />
                </div>
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
                    setValue("comment", content);
                  }}
                />
              </BodyTextWrapper>
            </InputContainer>
            <ButtonContainer>
              <CloseButton
                onClick={() => setShowInput(false)}
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

export default Reviews;

