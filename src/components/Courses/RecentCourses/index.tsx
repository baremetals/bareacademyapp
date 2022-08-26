import React from 'react'
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { RecentCoursesDocument } from "generated/graphql";

import {
  RightBarInfo,
  RightBarTitle,
} from "components/AdCards/rightside.styles";
import SideBarCard from "components/AdCards/SideBarCard";

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
  const router = useRouter();
  const { data } = useQuery(RecentCoursesDocument, {
    variables: {
      pagination: {
        start: 0,
        limit: 6,
      },
      sort: "updatedAt:desc",
    },
  });
  const courses = data?.courses?.data;
  // console.log(courses);

  return (
    <>
      <RightBarInfo
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          borderRadius: "0",
          padding: "0 0 0 1rem",
        }}
      >
        <RightBarTitle style={{ marginBottom: "1.5rem" }}>
          Recent Courses
        </RightBarTitle>
        {courses?.map((item: { attributes: { title: string; image: string; duration: string | undefined; slug: any; }; }, id: string) => (
          <SideBarCard
            key={id}
            title={item?.attributes?.title}
            image={item?.attributes?.image}
            category={item?.attributes?.duration}
            style={{ cursor: "pointer" }}
            onClick={() => router.push(`/courses/${item?.attributes?.slug}`)}
          />
        ))}
      </RightBarInfo>
    </>
  );
}

export default RecentCourses