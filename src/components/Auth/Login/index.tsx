import React, { useState } from 'react'
import Link from "next/link";
import { useRouter } from 'next/router';
import { Formik } from "formik";
import { getLoginValidationSchema } from "utils/formValidation";
import { useLoginMutation } from "generated/graphql";
import NextImage from "next/image";


// Redux imports
import { useAppDispatch } from "app/hooks";
import { setSuccess, setError } from "features/ui/reducers";


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



const initialValues = {
  usernameOrEmail: "",
  password: "",
  error: "",
};

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [login] = useLoginMutation();
  const [errorMsg, setErrorMsg] = useState(false);
  let err: any;
  

  const handleSubmit = async ({ ...values }: any) => {

    try {
      const response = await login({
        variables: {
          ...values,
        },
      });
      // console.log(response);
      if (!response.data?.login.includes("success-")) {
        err = response.data?.login;
        initialValues.error = err;
        setErrorMsg(true);
        dispatch(setError(response.data?.login));
      } else {
        dispatch(setSuccess(response.data?.login));
        const me = response.data?.login.slice(8);
        toast.success("login successful");
        setTimeout(() => {
          router.push(`/user-profile/${me}`);
        }, 500);
      }
    } catch (ex) {
      console.log(ex);
      throw ex;
    }
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
                  {errorMsg && <><ErrorMsg>{initialValues.error}</ErrorMsg><br/></>}
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
                    <Link href="/signup">
                      <LoginWith>Register </LoginWith>
                    </Link>
                  </ButtonContainer>
                  <HorizontalRule />
                  <FooterLinkContainer className="d-flex">
                    <Link href="/forgot-password">
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
