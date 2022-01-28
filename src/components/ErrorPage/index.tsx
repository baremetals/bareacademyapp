import React, { useState } from 'react'
import styled from 'styled-components';
import NextImage from "next/image";
import Link from 'next/link';

export interface ErrorPageProps {
  statusCode?: number;
}

const getError = (statusCode?: number) => {
  switch (statusCode) {
    case 404:
      return {
        title: "Page not found",
        message:
          "The page you are looking for doesn't exist or has been moved.",
        image: "/assets/images/404.svg"
      };
    case 500:
      return {
        title: "Server error",
        message:
          "Something went wrong on our end. Please contact support or try again later.",
        image: "/assets/images/500.svg",
      };
    default:
      return {
        title: "Bad request",
        message:
          "Something went wrong. Please contact support or try again later.",
        image: "/assets/images/500.svg",
      };
  }
};

const ErrorPage: React.FC<ErrorPageProps> = ({statusCode = 400}: any) => {

    const [errTitle] = useState(getError(statusCode).title);
    const [errMsg] = useState(getError(statusCode).message);
    const [image] = useState(getError(statusCode).image);
    return (
        <PageContainer>
            <Wrapper>
                <ImageWrapper>
                    <NextImage src={image} alt="404 image" width={900} height={500} />
                </ImageWrapper>
                <ErrorContent>
                    <ErrorSubTitleText>{`${errTitle}`}</ErrorSubTitleText>
                    <ErrorTitleText>{`${statusCode}`}</ErrorTitleText>
                    <ErrorText>{errMsg}</ErrorText>
                    <Link href="/">
                        <GoBackButton>Go Back</GoBackButton>
                    </Link>
                </ErrorContent>
            </Wrapper>
        </PageContainer>
    );
};

export default ErrorPage

export const PageContainer = styled.div`
    background-color: #eef0f3;
    min-height: 100vh;
    display: flex;
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 75rem;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

export const ErrorSubTitleText = styled.h2`
    font-size: 2rem; 
    font-weight: 300;
    color: inherit;
    margin-bottom: .5rem;
`;

export const GoBackButton = styled.button`

    background-color: #7755E2;
    color: #fff;
    font-size: 1rem;
    border-radius: 10rem;
    padding: .875rem 2.5rem;
    border: none;
    cursor: pointer;
    line-height: 1;
    font-weight: 500;
    display: inline-block;
    text-transform: capitalize;
    box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
    transition: all 0.2s ease-in-out;

    &:hover {
        color: #7755E2;
        background-color: #fff;
    }
    @media (max-width: 767px) {
        padding: 1rem 2rem;
    }
    
`;

export const ErrorTitleText = styled.h1`
    color: inherit;
    font-size: 8rem;
    line-height: 1;
    margin-bottom: .5rem;
`;

export const ErrorText = styled.p`
    color: inherit;
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
`;

export const ImageWrapper = styled.div`
    flex: 1 0 0%;
    @media (max-width: 767px) {
        min-width: 18.5rem;
        max-width: 18.5rem;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const ErrorContent = styled.div`
    min-width: 22rem;
    max-width: 22rem;
    text-align: center;
    @media (max-width: 767px) {
        min-width: 18.5rem;
        max-width: 18.5rem;
        margin-left: auto;
        margin-right: auto; 
    }
`;

