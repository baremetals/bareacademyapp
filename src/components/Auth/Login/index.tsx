import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
import Button from "../Button";
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
} from "../auth-styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FooterLinkContainer } from "components/Layout/Footer/styles";
// import Spinner from "components/Spinner"
// import { useSockets } from "context/socket.context";

const initialValues = {
  usernameOrEmail: "",
  password: "",
  error: "",
};

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState(false);
  // const { socket } = useSockets();
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
          // console.log(res.data);
          toast.success("Login successful");
          setTimeout(() => {
            // router.push(`/user-profile/${res.data.username}`);
            router.push("/home");
          }, 3000);
        } else {
          const errMsgData = res.data.error;
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
              <FormWrap>
                <MainContainer>
                  <WelcomeText>Login</WelcomeText>
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
                      loading={isSubmitting}
                    />
                    <Link href="/auth/signup">
                      <LoginWith> </LoginWith>
                    </Link>
                    <Link href="/auth/signup">
                      <div
                        style={{
                          width: "121px",
                          height: "48px",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          filter: `dropShadow("0px 2px 5px", rgba("66, 66, 66, 0.08"))`,
                          borderRadius: "8px",
                          flex: "none",
                          order: "2",
                          flexGrow: 0,
                          marginLeft: "10px",
                          color: "white",
                        }}
                      >
                        <button>Register</button>
                      </div>
                    </Link>
                  </ButtonContainer>
                  <HorizontalRule />
                  <FooterLinkContainer className="d-flex">
                    <Link href="/auth/forgot-password">
                      <ForgotPassword
                        style={{
                          // width: "121px",
                          height: "48px",
                          display: "flex",
                          flexDirection: "row",
                          padding: "12px 39px",
                          border: "1px solid #A6A6A6",
                          alignItems: "flex-start",
                          filter: `dropShadow("0px 2px 5px", rgba("66, 66, 66, 0.08"))`,
                          borderRadius: "8px",
                          flex: "none",
                          order: "2",
                          flexGrow: 0,
                          fontWeight: 500,
                          // marginLeft: "10px",
                          backgroundColor: "#f3f3f3",
                        }}
                      >
                        Forgot Password?
                      </ForgotPassword>
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
};
export default Login;
