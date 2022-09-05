import React from "react";
import Link from "next/link";
import durationToString from "helpers/durationToString";
import {
  FiClock,
  FiMoreVertical,
  // FiMoreVertical,
  FiStar,
} from "react-icons/fi";
import styles from "../../styles/Home/CourseCard.module.css";
import { CourseEntity, ReviewEntity } from "generated/graphql";
import classNames from "classnames";
import TitlePopOver from "./TitlePopOver";

// interface Props {
//   course: {
//     attributes: {
//       title: string;
//       duration: number;
//       image: string;
//       slug: string;
//       reviews: {
//         data: [{
//           id: string;
//           attributes: { rating: number };
//         }];
//       };
//     };
//   };
// }

const CourseCard = (props: { course: CourseEntity; withGradient: boolean }) => {
  const { course, withGradient } = props;
  const reviews = course?.attributes?.reviews?.data as ReviewEntity[];
  const level = course.attributes?.level;
  // console.log(course);

  const avgReviews =
    reviews.reduce((acc, cur) => {
      const rating = cur?.attributes?.rating as number;
      return acc + rating;
    }, 0) / reviews.length || 0;

  return (
    <div
      className={classNames(styles.CourseCard, {
        [styles.CourseCardPrimer]: level === "Primer",
        [styles.CourseCardBeginner]: level === "Beginner",
        [styles.CourseCardIntermediate]: level === "Intermediate",
        [styles.CourseCardAdvance]: level === "Advance",
      })}
    >
      <div className={styles.CourseCardLevel}>{level}</div>
      <div className={styles.CourseCardThreeDots}>
        <FiMoreVertical size={24} color="white" />
      </div>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${
            course?.attributes?.image || "/assets/images/course-placeholder.png"
          })`,
        }}
      >
        {withGradient && <div className={styles.imgOverlay}></div>}
      </div>
      <Link href={`/courses/${course?.attributes?.slug}/lectures`}>
        <div className={styles.CourseCardTitle} style={{ cursor: "pointer" }}>
          <TitlePopOver size={22}>{course?.attributes?.title}</TitlePopOver>
        </div>
      </Link>
      <div className={styles.CourseCardDetails}>
        <div className={styles.CourseCardRating}>
          <FiStar size={16} />
          <span>{avgReviews.toFixed(1)}</span>
        </div>
        <div className={styles.CourseCardDuration}>
          <FiClock size={16} />
          <span>
            {durationToString(course?.attributes?.duration as number)}
          </span>
        </div>
      </div>
    </div>
  );
};

CourseCard.defaultProps = {
  withGradient: false,
};

export default CourseCard;
