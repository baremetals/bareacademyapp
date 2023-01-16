import durationToString from 'helpers/durationToString';
import Link from 'next/link'
import Image from "next/image";
import React from 'react'
import styles from "styles/LandingPage/Landing.module.css";
import { ReviewEntity } from 'generated/graphql';
import ReviewSection from './Review';
import { cutTextToLength } from 'utils';



type ICourseBox = {
  courseId: string;
  slug?: string;
  page?: string;
  title: string;
  image: string;
  level: string;
  isFree: boolean;
  hasPrivateVersion?: boolean;
  price: number;
  duration: number;
  totalStudents: number;
  introduction?: string;
  reviews: ReviewEntity[] | any;
};

export const CourseBox = ({
  courseId,
  page,
  image,
  level,
  isFree,
  price,
  title,
  duration,
  totalStudents,
  hasPrivateVersion,
  reviews
}: ICourseBox) => {

  return (
    <div className={styles.col} key={courseId}>
      <div className={styles.coursesItems}>
        <Link href={page as string}>
          <div className={styles.coursesImg}>
            <Image
              width={430}
              height={283}
              alt="courses image"
              src={image}
              style={{ position: "relative" }}
            />
            {isFree && (
              <label className={`${styles.priceTag} ${styles.price}`}>
                FREE
              </label>
            )}
            {hasPrivateVersion && (
              <label className={`${styles.priceTag} ${styles.price}`}>
                PRIVATE
              </label>
            )}
          </div>
        </Link>
        <div className={styles.coursesInfo}>
          <label>£ {`${price}`}</label>
          <Link href={page as string}>
            <h3 style={{ cursor: "pointer" }}>{cutTextToLength(title, 64)}</h3>
          </Link>
          <div className={`${styles.coursesRating} ${styles.goodRating}`}>
            <span className={styles.totalRating}>{level}</span>
          </div>
          <ReviewSection reviews={reviews} />
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
