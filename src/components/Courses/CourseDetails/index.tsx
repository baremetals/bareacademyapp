/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { CourseEntityResponseCollection } from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import Markdown from "markdown-to-jsx";

import {
  CardTitle,
  DetailsCardWrapper,
  CardTop,
  CardLeftWrap,
  StartDate,
  CardCenterWrap,
  // CardText,
  StartDateTitle,
  MediaContainer,
  CoursesH2,
  CoursesTeacherWrap,
  CoursesTeacherNameAndImageWrap,
  CoursesTeacherName,
  CoursesTeacherImage,
  MediaRow,
} from "./details.styles";

import {
  ProfileWrapGroup,
  PageWrapGroup,
  PageHeading,
  CardBottom,
  ApplyButton,
} from "../../../styles/common.styles";

import RightSideBar from "components/Dashboard/RightSideBar";
// import { CardTitle } from "../../ArticlesPage/ArticleDetailPage/details.styles";


import { ErrorMsg } from 'components/Input';
import Dashboard from 'components/Dashboard';

import VideoCard from './VideoCard';
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';
import SocialShare from 'components/SocialShare';

const RecentCourses = dynamic(() => import("../RecentCourses"));

function CourseDetails(props: {
  props: {
    data: { courses: CourseEntityResponseCollection };
    loading: boolean;
    error: any;
  };
}) {
  const router = useRouter();
  // const { slug } = router.query;

  const { data, loading, error } = props.props;

  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  
  const course = data?.courses?.data[0];
  const videos = course?.attributes?.videos?.data;
  const students = course?.attributes?.students?.data;
  const teacher = course?.attributes?.teacher?.data?.attributes?.tutor?.data;
  // console.log(course?.attributes);

  const [socialDropdown, setSocialDropdown] = useState(false);
  const toggle: any = () => {
    setSocialDropdown(!socialDropdown);
  };

  const [errorMsg, setErrorMsg] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const { user: user } = useAppSelector(isUser);
  const me = user;


  useEffect(() => {
    if (students?.length !== 0) {
      students?.forEach(
        (student) => {
          const usrId = student?.attributes?.user?.data?.id;
          // console.log(student)
          if (usrId === me?.id) {
            setIsStudent(true);
          }
        }
      );
    }
  }, [students, me?.id]);

  useEffect(() => {
    if (teacher?.id === me?.id) {
      setIsTeacher(true);
    }
  }, [me?.id]);

  const joinCourse = async () => {
    // console.log("testing", isStudent);
    // console.log(id, me?.slug, me?.id);

    await axios
      .post("/api/join", {
        data: {
          joined: true,
          slug: me?.slug,
          course: course.id,
          user: me?.id,
          publishedAt: Date.now(),
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data.msg) {
          setMessage(res.data.msg);
          setErrorMsg(true);
        } else {
          setMessage("You have been successfully added to the course");
          setErrorMsg(true);
        }
      })
      .catch((err) => {
        setMessage("Sorry something went wrong please try again later.");
        setErrorMsg(true);
      });
  };
  return (
    <>
      {!user && <NavBar style={{ backgroundColor: "#fff" }} />}

      <Dashboard>
        <ProfileWrapGroup
          style={{ maxWidth: "1232px", margin: "auto", paddingTop: "6rem" }}
        >
          <PageWrapGroup
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "0",
            }}
          >
            <PageHeading>
              <SocialShare
                pathname={router.asPath}
                toggle={toggle}
                socialDropdown={socialDropdown}
              />
              {course?.attributes?.title}
            </PageHeading>
            <br />
            <div>{errorMsg && <ErrorMsg>{message}</ErrorMsg>}</div>
            <CoursesTeacherWrap>
              <CardTitle>Teacher</CardTitle>
              <CoursesTeacherNameAndImageWrap>
                <CoursesTeacherImage src={teacher?.attributes?.img as string} />
                <CoursesTeacherName>
                  {teacher?.attributes?.fullName}
                </CoursesTeacherName>
              </CoursesTeacherNameAndImageWrap>
            </CoursesTeacherWrap>
            <br />
            <DetailsCardWrapper>
              <CardTop>
                <CardLeftWrap>
                  <StartDateTitle>
                    Start Date{" "}
                    <StartDate>
                      {" "}
                      -{" "}
                      {dayjs(course?.attributes?.startDate).format(
                        "DD.MM.YY"
                      )}{" "}
                      to {dayjs(course?.attributes?.endDate).format("DD.MM.YY")}{" "}
                      - {course?.attributes?.duration}
                      {/* dayjs(course?.attributes?.startDate).fromNow() */}
                    </StartDate>
                  </StartDateTitle>
                  <CardTitle>Course Description</CardTitle>
                </CardLeftWrap>
              </CardTop>
              <CardCenterWrap>
                <div>
                  <Markdown>
                    {course?.attributes?.description as string}
                  </Markdown>
                </div>
              </CardCenterWrap>
              <CardBottom>
                {!isTeacher && (
                  <>
                    {isStudent ? (
                      <ApplyButton
                        onClick={joinCourse}
                        style={{ backgroundColor: "red" }}
                        type="button"
                        disabled={true}
                      >
                        applied
                      </ApplyButton>
                    ) : (
                      <ApplyButton onClick={joinCourse} type="button">
                        apply
                      </ApplyButton>
                    )}
                    {/* {errorMsg && <ErrorMsg>{message}</ErrorMsg>} */}
                  </>
                )}
              </CardBottom>
              <br />
              <CoursesH2>Additional Notes</CoursesH2>
              <div>
                <Markdown>{course?.attributes?.notes as string}</Markdown>
              </div>
              <br />
              <MediaRow>
                {videos?.map((vid, id: React.Key | null | undefined) => (
                  <MediaContainer key={id}>
                    <VideoCard
                      fullName={teacher?.attributes?.fullName as string}
                      date={vid?.attributes?.createdAt}
                      title={vid?.attributes?.title as string}
                      url={vid?.attributes?.url}
                      slug={course?.attributes?.slug as string}
                      description={vid?.attributes?.description as string}
                    />
                    {/* {vid?.attributes?.description as string} */}
                  </MediaContainer>
                ))}
              </MediaRow>
            </DetailsCardWrapper>
          </PageWrapGroup>
          <RightSideBar>
            <RecentCourses />
          </RightSideBar>
        </ProfileWrapGroup>
      </Dashboard>
      {!user && <Footer />}
    </>
  );
}

export default CourseDetails
