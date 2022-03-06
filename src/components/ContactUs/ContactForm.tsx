import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactUsForm, ContactUsGroup, ContactUsInput, ContactUsLabel, ContactUsRow, ContactUsTextarea, PageSubHeading } from './contact.styles';

import { ErrorMsg, SuccessMsg, Error } from "../Input";
import Button from "../Auth/Button";
import axios from "axios";
import slugify from 'slugify';

type formInput = {
  fullName: string;
  email: string;
  body: string;
  subject: string;
};
const ContactForm = () => {
  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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

  const submit: SubmitHandler<formInput> = async (data) => {
    console.log(data);
    await axios
      .post("/api/support", {
        data: {
          fullName: data.fullName,
          email: data.email,
          body: data.body,
          subject: data.subject,
          slug: slugify(data.fullName),
          username: "unknown",
        },
      })
      .then(() => {
        // console.log(resp);
        setMsg("Message sent, you will hear back from us within 48 hours.");
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000)
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
    <>
      <ContactUsForm onSubmit={handleSubmit(submit)}>
        <PageSubHeading>Fill out the form </PageSubHeading>
        <ContactUsRow>
          {success && <SuccessMsg>{msg}</SuccessMsg>}
          {error && <ErrorMsg>{msg}</ErrorMsg>}
          <ContactUsGroup>
            <ContactUsLabel>Full Name</ContactUsLabel>
            <ContactUsInput
              type="text"
              placeholder="Full name"
              {...register("fullName", { required: true })}
              name="fullName"
            />
            {errors.fullName && <Error>Fullname required</Error>}
          </ContactUsGroup>
          <ContactUsGroup>
            <ContactUsLabel>Subject</ContactUsLabel>
            <ContactUsInput
              type="text"
              placeholder="Subject"
              {...register("subject", { required: true })}
              name="subject"
            />
            {errors.subject && <Error>subject required</Error>}
          </ContactUsGroup>
          <ContactUsGroup style={{ width: "100%" }}>
            <ContactUsLabel>Email address</ContactUsLabel>
            <ContactUsInput
              type="email"
              placeholder="Email address"
              {...register("email", { required: true })}
              name="email"
            />
            {errors.email && <Error>email required</Error>}
          </ContactUsGroup>
          <ContactUsGroup style={{ width: "100%" }}>
            <ContactUsLabel>Comment</ContactUsLabel>
            <ContactUsTextarea
              placeholder="Comment"
              {...register("body", { required: true })}
              name="body"
            />
            {errors.body && <Error>Comment required</Error>}
          </ContactUsGroup>
          <ContactUsGroup style={{ width: "100%", marginBottom: "0" }}>
            <Button content="Submit" type="submit" />
          </ContactUsGroup>
        </ContactUsRow>
      </ContactUsForm>
    </>
  );
};

export default ContactForm
