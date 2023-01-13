import React, { useState } from 'react'
import Dashboard from 'components/Dashboard';
import SocialShare from 'components/SocialShare';
import dynamic from 'next/dynamic';
import Image from "next/image"
import { ErrorMsg } from 'components/Input';
import durationToString from 'helpers/durationToString';
import Markdown from 'markdown-to-jsx';
// import Spinner from 'components/Spinner';
import { useRouter } from 'next/router';
const RecentCourses: any = dynamic(() => import("../RecentCourses"));

import styles from "styles/LandingPage/Landing.module.css";
import { Teacher } from 'generated/graphql';
import Link from 'next/link';
import RelatedCourses from '../RelatedCourses';

import { CourseReviews } from './CourseReviews';
// import { loading } from 'features/courses/selectors';


type TCourseDetailsTemplate = {
  id: string;
  me: string;
  courseId: string;
  title: string;
  image: string;
  isFree: boolean;
  isStudent: boolean;
  price: number;
  errorMsg: boolean;
  message: string;
  duration: number;
  level: string;
  introduction: string;
  description: string;
  isTeacher?: boolean;
  notes: string;
  isloading: boolean;
  hasPrivateVersion: boolean;
  groupSlug: string;
  courseType: string;
  categories: string[];
  teacher: Teacher;
  totalStudents: number;
  handleBuy: (_orderType: string) => void;
};
export const CourseDetailsTemplate = ({
  id,
  me,
  courseId,
  title,
  image,
  isFree,
  isStudent,
  price,
  errorMsg,
  message,
  duration,
  level,
  introduction,
  description,
  // isTeacher,
  hasPrivateVersion,
  notes,
  groupSlug,
  isloading,
  handleBuy,
  teacher,
  totalStudents,
  categories,
  courseType,
}: TCourseDetailsTemplate) => {
  const router = useRouter();
  const [socialDropdown, setSocialDropdown] = useState(false);
  const toggle = React.useCallback(() => {
    setSocialDropdown(!socialDropdown);
  }, [socialDropdown]);

  function changeTab(
    event: { currentTarget: { className: string } },
    id: string
  ) {
    // Declare all variables
    let i;
    let tabcontent: any;
    let tablinks; // find the types of these variables

    // Get all elements with class="tabcontent" and hide them
    // eslint-disable-next-line prefer-const
    tabcontent = document.getElementsByClassName(`${styles.tabContent}`);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // console.log(tabcontent);

    // Get all elements with class="tablinks" and remove the class "active"
    // eslint-disable-next-line prefer-const
    tablinks = document.getElementsByClassName(`${styles.tabLinks}`);
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(
        `${styles.tabLinks} ${styles.current}`,
        ""
      );
    }

    console.log(tablinks);
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(id)!.style.display = "block";
    event.currentTarget.className += ` ${styles.current}`;
  }

  // console.log(me)
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
                            src={teacher?.image as string}
                          />
                        </span>
                        <span>{teacher?.fullName}</span>
                      </div>
                    </li>
                    <li>{level}</li>
                    <li>{durationToString(duration)}</li>
                    <li>{totalStudents} Students</li>
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
                <Link href="/courses">Courses</Link>
              </li>
              <li>
                <a href="#">Courses Details</a>
              </li>
            </ol>
          </div>
        </article>

        {/* <!-- Courses Detail --> */}
        <article className={styles.coursesDetailSection}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.col}>
                {hasPrivateVersion ? (
                  <h2 style={{ color: "#7755E2" }}>
                    {`£${price} - Private Lessons`}
                  </h2>
                ) : (
                  <h2 style={{ color: "#7755E2" }}>
                    {isFree ? "Free" : `£${price}`}
                  </h2>
                )}

                <div className={styles.coursesDetail}>
                  {/* <!-- Courses Detail Tabs --> */}
                  <ul className={styles.tabs}>
                    <li
                      className={`${styles.tabLink} ${styles.current}`}
                      data-tab="tab-1"
                      onClick={(e) => changeTab(e, "tab-1")}
                    >
                      Overview
                    </li>
                    <li
                      className={styles.tabLink}
                      data-tab="tab-2"
                      onClick={(e) => changeTab(e, "tab-2")}
                    >
                      Curriculum
                    </li>
                    <li
                      className={styles.tabLink}
                      data-tab="tab-3"
                      onClick={(e) => changeTab(e, "tab-3")}
                    >
                      Materials
                    </li>
                    <li
                      className={styles.tabLink}
                      data-tab="tab-4"
                      onClick={(e) => changeTab(e, "tab-4")}
                    >
                      Reviews
                    </li>
                  </ul>

                  {/* <!-- Courses Detail Tabs Contain --> */}
                  <div
                    id="tab-1"
                    className={`${styles.tabContent} ${styles.current}`}
                  >
                    <h4>Course Description</h4>
                    <div>
                      <Markdown>{introduction}</Markdown>
                    </div>
                    {/* <div className={styles.shareCourse}>
                      <button
                        type="button"
                        className={`${styles.btn} ${styles.btnPrimery}`}
                        onClick={() => router.push("/auth/signin")}
                      >
                        Buy this course
                        {isloading && "loading..."}
                      </button>
                    </div> */}

                    <div className={styles.shareCourse}>
                      {me && isStudent && (
                        <button
                          type="button"
                          className={`${styles.btn} ${styles.btnPrimery}`}
                          onClick={() =>
                            router.push(`/courses/${groupSlug}/lectures`)
                          }
                        >
                          My course
                          {isloading && "loading..."}
                        </button>
                      )}
                      {me && !isStudent && (
                        <button
                          type="button"
                          className={`${styles.btn} ${styles.btnPrimery}`}
                          onClick={() => handleBuy(courseType)}
                        >
                          Buy Course
                          {isloading && "loading..."}
                        </button>
                      )}
                      {!me && (
                        <button
                          type="button"
                          className={`${styles.btn} ${styles.btnPrimery}`}
                          onClick={() => router.push("/auth/signin")}
                        >
                          Buy this course
                          {isloading && "loading..."}
                        </button>
                      )}

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
                  <div id="tab-2" className={styles.tabContent}>
                    <div>
                      <Markdown>{description}</Markdown>
                    </div>
                  </div>
                  <div id="tab-3" className={styles.tabContent}>
                    <h4>Additional Notes</h4>
                    <div>
                      <Markdown>{notes}</Markdown>
                    </div>
                  </div>
                  <div id="tab-4" className={`${styles.tabContent}`}>
                    <h4>Reviews</h4>
                    <CourseReviews id={courseId} />
                  </div>
                </div>
              </div>
              <div className={styles.col}>
                <div>{errorMsg && <ErrorMsg>{message}</ErrorMsg>}</div>
                <RecentCourses />
              </div>
            </div>
          </div>
        </article>
        <RelatedCourses categories={categories} />
      </main>
    </Dashboard>
  );
};
