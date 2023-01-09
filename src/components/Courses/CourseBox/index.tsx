import durationToString from 'helpers/durationToString';
import Link from 'next/link'
import Image from "next/image";
import React from 'react'
import styles from "styles/LandingPage/Landing.module.css";
import { ReviewEntity } from 'generated/graphql';
import ReviewSection from './Review';


type ICourseBox = {
  courseId: string;
  slug: string;
  title: string;
  image: string;
  level: string;
  isFree: boolean;
  price: number;
  duration: number;
  totalStudents: number;
  introduction?: string;
  reviews: ReviewEntity[] | any;
};

export const CourseBox = ({
  courseId,
  slug,
  image,
  level,
  isFree,
  price,
  title,
  duration,
  totalStudents,
  reviews
}: ICourseBox) => {

  return (
    <div className={styles.col} key={courseId}>
      <div className={styles.coursesItems}>
        <Link href={`/courses/${slug}`}>
          <div className={styles.coursesImg}>
            <Image width={430} height={283} alt="courses image" src={image} style={{position: "relative"}}/>
            {isFree && (
              <label className={`${styles.priceTag} ${styles.price}`} >
                FREE
              </label>
            )}
          </div>
        </Link>
        <div className={styles.coursesInfo}>
          <label>£ {`${price}`}</label>
          <Link href={`/courses/${slug}`}>
            <h3 style={{ cursor: "pointer" }}>{title}</h3>
          </Link>
          <div className={`${styles.coursesRating} ${styles.goodRating}`}>
            <span className={styles.totalRating}>{level}</span>
          </div>
          <ReviewSection reviews={reviews}/>
          <div className={styles.coursesNumber}>
            <div className={styles.col}>
              <Image
                width={33}
                height={22}
                alt="time"
                src="/assets/images/uiw_time-o.svg"
              />{" "}
              {durationToString(duration)}
            </div>
            <div className={styles.col}>
              <Image
                width={25}
                height={25}
                alt="time"
                src="/assets/images/bi_person.svg"
              />{" "}
              {totalStudents} Students
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
