import React from "react";
import Register from "components/Auth/Register";
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "lib/noAuth";
import Layout from 'components/Layout';

function SignUp() {
  useNoAuth();
  return (
    <Layout
      title={`Bare Metals Aacademy | Signup`}
      metaDescription="Register and checkout all the latest courses."
      canonicalUrl="https://www.baremetals.io/auth/signup"
      pageUrl="https://www.baremetals.io/auth/signup"
      image="/assets/images/reg.svg"
      imageHeight={"620"}
      imageWidth={"600"}
      type="register"
    >
      <Register />
    </Layout>
  );
}

export default withApollo({ ssr: false })(SignUp);
