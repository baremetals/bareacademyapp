import React from 'react'
import { useQuery } from "@apollo/client";
import { CourseEntity, RecentCoursesDocument } from "generated/graphql";
import durationToString from "helpers/durationToString";
import styles from "styles/LandingPage/Landing.module.css";
import SideBarCard from "components/AdCards/SideBarCard";
import { cutTextToLength } from 'utils';

// const fakeArticles = [
//   {
//     id: 1,
//     title: "Fullstack Javascript web Dev",
//     image: "/assets/images/blog-post.jpg",
//     duration: "3 Months",
//   },
//   {
//     id: 2,
//     title: "Fullstack Javascript web Dev",
//     image: "/assets/images/blog-post.jpg",
//     duration: "5 Weeks",
//   },
//   {
//     id: 3,
//     title: "Fullstack Javascript web Dev",
//     image: "/assets/images/blog-post.jpg",
//     duration: "6 Months",
//   },
//   {
//     id: 4,
//     title: "Fullstack Javascript web Dev",
//     image: "/assets/images/blog-post.jpg",
//     duration: "React",
//   },
// ];

const RecentCourses = () => {
  const { data } = useQuery(RecentCoursesDocument, {
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "updatedAt:desc",
    },
  });
  const courses: CourseEntity[] = data?.courses?.data;
  // console.log(courses);

  return (
    <div className={styles.recentCourses}>
      <h2>Recent Courses</h2>
      <ul className={styles.recentCoursesList}>
        {courses?.map((item) => (
          <SideBarCard
            key={item?.id}
            title={cutTextToLength(item?.attributes?.title as string, 20)}
            image={item?.attributes?.image as string}
            price={item?.attributes?.price as number}
            duration={durationToString(item?.attributes?.duration as number)}
            style={{ cursor: "pointer" }}
            page={`/courses/${item?.attributes?.slug}`}
            hasPrivateVersion={item?.attributes?.hasPrivateVersion as boolean}
          />
        ))}
      </ul>
    </div>
  );
}

export default RecentCourses
