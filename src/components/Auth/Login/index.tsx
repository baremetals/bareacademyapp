import React, { useState } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import { Formik } from "formik";
import { getLoginValidationSchema } from "utils/formValidation";
import axios from "axios";
import NextImage from "next/image";



// Redux imports
import { useAppDispatch } from "app/hooks";
import { setSuccess, setError } from "features/ui/reducers";
import { setUser } from "features/auth";


// Design imports
import { Input, Error, ErrorMsg } from "../../Input";
import Button from '../Button';
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  LoginWith,
  ForgotPassword,
  PageContainer,
  FormWrap,
  HorizontalRule,
  FormWrapRow,
  FormWrapThumb,
  BackToHome,
} from "../auth-styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FooterLinkContainer } from "components/Footer/styles";
// import Spinner from "components/Spinner"



const initialValues = {
  usernameOrEmail: "",
  password: "",
  error: "",
};

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState(false);
  let err: any;
  

  const handleSubmit = async ({ ...values }: any) => {
    
    await axios
      .post("/api/auth/login", {
        ...values,
      })
      .then((res) => {
        // console.log(res.data.data);
        if (res.data.data !== null) {
          dispatch(setSuccess("Login successful"));
          dispatch(setUser(res.data));
          toast.success("Login successful");
          setTimeout(() => {
            // router.push(`/user-profile/${res.data.username}`);
            router.push("/home");
          }, 3000);
        } else {
          const errMsgData = res.data.error;
          console.log(errMsgData);
          if (errMsgData.name === "ValidationError") {
            err = "Incorrect details provided";
            initialValues.error = err;
            setErrorMsg(true);
            dispatch(setError(err));
          } else {
            err = "Something went wrong please try again later";
            initialValues.error = err;
            setErrorMsg(true);
            dispatch(setError(err));
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <PageContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={getLoginValidationSchema}
        >
          {({ isSubmitting, errors, touched }) => (
            <FormWrapRow>
              <Link href="/">
                <BackToHome>Home</BackToHome>
              </Link>
              <FormWrap>
                <MainContainer>
                  <WelcomeText>login</WelcomeText>
                  {errorMsg && (
                    <>
                      <ErrorMsg>{initialValues.error}</ErrorMsg>
                      <br />
                    </>
                  )}
                  <InputContainer>
                    <div className="form-group">
                      <Input
                        type="text"
                        placeholder="Username or Email"
                        name="usernameOrEmail"
                      />
                      {errors.usernameOrEmail && touched.usernameOrEmail && (
                        <Error>{errors.usernameOrEmail}</Error>
                      )}
                    </div>
                    <div className="form-group">
                      <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
                      {errors.password && touched.password && (
                        <Error>{errors.password}</Error>
                      )}
                    </div>
                  </InputContainer>
                  <ButtonContainer>
                    <Button
                      type="submit"
                      content="Sign in"
                      disabled={isSubmitting}
                    />
                    <Link href="/auth/signup">
                      <LoginWith>Register </LoginWith>
                    </Link>
                  </ButtonContainer>
                  <HorizontalRule />
                  <FooterLinkContainer className="d-flex">
                    <Link href="/auth/forgot-password">
                      <ForgotPassword>Forgot Password?</ForgotPassword>
                    </Link>
                  </FooterLinkContainer>
                </MainContainer>
              </FormWrap>
              <FormWrapThumb>
                <NextImage
                  src="/assets/images/login.svg"
                  alt="login image"
                  width={450}
                  height={300}
                  layout="responsive"
                  priority={true}
                />
              </FormWrapThumb>
            </FormWrapRow>
          )}
        </Formik>
      </PageContainer>
      <ToastContainer />
    </>
  );
}
export default Login
