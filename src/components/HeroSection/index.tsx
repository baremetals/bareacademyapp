import React, { useState } from 'react'
import { useRouter } from "next/router";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./styles";

import { Button } from "../Button/styles"

const HeroSection = ({ ...props }: any ) => {
    const [hover, setHover] = useState(false)
  const router = useRouter();
    const onHover = () => {
        setHover(!hover)
    }
    return (
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg
            playsInline
            autoPlay
            loop
            muted
            src=""
            type="video/mp4"
            {...props}
          />
        </HeroBg>
        <HeroContent>
          <HeroH1>Bare Metals Academy</HeroH1>
          <HeroP>online training courses</HeroP>
          <HeroBtnWrapper>
            <Button
              type="button"
              onClick={() => router.push("/auth/signup")}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
}

export default HeroSection
