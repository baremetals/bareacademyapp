import durationToString from "helpers/durationToString";
import React from "react";
import { FiClock, FiMoreVertical, FiStar } from "react-icons/fi";
import styles from "../../styles/Home/CourseCard.module.css";

interface Props {
  course: {
    title: string;
    duration: number;
    img: string;
    rating: number;
  };
}

const CourseCard = (props: Props) => {
  const { course } = props;
  return (
    <div className={styles.CourseCard}>
      <div className={styles.CourseCardThreeDots}>
        <FiMoreVertical size={24} color="white" />
      </div>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${course.img})`,
        }}
      >
        <div className={styles.imgOverlay}></div>
      </div>
      <div className={styles.CourseCardTitle}>{course.title}</div>
      <div className={styles.CourseCardDetails}>
        <div className={styles.CourseCardRating}>
          <FiStar size={16} color="white" />
          <span>{course.rating}</span>
        </div>
        <div className={styles.CourseCardDuration}>
          <FiClock size={16} color="white" />
          <span>{durationToString(course.duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
