import React from "react";
import styles from "../styles/LecturePage/index.module.css";
import classNames from "classnames";
import {
  TitleDescription,
  Tutor,
  Achievements,
  Lectures,
  CourseVideo,
} from "components/LecturePage";

const course = {
  tutor: {
    name: "Lana Marandina",
    title: "Course tutor",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    url: "#",
  },
  title:
    "Learning How To Create a Beautiful Scene in Illustrator in 80 minutes",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
  achievements: [
    {
      type: "points",
      number: 1800,
    },
    {
      type: "progress",
      number: 45.3,
    },
    {
      type: "level-up",
      number: 26,
    },
    {
      type: "level-up",
      number: 26,
    },
  ],
  lectures: [
    {
      title: "Introduction",
      duration: 204,
      progress: 1,
    },
    {
      title: "Getting started",
      duration: 595,
      progress: 0.75,
    },
    {
      title: "The Illustration",
      duration: 3768,
      progress: 0,
    },
    {
      title: "The Conception",
      duration: 5268,
      progress: 0,
    },
    {
      title: "The Process",
      duration: 8668,
      progress: 0,
    },
  ],
  video: {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
};

type Props = {};

const LecturePage = (props: Props) => {
  return (
    <div className={styles.LecturePage}>
      <div className={styles.container}>
        <div className={classNames(styles.col, styles.col1)}>
          <Tutor tutor={course.tutor} />
          <TitleDescription
            title={course.title}
            description={course.description}
          />
          <Achievements data={course.achievements} />
          <Lectures data={course.lectures} />
        </div>
        <div className={classNames(styles.col, styles.col2)}>
          <CourseVideo video={course.video} />
        </div>
      </div>
    </div>
  );
};

export default LecturePage;
