import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Auth/Button";
import {
  PageHeading,
} from "../../styles/common.styles";
import {
  SupportCardWrapper,
  SupportWrapper,
  FAQTitle,
  TextWrap,
  ContactCardWrap,
  ContactCard,
  FormWrap,
  SupportMainContainer,
  SupportInputContainer,
  SupportInput,
  SupportButtonContainer,
  SupportTextArea,
} from "./support.styles";
import { ErrorMsg, Error, SuccessMsg } from "../Input";
import Dashboard from 'components/Dashboard';
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import axios from 'axios';


type formInput = {
  subject: string
  body: string
}
function SupportPage() {

  const { user: user } = useAppSelector(isUser);
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  // console.log(user)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<formInput>();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // console.log(user)

  const submit: SubmitHandler<formInput> = async(data) => {
    // console.log(data);

    await axios
      .post("/api/support", {
        data: {
          slug: user?.slug,
          body: data.body,
          subject: data.subject,
          username: user?.username,
          fullName: user?.slug,
          email: "user@baremetals.io"
        },
      })
      .then(() => {
        // console.log(resp);
        setMsg("Message sent, you will hear back from us with 48 hours.");
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch(() => {
        // console.log(err);
        setMsg("Sorry something went wrong please try again later.");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };

  return (
    <Dashboard>
      <PageHeading>Support</PageHeading>
      <SupportWrapper>
        <SupportCardWrapper>
          <FAQTitle>Feed Back</FAQTitle>
          <TextWrap>
            Thanks for being part of the community. The aim is to continue
            improving the site. If you have any questions please use the form
            below. If you have any suggestions on how to improve the site, your
            learning experience or have any topics you wish to learn please feel free to share that. All suggestions are welcomed
            and appreciated.
          </TextWrap>
        </SupportCardWrapper>
        <ContactCardWrap>
          <FAQTitle>Ask A Question</FAQTitle>
          <ContactCard>
            {success && <SuccessMsg>{msg}</SuccessMsg>}
            <FormWrap onSubmit={handleSubmit(submit)}>
              {error && <ErrorMsg>{msg}</ErrorMsg>}
              <SupportMainContainer>
                <SupportInputContainer>
                  <SupportInput
                    placeholder="Subject"
                    {...register("subject", { required: true })}
                    name="subject"
                  />
                  {errors.subject && <Error>subject required</Error>}
                  {/* <SupportInput placeholder="topic" /> */}
                  <SupportTextArea
                    placeholder="write something..."
                    {...register("body", { required: true })}
                    name="body"
                  />
                  {errors.body && <Error>Description required</Error>}
                </SupportInputContainer>
                <SupportButtonContainer>
                  <Button content="Submit" type="Submit" />
                </SupportButtonContainer>
              </SupportMainContainer>
            </FormWrap>
          </ContactCard>
        </ContactCardWrap>
      </SupportWrapper>
    </Dashboard>
  );
}

export default SupportPage;
