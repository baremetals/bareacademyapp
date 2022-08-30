/* eslint-disable camelcase */
import React, { useEffect, useState} from "react";
import { useRouter } from "next/router";
import { useSockets } from "context/socket.context";
// import dynamic from "next/dynamic";
// import Markdown from "markdown-to-jsx";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import styles from "styles/LecturePage/index.module.css";
import classNames from "classnames";

import { CourseEntity, Teacher } from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
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
import {
  ProfileWrapGroup,
} from "../../../styles/common.styles";
import Dashboard from "components/Dashboard";


function LectureDetails(props: { props: CourseEntity }) {
  const router = useRouter();
  const { socket } = useSockets();
  const { id, slug } = router.query;
  const lect = props?.props;
  const { user: user } = useAppSelector(isUser);
  const teacher = lect?.attributes?.teacher?.data;
  const lecture = lect?.attributes?.lecture || [];
  const activeLecture =  parseInt(id as string)
  const [activeLectures, setActiveLectures] = useState(0);
  // console.log(activeLecture);
  // console.log(teacher);

  useEffect(() => {
    socket.emit("joincourseroom", {slug}, (error: any, d: any) => {
      if (error) {
        console.log(" Something went wrong please try again later.", error);
      }
    });
  }, []);

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
                <Tutor tutor={teacher?.attributes as Teacher} />
                <TitleDescription
                  title={lect?.attributes?.title as string}
                  description={lect?.attributes?.introduction as string}
                />
                {/* <Achievements data={[]} /> */}
                <div>
                  <Lectures
                    data={lecture}
                    openLecture={activeLectures}
                    setOpenLecture={setActiveLectures}
                  />
                </div>
              </div>
              <div className={classNames(styles.col, styles.col2)}>
                <CourseVideo
                  video={lecture[id ? activeLecture : 0]?.video as string}
                />
                <LectureTabsContainer activeTab={0}>
                  <LectureTab title="Description">
                    <LectureDescription
                      notes={lecture[id ? activeLecture : 0]?.notes as string}
                    />
                  </LectureTab>
                  <LectureTab title="Reviews">
                    <Reviews id={lect?.id as string} />
                  </LectureTab>
                  <LectureTab title="Group chat">
                    <Chat courseId={lect?.id as string} />
                  </LectureTab>
                  <LectureTab title="Q&A">
                    <QNA id={lect?.id as string} />
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
