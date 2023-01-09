import React from 'react'
import { FiStar } from "react-icons/fi";
import classNames from "classnames";
import styles from "styles/LandingPage/Landing.module.css";
import style from "styles/LecturePage/Reviews.module.css";
import { ReviewEntity } from "generated/graphql";

type IReviewBox = {
  reviews: ReviewEntity[] | any;
};
const ReviewSection = ({ reviews }: IReviewBox) => {
    const avgReviews =
      reviews?.reduce(
        (acc: number, cur: { attributes: { rating: number } }) => {
          // console.log(acc)
          return acc + cur?.attributes?.rating;
        },
        0
      ) / reviews?.length;
  return (
    <div className={`${styles.coursesRating} ${styles.goodRating}`}>
      {reviews.length > 0 && (
        <>
          <span className={styles.rating}>{avgReviews.toFixed(1)}</span>
          {[1, 2, 3, 4, 5].map((number, index) => {
            const ratings = Math.floor(avgReviews);
            return (
              <div
                key={index}
                className={classNames(style.reviewRatingStar, {
                  [style.reviewRatingStarActiveCC]: number <= ratings,
                })}
              >
                <FiStar size={18} style={{ display: "flex" }} />{" "}
              </div>
            );
          })}

          <span className={styles.totalRating}>({reviews.length})</span>
        </>
      )}
      {reviews.length === 0 && (
        <span className={styles.totalRating}> No ratings</span>
      )}
    </div>
  );
}

export default ReviewSection