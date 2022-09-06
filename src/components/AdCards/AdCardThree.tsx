import { useCoursesQuery } from "generated/graphql";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import styles from "../../styles/Home/index.module.css";
import classNames from "classnames";
import TitlePopOver from "components/Home/TitlePopOver";
import { FiClock } from "react-icons/fi";
import durationToString from "helpers/durationToString";

const AdCardThree = () => {
  const { data, loading, error } = useCoursesQuery();

  const courses = data?.courses?.data;
  // console.log(courses);

  if (!data || loading || error) {
    return <div>loading...</div>;
  }
  return (
    <AdCardWrapper>
      <Title>Latest Courses </Title>
      {courses &&
        courses.map((c, id) => (
          <Container
            key={id}
            className={classNames({
              [styles.courseEntryPrimer]: c?.attributes?.level === "Primer",
              [styles.courseEntryBeginner]: c?.attributes?.level === "Beginner",
              [styles.courseEntryIntermediate]:
                c?.attributes?.level === "Intermediate",
              [styles.courseEntryAdvance]: c?.attributes?.level === "Advance",
            })}
          >
            <div className={styles.courseEntryLevel}>
              {c?.attributes?.level}
            </div>
            <div className={styles.courseEntryContainer}>
              <ImageWrap>
                <Link href={`/courses/${c?.attributes?.slug}`}>
                  <Img
                    alt="Course Image"
                    src={
                      (c?.attributes?.image as string) ||
                      "/assets/images/course-placeholder.png"
                    }
                  />
                </Link>
                {/* <Status /> */}
              </ImageWrap>
              <Link href={`/courses/${c?.attributes?.slug}`}>
                <TitlePopOver size={22}>{c?.attributes?.title}</TitlePopOver>
              </Link>
            </div>
            {c?.attributes?.duration && (
              <div className={styles.courseEntryDuration}>
                <FiClock />
                <span>{durationToString(c?.attributes?.duration)}</span>
              </div>
            )}
          </Container>
        ))}
    </AdCardWrapper>
  );
};

export default AdCardThree;

const AdCardWrapper = styled.div`
  margin-bottom: 1.875rem;
  // padding: 1.875rem;
  // background-color: #ffffff;
  // box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
  border-radius: 1rem;
`;
const Container = styled.li`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 1.125rem;
  &:last-child {
    margin-bottom: 0;
  }
  background: white;
  // height: 100px;
  border-radius: 20px;
  padding: 20px;
  padding-bottom: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;
const ImageWrap = styled.div`
  margin-right: 0.8rem;
  position: relative;
`;
const Img = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 10rem;
  object-fit: cover;
  background: black;
  display: block;
  cursor: pointer;
`;
// const Status = styled.span`
//   width: 0.75rem;
//   height: 0.75rem;
//   border-radius: 10rem;
//   background-color: limegreen;
//   position: absolute;
//   top: 0;
//   right: 0;
//   border: 1px solid white;
// `;

const Title = styled.div`
  // font-weight: 500;
  // opacity: 0.6;
  // cursor: pointer;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
