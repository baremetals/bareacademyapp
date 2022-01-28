import React from 'react'
import styled from "styled-components";

const Container = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const CourseImageWrap = styled.div`
  margin-right: 10px;
  position: relative;
`;
const CourseImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
const CourseStatus = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: limegreen;
  position: absolute;
  top: -2px;
  right: 0;
  border: 2px solid white;
`;
const CourseTitle = styled.span`
  font-weight: 500;
`;

function CoursesTaken() {
    return (
      <>
        <Container>
          <CourseImageWrap>
            <CourseImg alt="Course Image" src="/assets/images/forum.svg" />
            <CourseStatus />
          </CourseImageWrap>
          <CourseTitle>Javascript</CourseTitle>
        </Container>
        <Container>
          <CourseImageWrap>
            <CourseImg alt="Course Image" src="/assets/images/forum.svg" />
            <CourseStatus />
          </CourseImageWrap>
          <CourseTitle>Django Web Dev</CourseTitle>
        </Container>
        <Container>
          <CourseImageWrap>
            <CourseImg alt="Course Image" src="/assets/images/forum.svg" />
            <CourseStatus />
          </CourseImageWrap>
          <CourseTitle>HTML & CSS</CourseTitle>
        </Container>
        <Container>
          <CourseImageWrap>
            <CourseImg alt="Course Image" src="/assets/images/forum.svg" />
            <CourseStatus />
          </CourseImageWrap>
          <CourseTitle>Flutter</CourseTitle>
        </Container>
      </>
    );
}

export default CoursesTaken
