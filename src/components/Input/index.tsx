import styled from "styled-components";
import { Field } from "formik";

export const Input = ({ type, name, placeholder, ...props }: any) => {
  return (
    <>
      <StyledInput placeholder={placeholder} name={name} type={type} />

    </>
  );
}

export const Error = ({ children }: any) => {
  return <ErrorMsg>{children}</ErrorMsg>;
};

export const StyledInput = styled(Field)`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #3c1a9899;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const ErrorMsg = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  background: red400;
  color: #f511a9;
  font-size: 0.9rem;
  text-transform: lowercase;
  font-weight: 500;
`;

export const SuccessMsg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  /* background: red400; */
  color: #16addd;
  font-size: 0.9rem;
  text-transform: lowercase;
  font-weight: bold;
`;
