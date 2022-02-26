import React from 'react'
// import Link from "next/link";
// import { useRouter } from "next/router";
import styled from "styled-components";
import NextImage from "next/image";
// import Button from "../Button";

import {
  MainContainer,
  WelcomeText,
  // ButtonContainer,
  PageContainer,
  FormWrapRow,
  FormWrapThumb,
} from "../auth-styles";

type activePage = {
  children: any;
  image: string;
};

const ConfirmAccount = ({ ...props }: activePage) => {
  // const router = useRouter();
  return (
    <PageContainer>
      <FormWrapRow>
        <PageWrap>
          <MainContainer>
            <WelcomeText>Account Activation</WelcomeText>
            {props.children}
            
          </MainContainer>
        </PageWrap>
        <FormWrapThumb>
          <NextImage
            src={props.image}
            alt="forgot password image"
            width={450}
            height={300}
            layout="responsive"
          />
        </FormWrapThumb>
      </FormWrapRow>
    </PageContainer>
  );
};

export const PageWrap = styled.div`
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export default ConfirmAccount
