import React from "react";
import Register from "../components/Auth/Register";
import { withApollo } from "../utils/withApollo";
import { useNoAuth } from "lib/noAuth";
import Footer from 'components/Footer/Footer';


function SignUp() {
  useNoAuth();
  return (
    <>
      <Register />
      <Footer />
    </>
  );
}

export default withApollo({ ssr: false })(SignUp);