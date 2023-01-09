import React from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from "styles/LandingPage/Landing.module.css";

import dayjs from "dayjs";

import { ApplyButton } from '../ArticleDetailPage/details.styles';


type TArticleBox = {
  articleId: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  createdAt: string;
  description?: string;
};

const ArticleBox = ({
  articleId,
  slug,
  image,
  category,
  title,
  createdAt,
}: TArticleBox) => {
  return (
    <div className={styles.col} key={articleId}>
      <div className={styles.coursesItems}>
        <Link href={`/articles/${slug}`}>
          <div className={styles.coursesImg}>
            <Image
              width={430}
              height={283}
              alt="article image"
              src={image}
              style={{ position: "relative" }}
            />
          </div>
        </Link>
        <div className={styles.coursesInfo}>
          {/* <label>£ {`${price}`}</label> */}
          <div className={`${styles.coursesRating} ${styles.goodRating}`}>
            <span
              className={styles.totalRating}
              style={{ color: "#5bb3aa", fontWeight: 600 }}
            >
              {category}
            </span>
          </div>
          <Link href={`/articles/${slug}`}>
            <h3 style={{ cursor: "pointer" }}>{title}</h3>
          </Link>
          <div className={`${styles.coursesRating} ${styles.goodRating}`}>
            <span>{dayjs(createdAt).format("DD/MM/YYYY")}</span>
          </div>
          <Link href={`/articles/${slug}` as string}>
            <ApplyButton>Read</ApplyButton>
          </Link>

          {/* <div className={styles.coursesNumber}>
            <div className={styles.col}>
              <Image
                width={33}
                height={22}
                alt="time"
                src="/assets/images/uiw_time-o.svg"
              />{" "}
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ArticleBox