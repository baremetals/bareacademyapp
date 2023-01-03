import React, { useState } from 'react'
import {
  CardTitle,
  DetailsCardWrapper,
  CardTop,
  CardLeftWrap,
  StartDate,
  CardCenterWrap,
  StartDateTitle,
  CoursesH2,
  CoursesTeacherWrap,
  Level,
  ApplyButton,
  CardBottom,
} from "./details.styles";
import Dashboard from 'components/Dashboard';
import { PageHeading, PageWrapGroup, ProfileWrapGroup } from 'styles/common.styles';
import SocialShare from 'components/SocialShare';
import dynamic from 'next/dynamic';
import { ErrorMsg } from 'components/Input';
import durationToString from 'helpers/durationToString';
import Markdown from 'markdown-to-jsx';
import Spinner from 'components/Spinner';
import RightSideBar from 'components/Dashboard/RightSideBar';
import { useRouter } from 'next/router';
const RecentCourses: any = dynamic(() => import("../RecentCourses"));


type TCourseDetailsTemplate = {
  id: string;
  me: string;
  title: string;
  isFree: boolean;
  isStudent: boolean;
  price: number;
  errorMsg: boolean;
  message: string;
  duration: number;
  level: string;
  description: string;
  isTeacher: boolean;
  notes: string;
  isloading: boolean;
  groupSlug: string;
  handleBuy: (orderType: string) => void;
};
export const CourseDetailsTemplate = ({
  id,
  me,
  title,
  isFree,
  isStudent,
  price,
  errorMsg,
  message,
  duration,
  level,
  description,
  isTeacher,
  notes,
  groupSlug,
  isloading,
  handleBuy,
}: TCourseDetailsTemplate) => {
  const router = useRouter();
  const [socialDropdown, setSocialDropdown] = useState(false);
  const toggle: any = () => {
    setSocialDropdown(!socialDropdown);
  };
  return (
    <Dashboard>
      <ProfileWrapGroup
        className={id ? "" : "container-loggedin"}
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
            <SocialShare
              pathname={router.asPath}
              toggle={toggle}
              socialDropdown={socialDropdown}
            />
            {title}
          </PageHeading>
          <br />
          <div>{errorMsg && <ErrorMsg>{message}</ErrorMsg>}</div>
          <CoursesTeacherWrap>
            {!me && !isFree && <CardTitle>{`£${price}`}</CardTitle>}
            {!me && isFree && <CardTitle>Free</CardTitle>}
            {me && !isStudent && !isFree && (
              <CardTitle>{`£${price}`}</CardTitle>
            )}
            {me && isFree && <CardTitle>Free</CardTitle>}
            {/* <CoursesTeacherNameAndImageWrap>
                <CoursesTeacherImage src={teacher?.attributes?.img as string} />
                <CoursesTeacherName>
                  {teacher?.attributes?.fullName}
                </CoursesTeacherName>
              </CoursesTeacherNameAndImageWrap> */}
          </CoursesTeacherWrap>
          <br />
          <DetailsCardWrapper>
            <CardTop>
              <CardLeftWrap>
                <StartDateTitle>
                  {/* Price{" "} */}
                  <StartDate>
                    {" "}
                    {/* -{" "}
                      {dayjs(course?.attributes?.startDate).format(
                        "DD.MM.YY"
                      )}{" "}
                      to {dayjs(course?.attributes?.endDate).format("DD.MM.YY")}{" "}
                      -  */}
                    {durationToString(duration)}
                    {/* dayjs(course?.attributes?.startDate).fromNow() */}
                  </StartDate>
                </StartDateTitle>
                <StartDateTitle>
                  <Level>{level}</Level>
                </StartDateTitle>
                <CardTitle>Course Description</CardTitle>
              </CardLeftWrap>
            </CardTop>
            <CardCenterWrap>
              <div>
                <Markdown>{description}</Markdown>
              </div>
              {/* <div
                  dangerouslySetInnerHTML={{
                    __html: course?.attributes?.description as string,
                  }}
                ></div> */}
            </CardCenterWrap>
            <CardBottom>
              {!isTeacher && (
                <>
                  {!me && (
                    <ApplyButton
                      onClick={() => router.push("/auth/signin")}
                      type="button"
                    >
                      Buy course
                      {isloading && <Spinner />}
                    </ApplyButton>
                  )}

                  {me && !isStudent && (
                    <ApplyButton
                      onClick={() => handleBuy("group")}
                      type="button"
                    >
                      Buy Now
                      {isloading && <Spinner />}
                    </ApplyButton>
                  )}

                  {me && isStudent && (
                    <ApplyButton
                      onClick={() =>
                        router.push(`/courses/${groupSlug}/lectures`)
                      }
                      type="button"
                      style={{ backgroundColor: "red" }}
                    >
                      My course
                      {isloading && <Spinner />}
                    </ApplyButton>
                  )}
                  {/* {errorMsg && <ErrorMsg>{message}</ErrorMsg>} */}

                  {/* <ApplyButton
                      onClick={() => handleBuy("group")}
                      type="button"
                    >
                      Buy Now
                    </ApplyButton> */}
                </>
              )}
            </CardBottom>
            <br />
            <CoursesH2>Additional Notes</CoursesH2>
            <div>
              <Markdown>{notes}</Markdown>
            </div>
            {/* <div
                dangerouslySetInnerHTML={{
                  __html: course?.attributes?.notes as string,
                }}
              ></div> */}
            <br />
            {/* {me?.id && isStudent && (
                <VideoCard
                  courseId={course?.id as string}
                  slug={course?.attributes?.slug as string}
                />
              )} */}
          </DetailsCardWrapper>
        </PageWrapGroup>
        <RightSideBar>
          <RecentCourses />
        </RightSideBar>
      </ProfileWrapGroup>
    </Dashboard>
  );
};
