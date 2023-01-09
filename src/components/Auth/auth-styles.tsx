import { Form } from "formik";
import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #eef0f3;
  padding: 5rem 1.5rem;
  min-height: 100vh;
  display: flex;
  @media (max-width: 767px) {
    padding: 2rem 1.5rem;
  }
`;

export const FormWrap = styled(Form)`
  width: 50%;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const FormWrapThumb = styled.div`
  width: 50%;
  align-self: center;
  @media (max-width: 767px) {
    display: none;
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const FormWrapRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  max-width: 56rem;
  background-color: #fff;
  color: #000;
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  border-radius: 0.5rem;
  position: relative;
  margin-top: 3rem;
`;

export const BackToHome = styled.button`
  position: absolute;
  bottom: 100%;
  right: 0;
  margin-bottom: 1rem;

  background-color: #7755e2;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1.5rem;
  border-radius: 10rem;
  border: none;
  cursor: pointer;
  line-height: 1;
  font-weight: 500;
  display: inline-block;
  text-transform: capitalize;
  box-shadow: 0px 2px 5px rgb(66 66 66 / 8%);
  transition: all 0.2s ease-in-out;
`;

export const MainContainer = styled.div`
  width: 100%;
  padding: 4rem;
  z-index: 10;
  @media (min-width: 768px) {
    min-height: 38.25rem;
  }
  h4,
  h5 {
    font-size: 1rem;
    font-weight: normal;
    @media (max-width: 767px) {
      font-size: 0.75rem;
    }
  }
  @media (max-width: 767px) {
    padding: 1.75rem;
  }
`;

export const WelcomeText = styled.h2`
  color: inherit;
  font-size: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 1.5rem;
  input {
    padding: 1rem 1.25rem;
    border: 1px solid #f3f3f3;
    background-color: #f3f3f3;
    border-radius: 0.5rem !important;
    box-shadow: none !important;
    outline: none;
    color: inherit;
    font-size: 1rem;
    width: 100%;
    margin-bottom: 0;
    font-weight: 400;
    &::placeholder {
      color: inherit;
      opacity: 1;
      font-weight: inherit;
      font-size: inherit;
    }
    @media (max-width: 767px) {
      font-size: 0.75rem;
      padding: 0.625rem 1rem;
      height: auto;
    }
  }
  span {
    font-weight: normal;
    color: red;
    font-size: 0.875rem;
    display: block;
    margin-bottom: 0rem;
    text-transform: capitalize;
  }
`;

export const ButtonContainer = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  button {
    /* background-color: #7755e2; */
    /* color: #fff; */
    font-size: 1rem;
    padding: 1rem 2.5rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    line-height: 1;
    font-weight: 500;
    display: inline-block;
    text-transform: capitalize;
    box-shadow: 0px 2px 5px rgb(66 66 66 / 8%);
    transition: all 0.2s ease-in-out;
    @media (max-width: 767px) {
      font-size: 0.75rem;
      padding: 0.75rem 1.5rem;
    }
  }
`;

export const FooterLinkContainer = styled.div`
  padding-top: 0;
`;

export const HorizontalRule = styled.hr`
  width: 50%;
  height: 1px;
  border-radius: 1rem;
  border: none;
  background-color: rgb(0 0 0 / 0%);
  margin: 0 auto;
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const LoginWith = styled.h5`
  cursor: pointer;
  align-self: center;
  margin-left: 1rem;
`;

export const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export const Terms = styled.h5`
  color: inherit;
  a {
    color: inherit;
    text-decoration: underline;
  }
`;

export const BackToLogin = styled.h4`
  position: absolute;
  cursor: pointer;
  color: inherit;
  align-self: center;
  margin-left: 113px;
  display: flex;
  text-decoration-line: underline;
`;
