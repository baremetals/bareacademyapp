import React, { useState } from "react";
import NextImage from "next/image";


import { useRouter } from "next/router";
import Link from "next/link";
import { Formik} from "formik";
import Button from "../Button";
import { Input, Error, ErrorMsg, SuccessMsg} from "../../Input";
import { getRegisterValidationSchema } from "../../../utils/formValidation";

type registerUserProps = {
  email: string;
  username: string;
  fullName: string;
  password: string;
};
const initialValues = {
  email: "",
  username: "",
  fullName: "",
  password: "",
  error: "",
};

import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  LoginWith,
  Terms,
  PageContainer,
  FormWrap,
  HorizontalRule,
  FormWrapRow,
  FormWrapThumb,
  BackToHome,
} from "../auth-styles";
import axios from 'axios';


const Register = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  let err: string;
  const router = useRouter();

  const handleSubmit = async ({ ...values }: registerUserProps) => {
    await axios
      .post("/api/auth/register", {
        ...values,
      })
      .then((res) => {
        // console.log(res.data)
        if (res.data.resp === false) {
          setSuccessMsg(true);
          router.push("/auth/signup/activate-email");
        }
      })
      .catch((error) => {
        err = error.response.data.message;
        initialValues.error = err;
        setErrorMsg(true);
        setTimeout(() => {
          setErrorMsg(false);
        }, 10000);
      });
  };

  return (
    <>
      <PageContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={getRegisterValidationSchema}
        >
          {({ isSubmitting, errors, touched }) => (
            <FormWrapRow>
              <Link href="/">
                <BackToHome>Home</BackToHome>
              </Link>
              <FormWrap>
                <MainContainer>
                  {successMsg && (
                    <SuccessMsg>
                      Please check your email to activate your account
                    </SuccessMsg>
                  )}
                  <br />
                  <WelcomeText>Register</WelcomeText>
                  {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
                  <InputContainer>
                    <div className="form-group">
                      <Input
                        type="text"
                        placeholder="Full Name"
                        name="fullName"
                      />
                      {errors.fullName && touched.fullName && (
                        <Error>{errors.fullName}</Error>
                      )}
                    </div>
                    <div className="form-group">
                      <Input
                        type="text"
                        placeholder="Username"
                        name="username"
                        values="username"
                      />
                      {errors.username && touched.username && (
                        <Error>{errors.username}</Error>
                      )}
                    </div>
                    <div className="form-group">
                      <Input type="email" placeholder="Email" name="email" />
                      {errors.email && touched.email && (
                        <Error>{errors.email}</Error>
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
                      content="Sign Up"
                      type="submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                    />
                    <Link href="/auth/signin">
                      <LoginWith>Or Login </LoginWith>
                    </Link>
                  </ButtonContainer>

                  <HorizontalRule />
                  <Terms>
                    By creating your account you agree to the{" "}
                    <Link href="/terms">terms</Link> and
                    <Link href="/privacy"> privacy policy</Link>
                  </Terms>
                </MainContainer>
              </FormWrap>
              <FormWrapThumb>
                <NextImage
                  src="/assets/images/reg.svg"
                  alt="register image"
                  width={600}
                  height={620}
                  layout="responsive"
                  priority
                />
              </FormWrapThumb>
            </FormWrapRow>
          )}
        </Formik>
      </PageContainer>
    </>
  );
};

export default Register;
