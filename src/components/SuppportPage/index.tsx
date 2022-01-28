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
import { supportMessage } from 'helpers/support';


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

  const submit: SubmitHandler<formInput> = async(data) => {
    // console.log(data);
    const res = await supportMessage({
      fullName: user?.fullName,
      email: user?.email,
      body: data.body,
      subject: data.subject,
      username: user?.username
    });
    const  {...messages}  = res?.createSupportMessage;
    // console.log(messages.messages);
    const msg: string[] | null | undefined = messages?.messages;
    setMsg(msg![0]);
    if (msg![0].includes("48 hours.")) {
      setSuccess(true);
    } else {
      setError(true);
    }
  };

  return (
    <Dashboard>
      <PageHeading>Support</PageHeading>
      <SupportWrapper>
        <SupportCardWrapper>
          <FAQTitle>FAQs</FAQTitle>
          <TextWrap>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </TextWrap>
        </SupportCardWrapper>
        <ContactCardWrap>
          <FAQTitle>Ask A Question</FAQTitle>
          <ContactCard>
            {success && (
              <SuccessMsg>{msg}</SuccessMsg>
            )}
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
