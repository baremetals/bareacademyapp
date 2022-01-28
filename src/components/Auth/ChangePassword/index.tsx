import React, { useState } from 'react'
import Link from "next/link";
import { Formik } from "formik";
import { getForgotPasswordValidationSchema } from "utils/formValidation";
import { useForgotPasswordMutation } from "generated/graphql";
import { ErrorMsg, Input, Error, SuccessMsg } from "../../Input";
import NextImage from "next/image";
import Button from "../Button";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const initialValues = {
  usernameOrEmail: "",
  error: "",
  success: "",
};
const ChangePassword = () => {
  const [forgotPassword] = useForgotPasswordMutation();
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSend = async ({ ...values }: any) => {
    console.log(values);
    
    try{
      const response = await forgotPassword({
        variables: {
          ...values,
        },
      })
      // console.log(response.data)
      if (response.data?.forgotPassword.includes("reset link")) {
        const msg: any = response.data?.forgotPassword;
        setSuccessMsg(true);
        initialValues.success = msg;
        toast.success("Please check your email");
      } else {
        const msg: any = response.data?.forgotPassword;
        setErrorMsg(true);
        initialValues.error = msg
        toast.error(msg);
      }

    } catch (ex) {
      console.log(ex);
      throw ex
    }
  }

    return (
      <>
        <PageContainer>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSend}
            validationSchema={getForgotPasswordValidationSchema}
          >
            {({ isSubmitting, errors, touched }) => (
              <FormWrapRow>
                <Link href="/">
                  <BackToHome>Home</BackToHome>
                </Link>
                <FormWrap>
                  <MainContainer>
                    <WelcomeText>Forgot Password</WelcomeText>

                    <InputContainer>
                      <div className="form-group">
                        <Input
                          type="text"
                          placeholder="Email or Username"
                          name="usernameOrEmail"
                          values="usernameOrEmail"
                        />
                        {errors.usernameOrEmail && touched.usernameOrEmail && (
                          <Error>{errors.usernameOrEmail}</Error>
                        )}
                      </div>
                    </InputContainer>
                    <ButtonContainer>
                      <Button
                        type="submit"
                        content="send"
                        disabled={isSubmitting}
                      />
                      <Link href="/signin">
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
                    src="/assets/images/forgotpassword.svg"
                    alt="forgot password image"
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

export default ChangePassword;
