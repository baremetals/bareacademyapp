import React from "react";

import PasswordReset from "components/Auth/PasswordReset";
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "lib/noAuth";
import Layout from 'components/Layout';

const ResetPassword = () => {
  useNoAuth();
  return (
    <Layout
      title={`Bare Metals Aacademy | Reset Password`}
      metaDescription="Reset password"
      canonicalUrl="https://www.baremetals.io/auth/reset-password"
      pageUrl="https://www.baremetals.io/auth/reset-password"
      image="/assets/images/forgot.svg"
      imageHeight={"450"}
      imageWidth={"300"}
      type="reset password"
    >
      <PasswordReset />
    </Layout>
  );
};

export default withApollo({ ssr: false })(ResetPassword);
