import React from "react";
import PasswordReset from "components/Auth/PasswordReset";
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "../../lib/noAuth";

const ResetPassword = () => {
  useNoAuth();
  return (
    <>
      <PasswordReset />
    </>
  );
};

export default withApollo({ ssr: false })(ResetPassword);
