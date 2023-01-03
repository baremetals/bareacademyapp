import styled from 'styled-components';

import React from 'react'

export const Hero = () => {
  return (
    <HeroContainer>
      <Wrapper>
        <HeroText>Bare Metals Academy</HeroText>
        <HeroText2>Online training courses</HeroText2>
      </Wrapper>
    </HeroContainer>
  );
}

export const HeroContainer = styled.div`
  height: 38rem;
  /* height: 600px; */
  width: 100%;
  left: 0px;
  top: 90px;
  /* display: flex; */
  background-color: #eef0f3;
  @media (max-width: 991px) {
    height: 30rem;
  }
`;

export const Wrapper = styled.div`
  /* position: absolute; */
  /* width: 100%; */
  height: 38rem;
  /* height: 600px; */
  left: 0px;
  top: 0px;

  background: rgba(0, 0, 0, 0.25);
`;

export const HeroText = styled.h1`
  position: absolute;
  width: 610px;
  height: 81px;
  left: 415px;
  top: 190px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 81px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

export const HeroText2 = styled.p`
  position: absolute;
  width: 227px;
  height: 30px;
  left: 607px;
  top: 276px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;