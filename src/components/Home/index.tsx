import React from 'react'
import {  } from 'styles/common.styles'
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
  PostCard,
  CardTitle,
  CardDescription,
  CardImage,
  CardDuration,
  CardStartDate,
  CardBody,
  PageHeading,
  PageWrapGroup,
  ProfileWrapGroup,
} from "../../styles/common.styles";
import Link from 'next/link';

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
        <ProfileWrapGroup>
          <PageWrapGroup>
            {courses &&
              courses.map((course, id) => (
                <PostCard key={id}>
                  <Link href={`/courses/${course?.attributes?.slug}`}>
                    <CardImage
                      alt="course image"
                      src={course?.attributes?.image?.data?.attributes?.url}
                    />
                  </Link>
                  <CardBody>
                    <CardDuration>
                      Duration - {course?.attributes?.duration}
                    </CardDuration>
                    <CardTitle>
                      <Link href={`/courses/${course?.attributes?.slug}`}>
                        {course?.attributes?.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      <CardStartDate>
                        Date - {dayjs(course?.attributes?.startDate).fromNow()}
                      </CardStartDate>
                    </CardDescription>
                  </CardBody>
                </PostCard>
              ))}
          </PageWrapGroup>

          <RightSideBar>
            <AdCardThree />
          </RightSideBar>
        </ProfileWrapGroup>
      </Dashboard>
    </>
  );
};

export default Home
