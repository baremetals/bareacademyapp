import React from 'react'
import TermsAndConditionsPage from "components/TermsAndConditions";
import { useNoAuthPages } from "lib/noAuth";
import { withApollo } from 'utils/withApollo';

const TermsOfService = () => {
    useNoAuthPages();
    return (
        <>
            <TermsAndConditionsPage />
        </>
    )
}

export default withApollo({ ssr: false })(TermsOfService);
