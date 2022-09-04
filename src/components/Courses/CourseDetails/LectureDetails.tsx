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

import { GroupEntity, Teacher } from "generated/graphql";
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


function LectureDetails(props: { props: GroupEntity }) {
  const router = useRouter();
  const { socket } = useSockets();
  const { id, slug } = router.query;
  const lect = props?.props?.attributes?.lectures;
  const course = props?.props?.attributes?.course?.data
  const { user: user } = useAppSelector(isUser);
  const teacher = course?.attributes?.teacher?.data;
  const lecture = lect || [];
  const activeLecture = parseInt(id as string);
  const [activeLectures, setActiveLectures] = useState(0);
  // console.log(activeLecture);
  // console.log(props?.props);

  useEffect(() => {
    socket.emit("joingroup", { slug }, (error: any, d: any) => {
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
                  title={course?.attributes?.title as string}
                  description={course?.attributes?.introduction as string}
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
                    <Reviews id={course?.id as string} />
                  </LectureTab>
                  <LectureTab title="Group chat">
                    <Chat groupId={props?.props?.id as string} />
                  </LectureTab>
                  <LectureTab title="Q&A">
                    <QNA id={props?.props?.id as string} />
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
