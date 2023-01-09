import Dashboard from 'components/Dashboard'
import React from 'react'
import { CourseBox } from './CourseBox';
import { CourseEntity } from 'generated/graphql';
import styles from "styles/LandingPage/Landing.module.css"
import Link from 'next/link';
import Image from "next/image";


type ITemplate = {
  id: string;
  description: string;
  courses: CourseEntity[];
};

export const CourseTemplate = ({ id, description, courses }: ITemplate) => {
  return (
    <Dashboard>
      <main>
        <article className={styles.pageHeroSection}>
          <div className={styles.pageHeroBg}>
            <Image
              layout="fill"
              alt="courses hero image"
              className={styles.pageHeroBgPic}
              src="/assets/images/courses.png"
            />
          </div>
          <div className={styles.pageHeroContent}>
            <div className={styles.container}>
              <div className={styles.pageHeroInfo}>
                <label>Browse your study program</label>
                <h1>Explore all our courses</h1>
                <p>{description}</p>
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
            </ol>
          </div>
        </article>
        <article className={styles.coursesListSection}>
          <div className={styles.container}>
            <div className={styles.coursesListHeader}>
              <h2>Courses</h2>
            </div>
            <div className={styles.row}>
              {courses?.map((item) => (
                <CourseBox
                  key={item.id}
                  courseId={item.id as string}
                  slug={item?.attributes?.slug as string}
                  title={item?.attributes?.title as string}
                  introduction={item?.attributes?.introduction as string}
                  image={item?.attributes?.image as string}
                  level={item?.attributes?.level as string}
                  isFree={item?.attributes?.isFree as boolean}
                  price={item?.attributes?.price as number}
                  duration={item?.attributes?.duration as number}
                  totalStudents={item?.attributes?.totalStudents as number}
                  reviews={item?.attributes?.reviews?.data}
                />
              ))}
            </div>
          </div>
        </article>
      </main>
    </Dashboard>
  );
};
