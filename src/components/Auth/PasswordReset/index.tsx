import Link from "next/link";
import React, { useState } from "react";
import { Formik } from "formik";
import { getResetPasswordValidationSchema } from "utils/formValidation";
import { ErrorMsg, Input, Error, SuccessMsg } from "../../Input";
import Button from "../Button";
import NextImage from "next/image";

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
} from "../auth-styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import axios from 'axios';


const initialValues = {
  newPassword: "",
  confirmPassword: "",
  error: "",
  success: "",
};
const ResetPassword = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmit = async ({ ...values }: typeof initialValues) => {
    const { code } = router.query;
    await axios
      .post("/api/auth/password", {
        data: {
          password: values.newPassword,
          passwordConfirmation: values.confirmPassword,
          code,
          flag: "RESETPASSWORD",
        },
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.resp === true) {
          const msg: string = "Password reset successful, please login.";
          initialValues.success = msg;
          setSuccessMsg(true);
          toast.success(msg);
          setTimeout(() => {
            router.push("/auth/signin");
          }, 4000);
        } else {
          const msg: string = "You need to confirm your email address.";
          initialValues.success = msg;
          setSuccessMsg(true);
          toast.success(msg);
          setTimeout(() => {
            router.push("/auth/reset-password/reset-email");
          }, 6000);
        }
      })
      .catch((err) => {
        console.log(err);
        const msg: string = "Sorry something went wrong please try again later.";
        initialValues.error = msg;
        setErrorMsg(true);
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
          onSubmit={handleSubmit}
          validationSchema={getResetPasswordValidationSchema}
        >
          {({ isSubmitting, errors, touched }) => (
            <FormWrapRow>
              <FormWrap>
                <MainContainer>
                  <WelcomeText>reset password</WelcomeText>
                  <InputContainer>
                    <div className="form-group">
                      <Input
                        type="password"
                        placeholder="New Password"
                        name="newPassword"
                      />
                      {errors.newPassword && touched.newPassword && (
                        <Error>{errors.newPassword}</Error>
                      )}
                    </div>
                    <div className="form-group">
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                      />
                      {errors.confirmPassword && touched.confirmPassword && (
                        <Error>{errors.confirmPassword}</Error>
                      )}
                    </div>
                  </InputContainer>
                  <ButtonContainer>
                    <Button
                      type="submit"
                      content="submit"
                      disabled={isSubmitting}
                    />
                  </ButtonContainer>
                  <Link href="/auth/signin">
                    <BackToLogin>back to login?</BackToLogin>
                  </Link>
                  {errorMsg && <ErrorMsg>{initialValues.error}</ErrorMsg>}
                  {successMsg && (
                    <SuccessMsg>{initialValues.success}</SuccessMsg>
                  )}
                  <HorizontalRule />
                </MainContainer>
              </FormWrap>
              <FormWrapThumb>
                <NextImage
                  src="/assets/images/forgot.svg"
                  alt="reset password image"
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

export default ResetPassword;
