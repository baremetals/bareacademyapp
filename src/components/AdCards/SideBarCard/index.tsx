
import React from 'react'
import styles from "styles/LandingPage/Landing.module.css";
import Image from "next/image";
import Link from 'next/link';

type cardProps = {
  title: string;
  image: string;
  price: number;
  category?: string;
  duration?: string;
  page: string;
  style: any;
};


const SideBarCard = ({title, image, duration, price, page }: cardProps) => {
  return (
    <li className={styles.recentCoursesItem} style={{ cursor: "pointer" }}>
      <Link passHref href={page}>
        <div
          className={`${styles.recentCoursesImg} ${styles.recentCourseBlue}`}
        >
          {/* <Link passHref href={page}> */}
          <Image
            width={70}
            height={67}
            alt="web"
            src={image ? image : "/assets/images/blog-post.jpg"}
          />
          {/* </Link> */}
        </div>
      </Link>

      <div className={styles.recentCoursesInfo}>
        <div className={styles.recentCoursesBlock}>
          <div className={styles.recentCoursesNumber}>
            <span className={styles.cost}>£ {price}</span>
            <span className={styles.hours}>
              <Image
                width={18}
                height={24}
                alt="clock"
                className={styles.clockImg}
                src="/assets/images/clock-green.svg"
              />{" "}
              {duration}
            </span>
          </div>
          <Link href={page}>
            <h3>{title}</h3>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default SideBarCard