import React from 'react'
import { withApollo } from "utils/withApollo";
import { useNoAuth } from "lib/noAuth";
import ResendEmailConfirmation from 'components/Auth/EmailConfirmationPage';
const EmailConfirmation = () => {
    useNoAuth();
  return <ResendEmailConfirmation />;
}

export default withApollo({ ssr: false })(EmailConfirmation);