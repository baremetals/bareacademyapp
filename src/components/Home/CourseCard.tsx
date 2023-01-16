import React from "react";
import Link from "next/link";
import durationToString from "helpers/durationToString";
import {
  FiClock,
  // FiMoreVertical,
  FiStar,
} from "react-icons/fi";
import styles from "../../styles/Home/CourseCard.module.css";
import classNames from "classnames";
import TitlePopOver from "./TitlePopOver";
import { GroupEntity, ReviewEntity } from "generated/graphql";


const CourseCard = (props: { group: GroupEntity; withGradient: boolean }) => {
  const { withGradient } = props;
  // console.log(course);
  const { group } = props;
  const reviews = group?.attributes?.course?.data?.attributes?.reviews
    ?.data as ReviewEntity[];

  const slug = group?.attributes?.slug as string;

  const course = group?.attributes?.course;

  const level = course?.data?.attributes?.level;
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
        {/* <FiMoreVertical size={24} color="white" /> */}
      </div>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${
            course?.data?.attributes?.image ||
            "/assets/images/course-placeholder.png"
          })`,
        }}
      >
        {withGradient && <div className={styles.imgOverlay}></div>}
      </div>
      <Link href={`/courses/${slug}/lectures`}>
        <div className={styles.CourseCardTitle} style={{ cursor: "pointer" }}>
          <TitlePopOver size={22}>
            {course?.data?.attributes?.title as string}
          </TitlePopOver>
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
            {durationToString(course?.data?.attributes?.duration as number)}
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
