import React from "react";
import Link from "next/link";
import durationToString from "helpers/durationToString";
import { FiClock, 
  // FiMoreVertical, 
  FiStar } from "react-icons/fi";
import styles from "../../styles/Home/CourseCard.module.css";
import { GroupEntity, ReviewEntity } from "generated/graphql";

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

const CourseCard = (props: { group: GroupEntity }) => {
  const { group } = props;
  const reviews = group?.attributes?.course?.data?.attributes?.reviews
    ?.data as ReviewEntity[];
  
  const slug = group?.attributes?.slug as string;

  const course = group?.attributes?.course;

  // console.log(course);
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
          backgroundImage: `url(${course?.data?.attributes?.image})`,
        }}
      >
        <div className={styles.imgOverlay}></div>
      </div>
      <Link href={`/courses/${slug}/lectures`}>
        <div className={styles.CourseCardTitle} style={{ cursor: "pointer" }}>
          {course?.data?.attributes?.title}
        </div>
      </Link>
      <div className={styles.CourseCardDetails}>
        <div className={styles.CourseCardRating}>
          <FiStar size={16} color="white" />
          <span>{avgReviews.toFixed(1)}</span>
        </div>
        <div className={styles.CourseCardDuration}>
          <FiClock size={16} color="white" />
          <span>
            {durationToString(course?.data?.attributes?.duration as number)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
