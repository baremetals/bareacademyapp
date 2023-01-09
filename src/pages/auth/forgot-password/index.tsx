import React from "react";
import ChangePassword from "components/Auth/ChangePassword";
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "lib/noAuth";
import Layout from 'components/Layout';

function ForgotPassword() {
  useNoAuth();
  return (
      <Layout
        title={`Bare Metals Aacademy | Forgot Password`}
        metaDescription="Forgot password"
        canonicalUrl="https://www.baremetals.io/auth/forgot-password"
        pageUrl="https://www.baremetals.io/auth/forgot-password"
        image="/assets/images/forgotp.svg"
        imageHeight={"292"}
        imageWidth={"300"}
        type="forgot password"
      >
        <ChangePassword />
      </Layout>
  );
}

export default withApollo({ ssr: false })(ForgotPassword);
