import React from 'react'
import styled from 'styled-components';
import CoursesTaken from '../CoursesTaken';


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
  coursesTaken: number;
};

function ProfileRightCard({ city, coursesTaken }: courseCard) {
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
              <RightBarInfoValue>{coursesTaken}</RightBarInfoValue>
            </RightBarInfoItem>
            <RightBarInfoItem>
              <RightBarInfoKey>Complete</RightBarInfoKey>
              <RightBarInfoValue>12</RightBarInfoValue>
            </RightBarInfoItem>
            <RightBarInfoItem>
              <RightBarInfoKey>Ratings</RightBarInfoKey>
              <RightBarInfoValue>Superb</RightBarInfoValue>
            </RightBarInfoItem>
          </RightBarInfo>
          <CoursesTakenGroup>
            <CoursesTaken />
          </CoursesTakenGroup>
        </MainWrapper>
      </MainContainer>
    </>
  );
}

export default ProfileRightCard
