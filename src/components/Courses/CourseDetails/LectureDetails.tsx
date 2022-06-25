/* eslint-disable camelcase */
import React from "react";
// import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Markdown from "markdown-to-jsx";

import { LectureEntity } from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import {
  DetailsCardWrapper,
  CardCenterWrap,
  CoursesH2,
} from "./details.styles";

import {
  ProfileWrapGroup,
  PageWrapGroup,
  PageHeading,
} from "../../../styles/common.styles";

import { PostMediaVideoPageIF } from "components/ForumPage/forum.styles";

import RightSideBar from "components/Dashboard/RightSideBar";
// import { CardTitle } from "../../ArticlesPage/ArticleDetailPage/details.styles";
import Dashboard from "components/Dashboard";

const RecentCourses = dynamic(() => import("../RecentCourses"));

function LectureDetails(props: { props: LectureEntity }) {
  // const router = useRouter();
  //   const { slug } = router.query;
  // console.log(props?.props);

  const lect = props?.props;
  const { user: user } = useAppSelector(isUser);

  return (
    <>
      <Dashboard>
        <ProfileWrapGroup
          className={user?.id ? "" : "container-loggedin"}
          // style={{ maxWidth: "1232px", margin: "auto", paddingTop: "6rem" }}
        >
          <PageWrapGroup
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "0",
            }}
          >
            <PageHeading>
              {/* {slug} - {lect?.attributes?.title} */}
            </PageHeading>
            <br />
            <PostMediaVideoPageIF
              width="560"
              height="315"
              src={lect?.attributes?.videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              // allowFullScreen
            />
            <br />
            <DetailsCardWrapper>
              {/* <CardTop>
                <CardLeftWrap>
                  <StartDateTitle>

                    <StartDate>
                    </StartDate>
                  </StartDateTitle>
                </CardLeftWrap>
              </CardTop> */}
              <CardCenterWrap>
                <CoursesH2>Lecture Notes</CoursesH2>
                <br />
                <div>
                  <Markdown>{lect?.attributes?.description as string}</Markdown>
                </div>
              </CardCenterWrap>
            </DetailsCardWrapper>
          </PageWrapGroup>
          <RightSideBar>
            <RecentCourses />
          </RightSideBar>
        </ProfileWrapGroup>
      </Dashboard>
    </>
  );
}

export default LectureDetails;
