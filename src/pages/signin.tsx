
import React from "react";
import Login from "../components/Auth/Login";
import { useNoAuth } from "lib/noAuth";
import { withApollo } from "../utils/withApollo";
import Footer from 'components/Footer/Footer';


function SignIn() {
  useNoAuth()
  return (
    <>
      <Login />
      <Footer />
    </>
  );
}

export default withApollo({ ssr: false })(SignIn);