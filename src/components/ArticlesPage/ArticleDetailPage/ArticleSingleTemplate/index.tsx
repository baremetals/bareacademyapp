import React, { useState } from "react";
import Dashboard from "components/Dashboard";
import SocialShare from "components/SocialShare";
import dynamic from "next/dynamic";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import { useRouter } from "next/router";
const RecentArticles: any = dynamic(() => import("../../RecentArticles"));

import styles from "styles/LandingPage/Landing.module.css";
import Link from "next/link";


import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);



type TCourseDetailsTemplate = {
  id: string;
  title: string;
  image: string;
  body: string;
  categories: string[];
  authorName: string;
  authorJobTitle: string;
  authorAvatar: string;
  createdAt: string;
};

const ArticleSingleTemplate = ({
  id,
  title,
  image,
  body,
  authorName,
  authorJobTitle,
  authorAvatar,
  createdAt,
}: TCourseDetailsTemplate) => {
  const router = useRouter();
  const [socialDropdown, setSocialDropdown] = useState(false);
  const toggle: any = () => {
    setSocialDropdown(!socialDropdown);
  };

  
  return (
    <Dashboard>
      <main>
        {/* <!-- page hero section --> */}
        <article
          className={`${styles.pageHeroSection} ${styles.singlePageHeroBanner}`}
        >
          <div className={styles.pageHeroBg}>
            <Image
              layout="fill"
              alt="courses"
              className={styles.pageHeroBgPic}
              src={image}
            />
          </div>
          <div className={styles.pageHeroContent}>
            <div className={styles.container}>
              <div className={styles.pageHeroInfo}>
                <h1>{title}</h1>
                <div className={styles.pageHeroUser}>
                  <ul>
                    <li>
                      <div className={styles.userBlock}>
                        <span className={styles.user}>
                          <Image
                            width={32}
                            height={33}
                            alt="user"
                            src={authorAvatar as string}
                          />
                        </span>
                        <span>{authorName}</span>
                      </div>
                    </li>
                    <li>{authorJobTitle}</li>
                    <li>{createdAt}</li>
                    {/* <li>{totalStudents} Students</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
        {/* <!-- breadcrumb --> */}
        <article className={styles.breadcrumb}>
          <div className={styles.container}>
            <ol>
              <li>
                <Link href={id ? "/home" : "/"}> Home</Link>
              </li>
              <li>
                <Link href="/articles">Articles</Link>
              </li>
              <li>
                <a href="#">Article Details</a>
              </li>
            </ol>
          </div>
        </article>

        {/* <!-- Courses Detail --> */}
        <article className={styles.coursesDetailSection}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.coursesDetail}>
                  {/* <!-- Courses Detail Tabs --> */}
                  <ul className={styles.tabs}>
                    <li
                      className={`${styles.tabLink} ${styles.current}`}
                      data-tab="tab-1"
                    >
                      Overview
                    </li>
                  </ul>

                  {/* <!-- Courses Detail Tabs Contain --> */}
                  <div
                    id="tab-1"
                    className={`${styles.tabContent} ${styles.current}`}
                  >
                    {/* <h4>Article Description</h4> */}
                    <div>
                      <Markdown>{body}</Markdown>
                    </div>

                    <div className={styles.shareCourse}>
                      <div
                        // type="button"
                        className={`${styles.btn} ${styles.btnPrimery}`}
                        onClick={() => toggle()}
                      >
                        Share this course
                        <SocialShare
                          pathname={router.asPath}
                          toggle={toggle}
                          socialDropdown={socialDropdown}
                        />
                        <Image
                          width="26"
                          height="26"
                          src="/assets/images/share.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <RecentArticles />
              </div>
            </div>
          </div>
        </article>
        {/* <RelatedCourses categories={categories} /> */}
      </main>
    </Dashboard>
  );
};

export default ArticleSingleTemplate