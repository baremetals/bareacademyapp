import React from "react";
import ContactUsPage from "components/ContactUs";
import { useNoAuthPages } from "lib/noAuth";
import { withApollo } from 'utils/withApollo';


function Contact() {
  useNoAuthPages();
  return (
    <>
      <ContactUsPage />
    </>
  );
}

export default withApollo({ ssr: false })(Contact);
