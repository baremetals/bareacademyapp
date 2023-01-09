import React, { useEffect } from "react";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import RightSideBar from "components/Dashboard/RightSideBar";
import AdCardThree from "components/AdCards/AdCardThree";
import {
  GroupEntity,
} from "generated/graphql";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { PageHeading } from "../../styles/common.styles";

import Footer from "components/Layout/Footer";
import styles from "../../styles/Home/index.module.css";
import CourseCard from "./CourseCard";
import ArticleEntry from "./ArticleEntry";
// import TakeQuizDialog from "./TakeQuizDialog";

import { useSockets } from "context/socket.context";
import LeftSideBar from 'components/Dashboard/LeftSideBar';
import {
  HomeContainer,
  HomeInnerContainer,
  InnerWrapGroup,
} from "components/Dashboard/styles";
import TopBar from 'components/Dashboard/TopBar';

type Props = {
  groups: {
    data: Array<GroupEntity>;
  };
};

const Home = (props: { groups: Props }) => {
  const { socket } = useSockets();
  const { user: user } = useAppSelector(isUser);

  const { data } = props?.groups?.groups;
  // const groups = data[0];
  // console.log(data);
  const me = user?.id;

  useEffect(() => {
    socket.emit("joinroom", { me }, (error: any, _d: any) => {
      if (error) {
        console.log(" Something went wrong please try again later.", error);
      }
    });
  }, []);

  // console.log(courses);
  return (
    <>
      <HomeContainer>
        <LeftSideBar />
        <HomeInnerContainer>
          <TopBar />
          <PageHeading>Hello, {user?.username}</PageHeading>
          <InnerWrapGroup
            className={user?.id ? "" : "container-loggedin"}
            // style={{ maxWidth: "1232px", margin: "auto", paddingTop: "6rem" }}
          >
            <div className={styles.container}>
              <div className={styles.courses}>
                {data &&
                  data.map((gr: GroupEntity, index: number) => (
                    <CourseCard withGradient={true} key={index} group={gr} />
                  ))}
              </div>
              <br />
              <div className={styles.articles}>
                <div className={styles.articlesHeading}>Latest articles</div>
                <br />
                <ArticleEntry />
              </div>
            </div>
            <RightSideBar>
              <AdCardThree />
              {/* <TakeQuizDialog /> */}
            </RightSideBar>
          </InnerWrapGroup>
          {!user && <Footer />}
        </HomeInnerContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
