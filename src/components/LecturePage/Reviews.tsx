import React from "react";
import { FiStar } from "react-icons/fi";
import styles from "../../styles/LecturePage/Reviews.module.css";
import classNames from "classnames";
import Link from "next/link";
import { useQuery } from '@apollo/client';
import axios from "axios";
// import { useRouter } from "next/router";
import { ReviewsDocument } from "generated/graphql";
import TextareaAutosize from "react-textarea-autosize";


import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth";

import {
  FiSend,
} from "react-icons/fi";

// type Props = {
//   data: Array<{
//     user: {
//       name: string;
//       img: string;
//       url: string;
//     };
//     message: string;
//     rating: number;
//     time: string;
//   }>;
// };

type IdType = {
  id: string;
};

const Reviews = (props: IdType) => {
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
  // console.log(result?.data?.reviews?.data);
  const { user: user } = useAppSelector(isUser);
  const [showInput, setShowInput] = React.useState(false);
  const [message, setMessage] = React.useState<string>("");
  const [rating, setRating] = React.useState<number>(0);

  const dta = [...data!]

  dta.sort((a: { time: string | number | Date; }, b: { time: string | number | Date; }) => {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  });

  const avgReviews =
    data?.reduce((acc: number, cur: { attributes: { rating: number; }; }) => {
      // console.log(acc)
      return acc + cur?.attributes?.rating;
    }, 0) / data?.length ;

  const reviewsByNumber = [1, 2, 3, 4, 5].map((number) => {
    return data
      ?.filter((review: { attributes: { rating: number; }; }) => review?.attributes?.rating === number)
      ?.reduce((acc: number, cur: any) => {
        return acc + 1;
      }, 0);
  });

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

  const onSubmit = async () => {
    console.log(message, "-", rating);
    await axios
      .post("/api/course/reviews", {
        data: {
          rating,
          message,
          user: user?.id as string,
          course: id,
          publishedAt: new Date(),
        },
      })
      .then(() => {
        refetch();
        setShowInput(!showInput);
        setMessage("");
        setRating(0);
      })
      .catch((err) => {
        console.log(err)
        // setMsg("Sorry something went wrong please try again later.");
        // setError(true);
        // setTimeout(() => {
        //   setError(false);
        // }, 10000);
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
      <button onClick={() => setShowInput(!showInput)}>Leave a review</button>
      <br />
      <br />
      {showInput && (
        <form className={styles.qnaCommentInput}>
          <TextareaAutosize
            // type="text"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          />
          <TextareaAutosize
            className={styles.qnaCommentTextarea}
            rows={1}
            placeholder="Write a comment..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="button"
            onClick={() => onSubmit()}
            disabled={!showInput}
            className={styles.qnaCommentSubmit}
          >
            <FiSend size={20} />
          </button>
        </form>
      )}
      <div className={styles.reviews}>
        {dta?.map((review: { attributes: { user: { data: { attributes: { slug: string; img: string; username: string }; }; }; updatedAt: string; rating: number; message: string }; }, index: number) => {
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
                      <span>{renderTime(review?.attributes?.updatedAt)}</span>
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
                {review?.attributes?.message}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
