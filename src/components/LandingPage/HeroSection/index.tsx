

import React from "react";
// import Image from "next/image"
// import styles from "../../components/LandingPage/Style.module.css";
import { HeroArticle, HeroText, HeroTitleText, HeroWrapper } from '../styles';
import LandingButton from '../LandingButton';

export const HeroSection = () => {
  return (
    <HeroArticle style={{ backgroundImage: "/assets/images/hero-banner.jpg" }}>
      <HeroWrapper>
        <HeroTitleText>Bare Metals Academy</HeroTitleText>
        <HeroText>online training courses</HeroText>
        <LandingButton />
        {/* <LandingButton type="button">
          Get started{" "}
          <Image
            src="/assets/images/ic_round-keyboard-arrow-right.svg"
            width={24}
            height={24}
          />
        </LandingButton> */}
      </HeroWrapper>
    </HeroArticle>
  );
};


