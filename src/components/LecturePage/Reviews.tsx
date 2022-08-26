import React from "react";
import { FiStar } from "react-icons/fi";
import styles from "../../styles/LecturePage/Reviews.module.css";
import classNames from "classnames";
import Link from "next/link";
import { useQuery } from '@apollo/client';
// import { useRouter } from "next/router";
import { ReviewsDocument } from "generated/graphql";

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth";

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
  // const { data } = props;
  // const data = [];
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
      sort: "updatedAt:desc",
    },
  });
  const data = result.data?.reviews?.data || [];
  // console.log(result);
  const { user: user } = useAppSelector(isUser);

  data.sort((a, b) => {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  });

  const avgReviews =
    data.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / data.length;

  const reviewsByNumber = [1, 2, 3, 4, 5].map((number) => {
    return data
      .filter((review) => review.rating === number)
      .reduce((acc, cur) => {
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

  return (
    <>
      <div className={styles.reviewsTab}>
        {data.length > 0 && (
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
        <button onClick={() => {}}>Ask a question</button>
        <br />
        <br />
        <div className={styles.reviews}>
          {data.map((review, index) => {
            return (
              <div key={index} className={styles.review}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewUserRating}>
                    <div className={styles.reviewUserTimestamp}>
                      <Link href={review.user.url}>
                        <a>
                          <div className={styles.reviewUser}>
                            <div
                              className={styles.reviewUserPic}
                              style={{
                                backgroundImage: `url('${review.user.img}')`,
                              }}
                            ></div>
                            <div className={styles.reviewUserName}>
                              {review.user.name}
                            </div>
                          </div>
                        </a>
                      </Link>
                      <div className={styles.reviewTimestamp}>
                        <div className={styles.dot}></div>
                        <span>{renderTime(review.time)}</span>
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
                              number <= review.rating,
                          })}
                        >
                          <FiStar size={20} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.reviewMessage}>{review.message}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Reviews;
