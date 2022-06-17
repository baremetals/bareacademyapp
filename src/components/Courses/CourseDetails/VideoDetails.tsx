/* eslint-disable camelcase */
import React from "react";
// import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Markdown from "markdown-to-jsx";

import { CourseVideoEntity } from "generated/graphql";
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

function VideoDetails(props: { props: CourseVideoEntity }) {
// const router = useRouter();
//   const { slug } = router.query;
// console.log(props?.props);

  const video = props?.props;
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
              {/* {slug} - {video?.attributes?.title} */}
            </PageHeading>
            <br />
            <PostMediaVideoPageIF
              width="560"
              height="315"
              src={video?.attributes?.url}
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
                  <Markdown>
                    {video?.attributes?.description as string}
                  </Markdown>
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

export default VideoDetails;
