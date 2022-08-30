import { CourseEntity } from 'generated/graphql';
import Link from 'next/link';
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
  cursor: pointer;
`;
// const CourseStatus = styled.span`
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   background-color: limegreen;
//   position: absolute;
//   top: -2px;
//   right: 0;
//   border: 2px solid white;
// `;
const CourseTitle = styled.span`
  font-weight: 500;
  cursor: pointer;
`;

function CoursesTaken(props: { course: Array<CourseEntity> }) {
  // console.log(props);
  const courses = props?.course;
  return (
    <>
      {courses &&
        courses?.map((c, id) => (
          <Container key={id}>
            <CourseImageWrap>
              <Link href={`/courses/${c?.attributes?.slug}`}>
                <CourseImg
                  alt="Course Image"
                  src={c?.attributes?.image as string}
                />
              </Link>

              {/* <CourseStatus /> */}
            </CourseImageWrap>
            <Link href={`/courses/${c?.attributes?.slug}`}>
              <CourseTitle>{c?.attributes?.title}</CourseTitle>
            </Link>
          </Container>
        ))}
    </>
  );
}

export default CoursesTaken
