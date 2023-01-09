import React from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { ReviewEntity, ReviewsDocument } from "generated/graphql";
import classNames from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import styles from "styles/LandingPage/Landing.module.css";

import { FiStar } from "react-icons/fi";
type IdType = {
  id: string;
};

export const CourseReviews = ({ id }: IdType) => {
  const { data } = useQuery(ReviewsDocument, {
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
  const reviews: ReviewEntity[] | any = data?.reviews?.data || [];

  const avgReviews =
    reviews?.reduce((acc: number, cur: { attributes: { rating: number } }) => {
      // console.log(acc)
      return acc + cur?.attributes?.rating;
    }, 0) / reviews?.length;

  const reviewsByNumber = [1, 2, 3, 4, 5].map((number) => {
    return reviews
      ?.filter(
        (rev: { attributes: { rating: number } }) =>
          Math.round(rev?.attributes?.rating) === number
      )
      ?.reduce((acc: number, _cur: any) => {
        return acc + 1;
      }, 0);
  });
  // console.log(avgReviews);
  return (
    <>
      <div className={styles.reviewsRating}>
        <div className={styles.averageRating}>
          <div className={styles.subTitle}>Average Rating</div>
          <div className={styles.ratingBox}>
            <span className={styles.rating}>
              {isNaN(avgReviews) ? 0 : avgReviews.toFixed(1)}
            </span>
            <div className={styles.ratingBlock}>
              {[1, 2, 3, 4, 5].map((number, index) => {
                const rating: number = isNaN(avgReviews)
                  ? 0
                  : (Math.floor(avgReviews) as number);
                return (
                  <div
                    key={index}
                    className={classNames(styles.reviewRatingStar, {
                      [styles.reviewRatingStarActive]: number <= rating,
                    })}
                  >
                    <FiStar size={23} fill="#F6B500" />
                  </div>
                );
              })}
            </div>
            <span className={styles.totalRating}>
              ({isNaN(avgReviews) ? 0 : avgReviews.toFixed(1)} ratings)
            </span>
          </div>
        </div>
        <div className={styles.detailedRating}>
          <div className={styles.subTitle}>Detailed Rating</div>
          {reviewsByNumber.map((rate, index) => {
            // console.log(rate)
            return (
              <div key={index} className={styles.ratingList}>
                <div className={styles.ratingBlock}>
                  {[1, 2, 3, 4, 5].map((number, index) => {
                    const rating: number = rate;
                    return (
                      <div
                        key={index}
                        className={classNames(styles.reviewRatingStar, {
                          [styles.reviewRatingStarActive]: number <= rating,
                        })}
                      >
                        <FiStar size={20} fill="#F6B500" />
                      </div>
                    );
                  })}
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progress}
                    style={{ width: `${(rate / reviews?.length) * 100}%` }}
                    // style={{ width: `100.33333%` }}
                  ></div>
                </div>
                <span className={styles.totalRating}>{rate}</span>
              </div>
            );
          })}
        </div>
      </div>
      {reviews.map((rev: ReviewEntity, index: number) => {
        return (
          <div className={styles.reviewList} key={index}>
            <div className={styles.userPicture}>
              <div className={styles.userImg}>
                <Image
                  width="103"
                  height="102"
                  src={rev?.attributes?.user?.data?.attributes?.img as string}
                  alt="user image"
                />
              </div>
            </div>
            <div className={styles.userInfo}>
              <div className={styles.userRating}>
                <div className={styles.userName}>
                  {rev?.attributes?.user?.data?.attributes?.fullName as string}
                </div>
                <div className={styles.starRating}>
                  <div className={styles.ratingBlock}>
                    {[1, 2, 3, 4, 5].map((number, index) => {
                      const rating: number = rev?.attributes?.rating as number;
                      return (
                        <div
                          key={index}
                          className={classNames(styles.reviewRatingStar, {
                            [styles.reviewRatingStarActive]: number <= rating,
                          })}
                        >
                          <FiStar size={20} fill="#F6B500" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <h3>{rev?.attributes?.message}</h3>
              <p>{dayjs(rev?.attributes?.createdAt).fromNow()}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
