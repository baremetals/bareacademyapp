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
  Reviews,
  QNA,
  Chat,
} from "components/LecturePage";
import Dashboard from "components/Dashboard";
import course from "components/LecturePage/assets/course.json";

type Props = {};

const LecturePage = (props: Props) => {
  const [activeLecture, setActiveLecture] = useState(0);

  return (
    <Dashboard>
      <div className={styles.LecturePage}>
        <div className={styles.container}>
          <div className={classNames(styles.col, styles.col1)}>
            <Tutor tutor={course.tutor} />
            <TitleDescription
              title={course.title}
              description={course.description}
            />
            <Achievements data={course.achievements} />
            <Lectures
              data={course.lectures}
              openLecture={activeLecture}
              setOpenLecture={setActiveLecture}
            />
          </div>
          <div className={classNames(styles.col, styles.col2)}>
            {course.lectures[activeLecture] && (
              <>
                <CourseVideo video={course.lectures[activeLecture].video} />
                <LectureTabsContainer activeTab={0}>
                  <LectureTab title="Description">
                    <LectureDescription
                      notes={course.lectures[activeLecture].notes}
                    />
                  </LectureTab>
                  <LectureTab title="Reviews">
                    <Reviews data={course.lectures[activeLecture].reviews} />
                  </LectureTab>
                  <LectureTab title="Group chat">
                    <Chat courseId={course.lectures[activeLecture].id} />
                  </LectureTab>
                  <LectureTab title="Q&A">
                    <QNA data={course.lectures[activeLecture].qna} />
                  </LectureTab>
                </LectureTabsContainer>
              </>
            )}
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default LecturePage;
