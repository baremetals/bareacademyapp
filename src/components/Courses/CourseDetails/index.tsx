/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Markdown from "markdown-to-jsx";
import Spinner from "components/Spinner";

import { CourseEntityResponseCollection } from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import durationToString from "helpers/durationToString";


import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import {
  CardTitle,
  DetailsCardWrapper,
  CardTop,
  CardLeftWrap,
  StartDate,
  CardCenterWrap,
  // CardText,
  StartDateTitle,
  // MediaContainer,
  CoursesH2,
  CoursesTeacherWrap,
  // CoursesTeacherNameAndImageWrap,
  // CoursesTeacherName,
  // CoursesTeacherImage,
  // MediaRow,
  Level,
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

// import VideoCard from './VideoCard';
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer';
import SocialShare from 'components/SocialShare';
import NavDropDown from 'components/NavDropDown';

const RecentCourses: any = dynamic(() => import("../RecentCourses"));

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK as string);

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
  const groups = course?.attributes?.groups?.data;
  // const students = course?.attributes?.students?.data;
  const teacher = course?.attributes?.teacher?.data;
  const imageUrl = course?.attributes?.image;
  // console.log(groups![0].attributes?.slug);

  const [isloading, setIsLoading] = useState(false);
  const [socialDropdown, setSocialDropdown] = useState(false);
  const toggle: any = () => {
    setSocialDropdown(!socialDropdown);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu: any = () => {
    setIsOpen(!isOpen);
  };

  const [errorMsg, setErrorMsg] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const { user: user } = useAppSelector(isUser);
  const me = user;
  // console.log('printing me',me)

  useEffect(() => {
    if (me?.id && groups!.length > 0) {
      setIsStudent(true);
      // groups?.forEach((student) => {
      //   const usrId = student?.id;
      //   if (usrId == me?.id) {
      //     setIsStudent(true);
      //   }
      // });
    }
  }, [groups, me?.id]);

  // useEffect(() => {
  //   if (me?.id && students?.length !== 0) {
  //     students?.forEach((student) => {
  //       const usrId = student?.id;
  //       if (usrId == me?.id) {
  //         setIsStudent(true);
  //       }
  //     });
  //   }
  // }, [students, me?.id]);

  useEffect(() => {
    if (me?.id && teacher?.id === me?.id) {
      setIsTeacher(true);
    }
  }, [me?.id]);

  const handleBuy = async (orderType: string) => {
    console.log("in this biatch");
    const stripe = await stripePromise;
    setIsLoading(true);
    await axios
      .post("/api/buy", {
        data: {
          total: course?.attributes?.price,
          quantity: 1,
          course: course.id,
          imageUrl,
          isFree: course?.attributes?.isFree,
          orderType,
        },
      })
      .then((res) => {
        // console.log(res);
        if (res?.status === 200 && res?.data?.status !== 400) {
          // console.log(res?.data?.data?.id);
          if (res?.data?.data?.id === "free-purchase") {
            setIsLoading(false);
            router.push("/home/orders/success?session_id=free-purchase");
          } else {
            setIsLoading(false);
            const session = res?.data?.data?.id;
            stripe?.redirectToCheckout({
              sessionId: session,
            });
          }
        }
      })
      .catch((err) => {
        // console.log(err.response.data.error);
        setIsLoading(false);
        if (
          err?.response?.data?.error === "You previously purchased this course"
        ) {
          setMessage(err?.response?.data?.error);
          setTimeout(() => {
            setErrorMsg(true);
          }, 10000);
        } else {
          setMessage("Sorry something went wrong please try again later.");
          setTimeout(() => {
            setErrorMsg(true);
          }, 10000);
        }
      });
  };

  // const joinCourse = async () => {
  //   // console.log("testing", isStudent);
  //   // console.log(id, me?.slug, me?.id);

  //   await axios
  //     .post("/api/join", {
  //       data: {
  //         joined: true,
  //         slug: me?.slug,
  //         course: course.id,
  //         user: me?.id,
  //         publishedAt: Date.now(),
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.msg) {
  //         setMessage(res.data.msg);
  //         setErrorMsg(true);
  //       } else {
  //         setMessage("You have been successfully added to the course");
  //         setErrorMsg(true);
  //       }
  //     })
  //     .catch((_err) => {
  //       setMessage("Sorry something went wrong please try again later.");
  //       setErrorMsg(true);
  //     });
  // };

  return (
    <>
      {!user?.id && (
        <>
          <NavBar style={{ backgroundColor: "#fff" }} toggle={toggleMenu} />
          <NavDropDown toggle={toggleMenu} isOpen={isOpen} />
        </>
      )}

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
              {!me?.id && !course?.attributes?.isFree && (
                <CardTitle>{`£${course?.attributes?.price}`}</CardTitle>
              )}
              {!me?.id && course?.attributes?.isFree && (
                <CardTitle>Free</CardTitle>
              )}
              {me?.id && !isStudent && !course?.attributes?.isFree && (
                <CardTitle>{`£${course?.attributes?.price}`}</CardTitle>
              )}
              {me?.id && course?.attributes?.isFree && (
                <CardTitle>Free</CardTitle>
              )}
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
                      {durationToString(course?.attributes?.duration as number)}
                      {/* dayjs(course?.attributes?.startDate).fromNow() */}
                    </StartDate>
                  </StartDateTitle>
                  <StartDateTitle>
                    <Level>{course?.attributes?.level}</Level>
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
                {/* <div
                  dangerouslySetInnerHTML={{
                    __html: course?.attributes?.description as string,
                  }}
                ></div> */}
              </CardCenterWrap>
              <CardBottom>
                {!isTeacher && (
                  <>
                    {!me?.id && (
                      <ApplyButton
                        onClick={() => router.push("/auth/signin")}
                        type="button"
                      >
                        Buy course
                        {isloading && <Spinner />}
                      </ApplyButton>
                    )}

                    {me?.id && !isStudent && (
                      <ApplyButton
                        onClick={() => handleBuy("group")}
                        type="button"
                      >
                        Buy Now
                        {isloading && <Spinner />}
                      </ApplyButton>
                    )}

                    {me?.id && isStudent && (
                      <ApplyButton
                        onClick={() =>
                          router.push(
                            `/courses/${groups![0].attributes?.slug}/lectures`
                          )
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
                <Markdown>{course?.attributes?.notes as string}</Markdown>
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
      {!user?.id && <Footer />}
    </>
  );
}

export default CourseDetails



