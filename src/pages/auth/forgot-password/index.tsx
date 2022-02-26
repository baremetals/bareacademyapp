import React from "react";
import ChangePassword from "components/Auth/ChangePassword";
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "lib/noAuth";

function ForgotPassword() {
  useNoAuth();
  return <ChangePassword></ChangePassword>;
}

export default withApollo({ ssr: false })(ForgotPassword);
