import React from "react";
import Link from "next/link";
import durationToString from "helpers/durationToString";
import { FiClock, 
  // FiMoreVertical, 
  FiStar } from "react-icons/fi";
import styles from "../../styles/Home/CourseCard.module.css";
import { CourseEntity, ReviewEntity } from 'generated/graphql';

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

const CourseCard = (props: { course: CourseEntity }) => {
  const { course } = props;
  const reviews = course?.attributes?.reviews?.data as ReviewEntity[];
  // console.log(props);

  const avgReviews =
    reviews.reduce((acc, cur) => {
      const rating = cur?.attributes?.rating as number;
      return acc + rating;
    }, 0) / reviews.length || 0;

  return (
    <div className={styles.CourseCard}>
      <div className={styles.CourseCardThreeDots}>
        {/* <FiMoreVertical size={24} color="white" /> */}
      </div>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${course?.attributes?.image})`,
        }}
      >
        <div className={styles.imgOverlay}></div>
      </div>
      <Link href={`/courses/${course?.attributes?.slug}/lectures`}>
        <div className={styles.CourseCardTitle} style={{ cursor: "pointer" }}>
          {course?.attributes?.title}
        </div>
      </Link>
      <div className={styles.CourseCardDetails}>
        <div className={styles.CourseCardRating}>
          <FiStar size={16} color="white" />
          <span>{avgReviews.toFixed(1)}</span>
        </div>
        <div className={styles.CourseCardDuration}>
          <FiClock size={16} color="white" />
          <span>{durationToString(parseInt(course?.attributes?.duration as string))}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
