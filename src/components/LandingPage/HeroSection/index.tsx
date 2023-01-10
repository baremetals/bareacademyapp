

import React from "react";
// import Image from "next/image"
// import styles from "../../components/LandingPage/Style.module.css";
import { HeroArticle, HeroText, HeroTitleText, HeroWrapper } from '../styles';
import LandingButton from '../LandingButton';

export const HeroSection = () => {
  return (
    <HeroArticle
    // style={{ backgroundImage: "/assets/images/hero-banner.jpg" }}
    >
      {/* <Image src="/assets/images/hero-banner.jpg" layout="fill" alt="Hero Banner"/> */}
      <HeroWrapper>
        <HeroTitleText>Bare Metals Academy</HeroTitleText>
        <HeroText>online training courses</HeroText>
        <LandingButton />
      </HeroWrapper>
    </HeroArticle>
  );
};


