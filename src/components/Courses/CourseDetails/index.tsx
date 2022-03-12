/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useRouter } from "next/router";
import { CourseEntityResponseCollection, CourseVideoRelationResponseCollection, StudentRelationResponseCollection} from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

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
  BlogCardBody,
  BlogCard,
  BlogCardImage,
  BlogCardCategory,
  BlogCardTitle,
  PageHeading,
  CardBottom,
  ApplyButton,
  SocialDropDown,
  SocialDropDownList,
  SocialDropDownItem,
} from "../../../styles/common.styles";

import RightSideBar from "components/Dashboard/RightSideBar";
import {
  RightBarInfo,
  RightBarTitle,
} from "components/AdCards/rightside.styles";
// import { CardTitle } from "../../ArticlesPage/ArticleDetailPage/details.styles";

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
import NavBar from 'components/NavBar/NavBar';
import Footer from 'components/Footer/Footer';

interface Details {
  id: string;
  attributes: {
    duration: string;
    description: string;
    endDate: Date;
    startDate: Date;
    title: string;
    notes: string;
    slug: string;
    teacher: {
      data: {
        id: string;
        attributes: {
          tutor: {
            data: {
              id: string;
              attributes: {
                fullName: string;
                img: string;
              };
            };
          };
        };
      };
    };
    course_videos: CourseVideoRelationResponseCollection;
    students: StudentRelationResponseCollection;
  };
}

// type dataProp = {
//   props: {
//     data: {
//       data: CourseEntityResponseCollection;
//     };
//   };
// };


function CourseDetails(props: {
  props: { data: { data: { courses: CourseEntityResponseCollection }}; loading: any; error: any };
}) {
  const router = useRouter();
  // const { slug } = router.query;

  const { data, loading, error } = props.props;

  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  const allCourse = data.data;
  const course = allCourse.courses.data[0] as Details;
  const videos = course?.attributes?.course_videos?.data;
  const students = course?.attributes?.students?.data;
  // console.log(course);

  const [socialDropdown, setSocialDropdown] = useState(false);

  const [errorMsg, setErrorMsg] = useState(false);
  const [message, setMessage] = useState<string | undefined>("");
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const { user: user } = useAppSelector(isUser);
  const me = user;

  const {
    id: CourseId,
    attributes: {
      description,
      duration,
      endDate,
      startDate,
      title,
      notes,
      slug,
      teacher: {
        data: {
          // id: teacherId,
          attributes: {
            tutor: {
              data: {
                id: userId,
                attributes: { fullName, img },
              },
            },
          },
        },
      },
    },
  } = course;

  // console.log(course);

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
    if (userId === me?.id) {
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
          course: CourseId,
          users_permissions_user: me?.id,
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
  const url: string | undefined = process.env.NEXT_PUBLIC_SITE_URL;
  const shareUrl: string = `${url}${router.asPath}`;
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
                    <FacebookShareButton url={shareUrl}>
                      <FaceBook />
                      Facebook
                    </FacebookShareButton>
                  </SocialDropDownItem>
                  <SocialDropDownItem>
                    <TwitterShareButton url={shareUrl}>
                      <Twitter />
                      Twitter
                    </TwitterShareButton>
                  </SocialDropDownItem>
                  <SocialDropDownItem>
                    <LinkedinShareButton url={shareUrl}>
                      <LinkedIn />
                      LinkedIn
                    </LinkedinShareButton>
                  </SocialDropDownItem>
                  <SocialDropDownItem>
                    <WhatsappShareButton url={shareUrl}>
                      <WhatsApp />
                      Whatsapp
                    </WhatsappShareButton>
                  </SocialDropDownItem>
                  <SocialDropDownItem>
                    <EmailShareButton url={shareUrl}>
                      <Email />
                      Email
                    </EmailShareButton>
                  </SocialDropDownItem>
                </SocialDropDownList>
              </SocialDropDown>
              {title}
            </PageHeading>
            <br />
            <div>{errorMsg && <ErrorMsg>{message}</ErrorMsg>}</div>
            <CoursesTeacherWrap>
              <CardTitle>Teacher</CardTitle>
              <CoursesTeacherNameAndImageWrap>
                <CoursesTeacherImage src={img} />
                <CoursesTeacherName>{fullName}</CoursesTeacherName>
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
                      - {dayjs(startDate).format("DD.MM.YY")} to{" "}
                      {dayjs(endDate).format("DD.MM.YY")} - {duration}
                      {/* dayjs(startDate).fromNow() */}
                    </StartDate>
                  </StartDateTitle>
                  <CardTitle>Course Description</CardTitle>
                </CardLeftWrap>
              </CardTop>
              <CardCenterWrap>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
                {/* <CardText>{description}</CardText> */}
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
              <div dangerouslySetInnerHTML={{ __html: notes }}></div>
              {/* <div>{notes}</div> */}
              <br />
              <MediaRow>
                {videos?.map((vid, id: React.Key | null | undefined) => (
                  <MediaContainer key={id}>
                    <VideoCard
                      fullName={fullName}
                      date={vid?.attributes?.createdAt}
                      title={vid?.attributes?.title as string}
                      url={vid?.attributes?.video_url}
                      slug={slug}
                      description={vid?.attributes?.description as string}
                    />
                    {/* {vid?.attributes?.description as string} */}
                  </MediaContainer>
                ))}
              </MediaRow>
            </DetailsCardWrapper>
          </PageWrapGroup>
          <RightSideBar>
            <RightBarInfo
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                borderRadius: "0",
                padding: "0 0 0 1rem",
              }}
            >
              <RightBarTitle style={{ marginBottom: "1.5rem" }}>
                Recent posts
              </RightBarTitle>
              <BlogCard className="horizontal">
                <BlogCardImage
                  className="horizontal-img"
                  alt="course image"
                  src="/assets/images/blog-post.jpg"
                />
                <BlogCardBody className="horizontal-body">
                  <BlogCardCategory>3 Months</BlogCardCategory>
                  <BlogCardTitle style={{ fontSize: "1rem" }}>
                    Fullstack Javascript web Dev
                  </BlogCardTitle>
                </BlogCardBody>
              </BlogCard>
              <BlogCard className="horizontal">
                <BlogCardImage
                  className="horizontal-img"
                  alt="course image"
                  src="/assets/images/blog-post.jpg"
                />
                <BlogCardBody className="horizontal-body">
                  <BlogCardCategory>3 Months</BlogCardCategory>
                  <BlogCardTitle style={{ fontSize: "1rem" }}>
                    Fullstack Javascript web Dev
                  </BlogCardTitle>
                </BlogCardBody>
              </BlogCard>
            </RightBarInfo>
          </RightSideBar>
        </ProfileWrapGroup>
      </Dashboard>
      {!user && <Footer />}
    </>
  );
}

export default CourseDetails
