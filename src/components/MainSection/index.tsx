import React from "react";
import { useRouter } from "next/router";
import { Button } from "../Button/styles";
import {
  MainContainer,
  MainWrapper,
  MainRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./styles";

const MainSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  topLine,
  description,
  darkText,
  buttonLabel,
  img,
  alt,
  headline,
  primary,
  dark,
  dark2,
  ...props
}: any) => {
  const router = useRouter();

  return (
    <>
      <MainContainer lightBg={lightBg} id={id} {...props}>
        <MainWrapper>
          <MainRow imgStart={imgStart} {...props}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText} {...props}>
                  {headline}
                </Heading>
                <Subtitle darkText={darkText} {...props}>
                  {description}
                </Subtitle>
                <BtnWrap>
                  <Button
                    type="button"
                    onClick={() => router.push("/auth/signup")}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </MainRow>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default MainSection;
