import React from "react";
import {
  BlogCardBody,
  BlogCardImage,
  BlogCardTitle,
  PageWrapper,
} from "styles/common.styles";
import Dashboard from "../Dashboard";

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import RightSideBar from "components/Dashboard/RightSideBar";
import AdCardThree from "components/AdCards/AdCardThree";
import { CourseEntityResponseCollection } from "generated/graphql";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import {
  // PostCard,
  BlogCard,
  // CardTitle,
  CardDescription,
  // CardImage,
  CardDuration,
  // CardStartDate,
  // CardBody,
  PageHeading,
  PageWrapGroup,
  ProfileWrapGroup,
  // PageWrapper,
} from "../../styles/common.styles";
import Link from "next/link";
import Footer from "components/Footer";
import styles from "../../styles/Home/index.module.css";
import CourseCard from "./CourseCard";
import ArticleEntry from "./ArticleEntry";
import TakeQuizDialog from "./TakeQuizDialog";

const testCourses = [
  {
    title: "Web development",
    duration: 204,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    rating: 4.5,
  },
  {
    title: "Mobile app design",
    duration: 595,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    rating: 4,
  },
  {
    title: "Facebook brand UI kit",
    duration: 225,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    rating: 4.5,
  },
];

const articles = [
  {
    title: "Web development",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Mobile app design",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Facebook brand UI kit",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Home = (props: {
  props: { data: { courses: CourseEntityResponseCollection } };
}) => {
  const { user: user } = useAppSelector(isUser);
  const { data } = props.props;

  const courses = data.courses.data;
  // console.log(courses);
  return (
    <>
      <Dashboard>
        <PageHeading>Hello, {user?.username}</PageHeading>
        <ProfileWrapGroup
          className={user?.id ? "" : "container-loggedin"}
          // style={{ maxWidth: "1232px", margin: "auto", paddingTop: "6rem" }}
        >
          <div className={styles.container}>
            <div className={styles.courses}>
              {testCourses &&
                testCourses.map((course, index) => (
                  <CourseCard key={index} course={course} />
                ))}
            </div>
            <div className={styles.articles}>
              <div className={styles.articlesHeading}>Latest articles</div>
              {articles &&
                articles.map((article, index) => (
                  <ArticleEntry key={index} article={article} />
                ))}
            </div>
          </div>
          <PageWrapGroup
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "0",
            }}
          >
            <PageWrapper>
              {courses &&
                courses.map((course, id) => (
                  <BlogCard key={id}>
                    <Link href={`/courses/${course?.attributes?.slug}`}>
                      <BlogCardImage
                        alt="course image"
                        src={course?.attributes?.image?.data?.attributes?.url}
                      />
                    </Link>
                    <BlogCardBody>
                      <CardDuration>
                        Duration - {course?.attributes?.duration}
                      </CardDuration>
                      <BlogCardTitle>
                        <Link href={`/courses/${course?.attributes?.slug}`}>
                          {course?.attributes?.title}
                        </Link>
                      </BlogCardTitle>
                      <CardDescription style={{ marginBottom: "0" }}>
                        {/* <CardStartDate>
                          Date -{" "}
                          {dayjs(course?.attributes?.startDate).fromNow()}
                        </CardStartDate> */}
                      </CardDescription>
                    </BlogCardBody>
                  </BlogCard>
                ))}
            </PageWrapper>
          </PageWrapGroup>

          <RightSideBar>
            <AdCardThree />
            <TakeQuizDialog />
          </RightSideBar>
        </ProfileWrapGroup>
      </Dashboard>
      {!user && <Footer />}
    </>
  );
};

export default Home;
