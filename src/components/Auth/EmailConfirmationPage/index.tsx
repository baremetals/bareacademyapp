import React, { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { Formik } from "formik";
import { getConfirmEmailValidationSchema } from "utils/formValidation";
import { ErrorMsg, Input, Error, SuccessMsg } from "../../Input";
import NextImage from "next/image";
import Link from "next/link";
import Button from "../Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  BackToLogin,
  PageContainer,
  FormWrap,
  HorizontalRule,
  FormWrapRow,
  FormWrapThumb,
  BackToHome,
} from "../auth-styles";

const initialValues = {
  email: "",
  error: "",
  success: "",
};
const ResendEmailConfirmation = () => {
    const router = useRouter();
    const [errorMsg, setErrorMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    
  const handleSend = async ({ ...values }: any) => {
    console.log('its submitting', values)
    await axios
      .post("/api/auth/password", {
        data: {
          email: values.email,
          flag: "RESENDEMAILCONFIRMATION",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const msg: any = "successful";
          setSuccessMsg(true);
          initialValues.success = msg;
          toast.success("Please check your email inbox");
          setTimeout(() => {
            router.push("/auth/signup/activate-email");
          }, 5000);
        }
      })
      .catch((err) => {
        console.log(err.response.data.message);
        const msg: string = err.response.data.message;
        setErrorMsg(true);
        initialValues.error = msg;
        toast.error(msg);
        setTimeout(() => {
          setErrorMsg(false);
        }, 7000);
      });
  };
  return (
    <>
      <PageContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSend}
          validationSchema={getConfirmEmailValidationSchema}
        >
          {({ isSubmitting, errors, touched }) => (
            <FormWrapRow>
              <Link href="/">
                <BackToHome>Home</BackToHome>
              </Link>
              <FormWrap>
                <MainContainer>
                  <WelcomeText>Resend Email Confirmation</WelcomeText>

                  <InputContainer>
                    <div className="form-group">
                      <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        values="email"
                      />
                      {errors.email && touched.email && (
                        <Error>{errors.email}</Error>
                      )}
                    </div>
                  </InputContainer>
                  <ButtonContainer>
                    <Button
                      type="submit"
                      content="send"
                      disabled={isSubmitting}
                    />
                    <Link href="/auth/signin">
                      <BackToLogin>back to login?</BackToLogin>
                    </Link>
                  </ButtonContainer>
                  {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
                  {successMsg && (
                    <SuccessMsg>{initialValues.success}</SuccessMsg>
                  )}
                  <HorizontalRule />
                </MainContainer>
              </FormWrap>
              <FormWrapThumb>
                <NextImage
                  src="/assets/images/activate.svg"
                  alt="confirm email image"
                  width={450}
                  height={300}
                  layout="responsive"
                  priority
                />
              </FormWrapThumb>
            </FormWrapRow>
          )}
        </Formik>
      </PageContainer>
      <ToastContainer />
    </>
  );
};

export default ResendEmailConfirmation;
