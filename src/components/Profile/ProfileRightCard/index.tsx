import React from 'react'
import styled from 'styled-components';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import {
  CourseEntity,
  useGetCoursesByUserIdQuery,
} from "generated/graphql";

import CoursesTaken from "../CoursesTaken";
import { ErrorMsg } from 'components/Input';

export const MainContainer = styled.aside`
  flex: 3.5;
`;

export const MainWrapper = styled.div`
  padding: 0;
`;

const RightBarTitle = styled.h4`
  letter-spacing: 0.02em;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.5;
`;

const RightBarInfo = styled.div`
  margin-bottom: 0.875rem;
  padding: 1.875rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
  border-radius: 1rem;
`;

const RightBarInfoItem = styled.div`
  display: flex;
  margin-bottom: 0.375rem;
`;

const CoursesTakenGroup = styled.div`
  margin-bottom: 1.875rem;
  padding: 1.875rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
  border-radius: 1rem;
`;

const RightBarInfoKey = styled.span`
  font-weight: 500;
  color: #000;
  width: 50%;
`;

const RightBarInfoValue = styled.span`
  font-weight: 300;
`;

type courseCard = {
  city: string;
  userId: string;
  joined: string
};

function ProfileRightCard({ city, userId, joined }: courseCard) {
  const { data, loading, error } = useGetCoursesByUserIdQuery({
    variables: {
      filters: {
        students: {
          id: {
            eq: userId,
          },
        },
      },
      sort: "updatedAt:desc",
      pagination: {
        start: 0,
        limit: 6,
      },
    },
  });
  if (!data || loading) {
    return <div>loading...</div>;
  }
  if (error) return <ErrorMsg>{error}</ErrorMsg>;

  const courses = data?.courses?.data;
  // console.log(data?.courses?.data);
  return (
    <>
      <MainContainer>
        <MainWrapper>
          <RightBarInfo>
            <RightBarTitle>User Information</RightBarTitle>
            <RightBarInfoItem>
              <RightBarInfoKey>City</RightBarInfoKey>
              <RightBarInfoValue>{city}</RightBarInfoValue>
            </RightBarInfoItem>
            <RightBarInfoItem>
              <RightBarInfoKey>Courses Taken</RightBarInfoKey>
              <RightBarInfoValue>{courses?.length}</RightBarInfoValue>
            </RightBarInfoItem>
            {/* <RightBarInfoItem>
              <RightBarInfoKey>Complete</RightBarInfoKey>
              <RightBarInfoValue>12</RightBarInfoValue>
            </RightBarInfoItem> */}
            <RightBarInfoItem>
              <RightBarInfoKey>Joined</RightBarInfoKey>
              <RightBarInfoValue>{dayjs(joined).fromNow()}</RightBarInfoValue>
            </RightBarInfoItem>
          </RightBarInfo>
          {courses !== undefined && (
            <CoursesTakenGroup>
              <CoursesTaken course={courses as CourseEntity[]} />
            </CoursesTakenGroup>
          )}
        </MainWrapper>
      </MainContainer>
    </>
  );
}

export default ProfileRightCard
