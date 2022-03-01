import React, { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import { getForgotPasswordValidationSchema } from "utils/formValidation";
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
import axios from 'axios';


const initialValues = {
  usernameOrEmail: "",
  error: "",
  success: "",
};
const ChangePassword = () => {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSend = async ({ ...values }: any) => {
    await axios
      .post("/api/auth/password", {
        data: {
          email: values.usernameOrEmail,
          flag: "FORGOTPASSWORD",
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
            router.push("/auth/signin");
          }, 3000);
        }
        
      })
      .catch((err) => {
        console.log(err);
        const msg: any = "Please check the email address provided.";
        setErrorMsg(true);
        initialValues.error = msg;
        toast.error(msg);
        setTimeout(() => {
          setErrorMsg(false);
        }, 7000);
      });
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
                          type="email"
                          placeholder="Email"
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
                    src="/assets/images/forgotpassword.svg"
                    alt="forgot password image"
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
}

export default ChangePassword;
