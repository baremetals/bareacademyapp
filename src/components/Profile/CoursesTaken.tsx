import Link from 'next/link';
import React from 'react'
import styled from "styled-components";
import { GroupEntity } from "generated/graphql";

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
  cursor: pointer;
`;

function CoursesTaken(props: { group: Array<GroupEntity> }) {
  const courses = props?.group;
  // console.log(props.group);
  return (
    <>
      {courses &&
        courses?.map((c, id) => (
          <Container key={id}>
            <CourseImageWrap>
              <Link
                href={`/courses/${c?.attributes?.course?.data?.attributes?.slug}`}
              >
                <CourseImg
                  alt="Course Image"
                  src={c?.attributes?.course?.data?.attributes?.image as string}
                />
              </Link>
              {c?.attributes?.active && <CourseStatus />}
            </CourseImageWrap>
            <Link
              href={`/courses/${c?.attributes?.course?.data?.attributes?.slug}`}
            >
              <CourseTitle>
                {c?.attributes?.course?.data?.attributes?.title}
              </CourseTitle>
            </Link>
          </Container>
        ))}
    </>
  );
}

export default CoursesTaken
