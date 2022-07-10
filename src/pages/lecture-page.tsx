import React, { useState } from "react";
import styles from "../styles/LecturePage/index.module.css";
import classNames from "classnames";
import {
  TitleDescription,
  Tutor,
  Achievements,
  Lectures,
  CourseVideo,
  LectureTabsContainer,
  LectureTab,
  LectureDescription,
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
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
    },
    {
      title: "Getting started",
      duration: 595,
      progress: 0.75,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
    },
    {
      title: "The Illustration",
      duration: 3768,
      progress: 0,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
    },
    {
      title: "The Conception",
      duration: 5268,
      progress: 0,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
    },
    {
      title: "The Process",
      duration: 8668,
      progress: 0,
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
    },
  ],
  video: {
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  reviews: [
    {
      user: {
        name: "John Doe",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        url: "#",
      },
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
      rating: 4,
      time: "2022-07-10T20:55:43.537Z",
    },
    {
      user: {
        name: "Jane Doe",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        url: "#",
      },
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
      rating: 5,
      time: "2022-07-09T20:55:43.537Z",
    },
  ],
};

type Props = {};

const LecturePage = (props: Props) => {
  const [activeLecture, setActiveLecture] = useState(0);

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
          <LectureTabsContainer activeTab={3}>
            <LectureTab title="Description">
              <LectureDescription
                description={course.lectures[activeLecture].description}
              />
            </LectureTab>
            <LectureTab title="Reviews">Reviews</LectureTab>
            <LectureTab title="Group chat">Group chat</LectureTab>
            <LectureTab title="Q&A">Q&A</LectureTab>
          </LectureTabsContainer>
        </div>
      </div>
    </div>
  );
};

export default LecturePage;
