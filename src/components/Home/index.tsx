import React from 'react'
import { BlogCardBody, BlogCardImage, BlogCardTitle, PageWrapper } from 'styles/common.styles'
import Dashboard from '../Dashboard'

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import RightSideBar from 'components/Dashboard/RightSideBar';
import AdCardThree from 'components/AdCards/AdCardThree';
import { CourseEntityResponseCollection } from 'generated/graphql';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import {
  // PostCard,
  BlogCard,
  // CardTitle,
  CardDescription,
  // CardImage,
  CardDuration,
  CardStartDate,
  // CardBody,
  PageHeading,
  PageWrapGroup,
  ProfileWrapGroup,
  // PageWrapper,
} from "../../styles/common.styles";
import Link from 'next/link';
import Footer from 'components/Footer/Footer';

const Home = (props: {
  props: { data: { courses: CourseEntityResponseCollection } };
}) => {
  const { user: user } = useAppSelector(isUser);
  const { data } = props.props;

  const courses = data.courses.data;
  // console.log(courses);
  return (
    <>
      <Dashboard>
        <PageHeading>@{user?.username} Dashboard</PageHeading>
        <ProfileWrapGroup
          // style={{ maxWidth: "1232px", margin: "auto", paddingTop: "6rem" }}
        >
          <PageWrapGroup
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "0",
            }}
          >
            <PageWrapper>
              {courses &&
                courses.map((course, id) => (
                  <BlogCard key={id}>
                    <Link href={`/courses/${course?.attributes?.slug}`}>
                      <BlogCardImage
                        alt="course image"
                        src={course?.attributes?.image?.data?.attributes?.url}
                      />
                    </Link>
                    <BlogCardBody>
                      <CardDuration>
                        Duration - {course?.attributes?.duration}
                      </CardDuration>
                      <BlogCardTitle>
                        <Link href={`/courses/${course?.attributes?.slug}`}>
                          {course?.attributes?.title}
                        </Link>
                      </BlogCardTitle>
                      <CardDescription style={{marginBottom: '0'}}>
                        <CardStartDate>
                          Date -{" "}
                          {dayjs(course?.attributes?.startDate).fromNow()}
                        </CardStartDate>
                      </CardDescription>
                    </BlogCardBody>
                  </BlogCard>
                ))}
            </PageWrapper>
          </PageWrapGroup>

          <RightSideBar>
            <AdCardThree />
          </RightSideBar>
        </ProfileWrapGroup>
      </Dashboard>
      {!user && <Footer />}
    </>
  );
};

export default Home
