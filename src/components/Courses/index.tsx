import React from "react";
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
import Footer from "components/Footer/Footer";
dayjs.extend(relativeTime);


function CoursesPage() {
  const { user: user } = useAppSelector(isUser);
  const courses: any = useAppSelector(theCourses);
  // console.log(courses);
  return (
    <>
      {!user?.id && <NavBar style={{ backgroundColor: "#fff" }} />}
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
            <PageHeading>Courses</PageHeading>
            <PageWrapper className="blog-wrapper">
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
                        <CardDuration>
                          {" "}
                          {course?.attributes?.duration}
                        </CardDuration>
                        <BlogCardTitle>
                          <Link href={`/courses/${course?.attributes?.slug}`}>
                            {course?.attributes?.title}
                          </Link>
                        </BlogCardTitle>
                        <CardDescription>
                          {course?.attributes?.description?.slice(0, 80)}
                        </CardDescription>
                        <CardBottom>
                          <CardStartDate>
                            {dayjs(course?.attributes?.startDate).fromNow()}
                          </CardStartDate>
                          <Link href={`/courses/${course?.attributes?.slug}`}>
                            <ApplyButton>apply</ApplyButton>
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
