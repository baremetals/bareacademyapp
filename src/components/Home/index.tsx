import React, { useEffect } from "react";
// import { BlogCardBody, BlogCardImage, BlogCardTitle, PageWrapper } from 'styles/common.styles'
import Dashboard from "../Dashboard";

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import RightSideBar from "components/Dashboard/RightSideBar";
import AdCardThree from "components/AdCards/AdCardThree";
import {
  CourseEntity,
  CourseEntityResponseCollection,
} from "generated/graphql";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { PageHeading, ProfileWrapGroup } from "../../styles/common.styles";

import Footer from "components/Footer";
import styles from "../../styles/Home/index.module.css";
import CourseCard from "./CourseCard";
import ArticleEntry from "./ArticleEntry";
import TakeQuizDialog from "./TakeQuizDialog";

import { useSockets } from "context/socket.context";

const Home = (props: {
  props: { data: { courses: CourseEntityResponseCollection } };
}) => {
  const { socket } = useSockets();
  const { user: user } = useAppSelector(isUser);

  const { data } = props.props;

  const courses = data.courses.data;
  const me = user?.id;

  useEffect(() => {
    socket.emit("joinroom", { me }, (error: any, d: any) => {
      if (error) {
        console.log(" Something went wrong please try again later.", error);
      }
    });
  }, []);

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
              {courses &&
                courses.map((course, index) => (
                  <CourseCard key={index} course={course as CourseEntity} />
                ))}
              {courses &&
                courses.map((course, index) => (
                  <CourseCard key={index} course={course as CourseEntity} />
                ))}
              {courses &&
                courses.map((course, index) => (
                  <CourseCard key={index} course={course as CourseEntity} />
                ))}
              {courses &&
                courses.map((course, index) => (
                  <CourseCard key={index} course={course as CourseEntity} />
                ))}
              {courses &&
                courses.map((course, index) => (
                  <CourseCard key={index} course={course as CourseEntity} />
                ))}
            </div>
            <div className={styles.articles}>
              <div className={styles.articlesHeading}>Latest articles</div>
              <ArticleEntry />
            </div>
          </div>
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
