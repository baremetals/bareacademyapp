import React from "react";
import Login from "components/Auth/Login";
import { useNoAuth } from "lib/noAuth";
import { withApollo } from "utils/withApollo";
import Layout from 'components/Layout';

function SignIn() {
  useNoAuth();
  return (
      <Layout
        title={`Bare Metals Aacademy | Signin`}
        metaDescription="Sign in to continue with your learning experience"
        canonicalUrl="https://www.baremetals.io/auth/signin"
        pageUrl="https://www.baremetals.io/auth/signin"
        image="/assets/images/login.svg"
        imageHeight={"450"}
        imageWidth={"300"}
        type="login"
      >
        <Login />
      </Layout>
  );
}

export default withApollo({ ssr: false })(SignIn);
