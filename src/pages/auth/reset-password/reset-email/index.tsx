import React from "react";
import EmailTemplate from "components/EmailTemplate";
import { useNoAuth } from "lib/noAuth";

const message: string =
  "We've just sent you a link to reset your password. Any problems?";
const ResetEmail = () => {
  useNoAuth();
  return <EmailTemplate message={message}></EmailTemplate>;
};

export default ResetEmail;
