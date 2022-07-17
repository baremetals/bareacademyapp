import React, { useState } from "react";
import Link from "next/link";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import { theCourses } from "features/courses/selectors";
import Dashboard from 'components/Dashboard';
import {
  BlogCard,
  BlogCardTitle,
  BlogCardImage,
  CardDescription,
  CardDuration,
  CardBottom,
  CardPrice,
  CardStartDate,
  ApplyButton,
  BlogCardBody,
  PageHeading,
  PageWrapper,
  ProfileWrapGroup,
  PageWrapGroup
} from "../../styles/common.styles";



import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import NavBar from "components/NavBar/NavBar";
// import { PageContainer } from "components/ErrorPage";
// import { InnerContainer } from "components/EmailTemplate/style.template";
import Footer from "components/Footer";
import NavDropDown from 'components/NavDropDown';
dayjs.extend(relativeTime);

type des = {
  desc: string | undefined;
};

function CoursesPage({ desc }: des) {
  const { user: user } = useAppSelector(isUser);
  const courses: any = useAppSelector(theCourses);
  // console.log(courses);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu: any = () => {
    setIsOpen(!isOpen);
  };

  console.log(desc)

  

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
            <PageHeading>Courses</PageHeading>
            <div><p>{desc as string}</p></div>
            <div></div>
            <PageWrapper className={!user?.id ? "" : "blog-wrapper"}>
              {!courses ? (
                <div>loading...</div>
              ) : (
                courses?.data?.map((course: any, id: string) =>
                  !course ? null : (
                    <BlogCard key={id}>
                      <Link href={`/courses/${course?.attributes?.slug}`}>
                        <BlogCardImage
                          alt="course image"
                          src={course?.attributes?.image?.data?.attributes?.url}
                        />
                      </Link>
                      <BlogCardBody>
                        <CardBottom>
                          <CardDuration>
                            {" "}
                            {/* {course?.attributes?.duration} */}
                            {course?.attributes?.level}
                          </CardDuration>
                          <CardPrice>
                            {" "}
                            {course?.attributes?.isFree
                              ? "Free"
                              : `£${course?.attributes?.price}`}
                          </CardPrice>
                        </CardBottom>

                        <BlogCardTitle>
                          <Link href={`/courses/${course?.attributes?.slug}`}>
                            {course?.attributes?.title}
                          </Link>
                        </BlogCardTitle>
                        <CardDescription>
                          {course?.attributes?.introduction?.slice(0, 80)}...
                        </CardDescription>
                        <CardBottom>
                          <CardStartDate>
                            {/* {dayjs(course?.attributes?.startDate).fromNow()} */}
                            {/* {course?.attributes?.level} */}
                            {course?.attributes?.duration}
                          </CardStartDate>
                          <Link href={`/courses/${course?.attributes?.slug}`}>
                            <ApplyButton>Buy course</ApplyButton>
                          </Link>
                        </CardBottom>
                      </BlogCardBody>
                    </BlogCard>
                  )
                )
              )}
            </PageWrapper>
          </PageWrapGroup>
        </ProfileWrapGroup>
      </Dashboard>
      {!user?.id && <Footer />}
    </>
  );
}

export default CoursesPage;
