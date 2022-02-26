import { useCoursesQuery } from 'generated/graphql';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

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
        <br />
        <br />
        {courses &&
          courses.map((c, id) => (
            <Container key={id}>
              <ImageWrap>
                <Link href={`/courses/${c?.attributes?.slug}`}>
                  <Img
                    alt="Course Image"
                    src={c?.attributes?.image?.data?.attributes?.url}
                  />
                </Link>
                <Status />
              </ImageWrap>
              <Link href={`/courses/${c?.attributes?.slug}`}>
                <Title>{c?.attributes?.title}</Title>
              </Link>
            </Container>
          ))}
      </AdCardWrapper>
    );
}

export default AdCardThree

const AdCardWrapper = styled.div`
  margin-bottom: 1.875rem;
  padding: 1.875rem;
  background-color: #ffffff;
  box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
  border-radius: 1rem;
`;
const Container = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.125rem;
  &:last-child {
    margin-bottom: 0;
  }
`;
const ImageWrap = styled.div`
  margin-right: 1.25rem;
  position: relative;
`;
const Img = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 10rem;
  object-fit: cover;
  background: black;
  display: block;
`;
const Status = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 10rem;
  background-color: limegreen;
  position: absolute;
  top: 0;
  right: 0;
  border: 1px solid white;
`;

const Title = styled.span`
  font-weight: 500;
  opacity: 0.6;
`;
