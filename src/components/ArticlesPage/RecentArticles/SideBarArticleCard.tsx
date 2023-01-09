import React from 'react'
import styles from "styles/LandingPage/Landing.module.css";
import Image from "next/image";
import Link from "next/link";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);


type cardProps = {
  title: string;
  image: string;
  createdAt: string;
  page: string;
  onClick: any;
};

const SideBarArticleCard = ({ title, image, page, createdAt }: cardProps) => {
  return (
    <li className={styles.recentCoursesItem} style={{ cursor: "pointer" }}>
      <Link passHref href={page}>
        <div
          className={`${styles.recentCoursesImg} ${styles.recentCourseBlue}`}
        >
          <Image
            width={70}
            height={67}
            alt="web"
            src={image ? image : "/assets/images/blog-post.jpg"}
          />
        </div>
      </Link>

      <div className={styles.recentCoursesInfo}>
        <div className={styles.recentCoursesBlock}>
          <div className={styles.recentCoursesNumber}>
            <span className={styles.hours}>
              {dayjs(createdAt).fromNow()}
            </span>
          </div>
          <Link href={page}>
            <h3>{title}</h3>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default SideBarArticleCard