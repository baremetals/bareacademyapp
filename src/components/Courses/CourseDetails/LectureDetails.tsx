/* eslint-disable camelcase */
import React, { useState} from "react";
// import { useRouter } from "next/router";
// import dynamic from "next/dynamic";
// import Markdown from "markdown-to-jsx";
import styles from "styles/LecturePage/index.module.css";
import classNames from "classnames";
import {
  TitleDescription,
  Tutor,
  // Achievements,
  Lectures,
  CourseVideo,
  LectureTabsContainer,
  LectureTab,
  LectureDescription,
  Reviews,
  QNA,
  Chat,
} from "components/LecturePage";

import { LectureEntity } from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);



import {
  ProfileWrapGroup,
} from "../../../styles/common.styles";



import Dashboard from "components/Dashboard";

const course = {
  id: "12d3fd35dsfs21",

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
        "Forever young, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
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

  reviews: [
    {
      user: {
        name: "John Doe",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        url: "#",
      },
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
      rating: 5,
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
      rating: 2,
      time: "2022-07-12T16:44:04.478Z",
    },
  ],
  qna: [
    {
      user: {
        name: "John Doe",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        url: "#",
      },
      title: "How to use the app?",
      question:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
      time: "2022-07-10T20:55:43.537Z",
      comments: [],
      // votes: 0,
      // voted: false,
      url: "#",
    },
    {
      user: {
        name: "Jane Doe",
        img: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        url: "#",
      },
      title: "How to install the app?",
      question:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit, nostrum quos. Ut aut, sed modi iste distinctio quam unde suscipit culpa aliquam aliquid dolore fugiat doloremque repellat sit recusandae magnam?",
      time: "2022-07-10T20:55:43.537Z",
      comments: [],
      // votes: 20,
      // voted: true,
      url: "#",
    },
  ],
};

function LectureDetails(props: { props: LectureEntity }) {
  // const activeLecture = useState(1)[0];
  // const router = useRouter();
  //   const { slug } = router.query;
  
  const lect = props?.props;
  const { user: user } = useAppSelector(isUser);
  // console.log(lect?.attributes?.lecture);
  const teacher = lect?.attributes?.teacher?.data;
  const lecture = lect?.attributes?.lecture;

  const [activeLecture, setActiveLecture] = useState([0])[0];
  // console.log(activeLecture);
  // console.log(lecture[0]);

  const makeLectureActive = () => {
    setActiveLecture()
  }

  return (
    <>
      <Dashboard>
        <ProfileWrapGroup
          className={user?.id ? "" : "container-loggedin"}
          // style={{ maxWidth: "1232px", margin: "auto", paddingTop: "6rem" }}
        >
          <div className={styles.LecturePage}>
            <div className={styles.container}>
              <div className={classNames(styles.col, styles.col1)}>
                <Tutor tutor={teacher?.attributes} />
                <TitleDescription
                  title={lect?.attributes?.title}
                  description={lect?.attributes?.introduction}
                />
                {/* <Achievements data={course.achievements} /> */}
                <div>
                  <Lectures data={lecture} />
                </div>
              </div>
              <div className={classNames(styles.col, styles.col2)}>
                <CourseVideo
                  // video={course.video}
                  video={lecture[activeLecture].video}
                />
                <LectureTabsContainer activeTab={0}>
                  <LectureTab title="Description">
                    <LectureDescription notes={lecture[activeLecture].notes} />
                  </LectureTab>
                  <LectureTab title="Reviews">
                    <Reviews data={course.reviews} />
                  </LectureTab>
                  <LectureTab title="Group chat">
                    <Chat courseId={course.id} />
                  </LectureTab>
                  <LectureTab title="Q&A">
                    <QNA data={course.qna} />
                  </LectureTab>
                </LectureTabsContainer>
              </div>
            </div>
          </div>
        </ProfileWrapGroup>
      </Dashboard>
    </>
  );
}

export default LectureDetails;
