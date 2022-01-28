import React from 'react'
import styled from 'styled-components';

const AdCardThree = () => {

    
    return (
      <AdCardWrapper>
        <Title>New Courses Javascript</Title>
        <br />
        <br />
        <Container>
          <ImageWrap>
            <Img alt="Course Image" src="/assets/images/forum.svg" />
            <Status />
          </ImageWrap>
          <Title>Javascript</Title>
        </Container>

        <Container>
          <ImageWrap>
            <Img alt="Course Image" src="/assets/images/forum.svg" />
            <Status />
          </ImageWrap>
          <Title>Django Web Dev</Title>
        </Container>

        <Container>
          <ImageWrap>
            <Img alt="Course Image" src="/assets/images/forum.svg" />
            <Status />
          </ImageWrap>
          <Title>HTML & CSS</Title>
        </Container>

        <Container>
          <ImageWrap>
            <Img alt="Course Image" src="/assets/images/forum.svg" />
            <Status />
          </ImageWrap>
          <Title>Flutter</Title>
        </Container>
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
