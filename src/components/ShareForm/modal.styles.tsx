import styled from "styled-components";
import { BsUpload } from "react-icons/bs";

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0 0 0 / 50%);
  z-index: 99999;
  display: flex;
  align-items: center;
  > div {
    width: 100%;
    overflow: auto;
    max-height: 100vh;
    padding: 1.5rem;
  }
`;

export const InputFormGroupRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
`;

export const InputFormGroup = styled.div`
  width: 50%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom: 1rem;
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 0.75rem;
  }
`;

export const PageContainer = styled.div`
  margin: auto;
  background-color: #fff;
  border-radius: 1rem;
  max-width: 45rem;
  padding: 3rem;
  backdrop-filter: blur(0.25rem);
  @media (max-width: 991px) {
    padding: 1.5rem;
  }
`;

export const FormWrap = styled.form`
  display: block;
`;

export const MainContainer = styled.div`
  display: block;
  width: 100%;
`;

export const CardText = styled.h2`
  margin-bottom: 1.5rem;
  color: #000;
  @media (max-width: 991px) {
    margin-bottom: 0.75rem;
  }
`;

export const CloseButtonWrap = styled.span`
  cursor: pointer;
  float: right;
  svg {
    width: 1.75rem;
    height: 1.75rem;
    fill: #000;
  }
`;

export const InputContainer = styled.div`
  border-top: 1px solid rgb(0 0 0 / 10%);
  padding-top: 1.5rem;
  @media (max-width: 991px) {
    padding-top: 1rem;
  }
`;

export const TitleInput = styled.input`
  background-color: #fff;
  border: 1px solid rgb(0 0 0 / 10%);
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.875rem 1.25rem;
  font-size: 1rem;
  color: #000;
  @media (max-width: 991px) {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
  &:focus {
    border-color: rgb(0 0 0 / 10%);
    outline: none;
  }
  &::placeholder {
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
    text-transform: capitalize;
  }
`;

export const UploadWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
export const UploadLabel = styled.label``;

export const UploadIcon = styled(BsUpload)``;

export const UploadInput = styled.input`
  background-color: #fff;
  border: 1px solid rgb(0 0 0 / 10%);
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.875rem 1.25rem;
  color: #000;
  font-size: 1rem;
  display: block;
  @media (max-width: 991px) {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
  &:focus {
    border-color: rgb(0 0 0 / 10%);
    outline: none;
  }
  &::placeholder {
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }
`;

export const Select = styled.select`
  background-color: #fff;
  border: 1px solid rgb(0 0 0 / 10%);
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.875rem 1.25rem;
  color: #000;
  font-size: 1rem;
  @media (max-width: 991px) {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
  &:focus {
    border-color: rgb(0 0 0 / 10%);
    outline: none;
  }
  &::placeholder {
    color: inherit;
    font-weight: inherit;
    font-size: inherit;
  }
`;

export const CategoryOptions = styled.option``;

export const BodyTextWrapper = styled.div``;


export const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    margin-top: 1rem;
  }
`;

export const LoginWith = styled.h5`
  cursor: pointer;
`;

export const HorizontalRule = styled.hr`
  width: 75%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 4rem 0 0;
  backdrop-filter: blur(25px);
`;

export const SubmitButton = styled.button`
  background-color: #7755e2;
  color: #fff;
  font-size: 1rem;
  border-radius: 10rem;
  padding: 1.125rem 3.5rem;
  border: none;
  cursor: pointer;
  line-height: 1;
  font-weight: 500;
  display: inline-block;
  text-transform: capitalize;
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #7755e2;
  }
  @media (max-width: 991px) {
    font-size: 0.875rem;
    padding: 0.875rem 2rem;
  }
`;

export const CloseButton = styled.button`
  background-color: #fff;
  color: #7755e2;
  font-size: 1rem;
  border-radius: 10rem;
  padding: 1.125rem 3.5rem;
  border: none;
  cursor: pointer;
  line-height: 1;
  font-weight: 500;
  display: inline-block;
  text-transform: capitalize;
  box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
  transition: all 0.2s ease-in-out;
  @media (max-width: 991px) {
    font-size: 0.875rem;
    padding: 0.875rem 2rem;
  }
`;