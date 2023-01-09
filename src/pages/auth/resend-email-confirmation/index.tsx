import React from 'react'
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "lib/noAuth";
import ResendEmailConfirmation from 'components/Auth/EmailConfirmationPage';
import Layout from 'components/Layout';
const EmailConfirmation = () => {
    useNoAuth();
  return (
      <Layout
        title={`Bare Metals Aacademy | Resend email confirmation`}
        metaDescription="Resend email confirmation"
        canonicalUrl="https://www.baremetals.io/auth/resend-email-confirmation"
        pageUrl="https://www.baremetals.io/auth/resend-email-confirmation"
        image="/assets/images/activate.svg"
        imageHeight={"450"}
        imageWidth={"300"}
        type="resend-email-confirmation"
      >
        <ResendEmailConfirmation />
      </Layout>
  );
}

export default withApollo({ ssr: false })(EmailConfirmation);