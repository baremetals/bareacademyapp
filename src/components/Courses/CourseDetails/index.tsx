import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { CourseResult, Maybe, useJoinOrLeaveCourseMutation, User } from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import {
  CardTitle,
  DetailsCardWrapper,
  CardTop,
  CardLeftWrap,
  StartDate,
  CardCenterWrap,
  CardText,
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
  PageHeading,
  CardBottom,
  ApplyButton,
  SocialDropDown,
  SocialDropDownList,
  SocialDropDownItem,
} from "../../../styles/common.styles";

import { SocialDropDownIcon } from "../../../../public/assets/icons/SocialDropDownIcon";
import { FaceBook } from "../../../../public/assets/icons/FaceBook";
import { Twitter } from "../../../../public/assets/icons/Twitter";
import { LinkedIn } from "../../../../public/assets/icons/LinkedIn";
import { WhatsApp } from "../../../../public/assets/icons/WhatsApp";
import { Email } from "../../../../public/assets/icons/Email";

import { ErrorMsg } from 'components/Input';
import Dashboard from 'components/Dashboard';


import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import VideoCard from './VideoCard';

interface Details {
  id: string;
  description: string;
  duration: string;
  endDate: string;
  startDate: string;
  title: string;
  students: Array<Student>;
  teacher: User;
  notes: string;
  videos: Array<{
    id: string;
    title: string;
    url: string;
    description: string;
    createdOn: string;
  }>;
}

interface Student {
  id: string;
  username: string;
  user: User
  
}

type dataProp = {
  data: {
    getCourseBySlug: Maybe<CourseResult> | undefined;
  };
};

function CourseDetails(props: {
  props: { data: dataProp; loading: boolean; error: any };
}) {
  const router = useRouter();
  // const { slug } = router.query;
  
  const { data, loading, error } = props.props;
  // console.log(data);

  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  const course = data.data.getCourseBySlug;

  const [socialDropdown, setSocialDropdown] = useState(false);
  const [join] = useJoinOrLeaveCourseMutation();
  const [errorMsg, setErrorMsg] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const { user: user } = useAppSelector(isUser);
  const me = user;

  const {
    id,
    description,
    endDate,
    startDate,
    title,
    notes,
    students,
    teacher,
    videos,
  } = course as Details;

  // console.log(videos)

  useEffect(() => {
    if (students.length !== 0) {
      students.forEach((student) => {
        if (student.user?.id === me?.id) {
          setIsStudent(true);
        }
      });
    }
  }, [students, me?.id]);

  useEffect(() => {
    if (teacher.id === me?.id) {
      setIsTeacher(true);
    }
  }, [me?.id]);

  if (!data || loading) {
    return <div>loading...</div>;
  }

  const joinCourse = async () => {
    console.log("testing", isStudent);

    try {
      const response = await join({
        variables: {
          courseId: id as string,
          join: isStudent ? false : true,
        },
      });
      console.log("re-testing", isStudent);
      const msg = response.data?.joinOrLeaveCourse;
      setMessage(msg);
      setErrorMsg(true);
      console.log(response.data?.joinOrLeaveCourse);
    } catch (err) {
      console.log("error:", err);
    }
  };

  const url: string = `http://localhost:3000${router.asPath}`;
  return (
    <Dashboard>
      <PageHeading>
        <SocialDropDown>
          <span onClick={() => setSocialDropdown(!socialDropdown)}>
            <SocialDropDownIcon />
            Share
          </span>
          <SocialDropDownList
            className={`${socialDropdown ? "opened" : ""}`}
            onClick={() => setSocialDropdown(!socialDropdown)}
          >
            <SocialDropDownItem>
              <FacebookShareButton url={url}>
                <FaceBook />
                Facebook
              </FacebookShareButton>
            </SocialDropDownItem>
            <SocialDropDownItem>
              <TwitterShareButton url={url}>
                <Twitter />
                Twitter
              </TwitterShareButton>
            </SocialDropDownItem>
            <SocialDropDownItem>
              <LinkedinShareButton url={url}>
                <LinkedIn />
                LinkedIn
              </LinkedinShareButton>
            </SocialDropDownItem>
            <SocialDropDownItem>
              <WhatsappShareButton url={url}>
                <WhatsApp />
                Whatsapp
              </WhatsappShareButton>
            </SocialDropDownItem>
            <SocialDropDownItem>
              <EmailShareButton url={url}>
                <Email />
                Email
              </EmailShareButton>
            </SocialDropDownItem>
          </SocialDropDownList>
        </SocialDropDown>
        {title}
      </PageHeading>
      <DetailsCardWrapper>
        <CardTop>
          <CardLeftWrap>
            <StartDateTitle>
              Start Date{" "}
              <StartDate>
                {" "}
                - {startDate} to {endDate}
              </StartDate>
            </StartDateTitle>
            <CardTitle>Course Description</CardTitle>
          </CardLeftWrap>
        </CardTop>
        <CardCenterWrap>
          <CardText>{description}</CardText>
        </CardCenterWrap>
        <CardBottom>
          {!isTeacher && (
            <>
              {isStudent ? (
                <ApplyButton
                  onClick={joinCourse}
                  style={{ backgroundColor: "red" }}
                  type="button"
                  // disabled={true}
                >
                  applied
                </ApplyButton>
              ) : (
                <ApplyButton onClick={joinCourse} type="button">
                  apply
                </ApplyButton>
              )}
              {errorMsg && <ErrorMsg>{message}</ErrorMsg>}
            </>
          )}
        </CardBottom>
        <CoursesTeacherWrap>
          <CardTitle>Teacher</CardTitle>
          <CoursesTeacherNameAndImageWrap>
            <CoursesTeacherImage src={teacher.profileImage} />
            <CoursesTeacherName>{teacher.fullName}</CoursesTeacherName>
          </CoursesTeacherNameAndImageWrap>
        </CoursesTeacherWrap>
        <CoursesH2>Additional Notes</CoursesH2>
        <div>{notes}</div>
        <MediaRow>
          {videos.map((vid, id) => {
            <MediaContainer key={id}>
              <VideoCard
                fullName={teacher.fullName}
                date={vid.createdOn}
                title={vid.title}
                url={vid.url}
                userIdSlug={teacher.userIdSlug as string}
                description={vid.description}
              />
            </MediaContainer>;
          })}
        </MediaRow>
      </DetailsCardWrapper>
    </Dashboard>
  );
}

export default CourseDetails
