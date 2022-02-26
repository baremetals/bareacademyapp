import React from 'react'
import PrivacyPage from "components/PrivacyPage";
import { useNoAuthPages } from "lib/noAuth";
import { withApollo } from 'utils/withApollo';
export const Privacy = () => {
    useNoAuthPages();
    return (
        <>
            <PrivacyPage />
        </>
    )
}

export default withApollo({ ssr: false })(Privacy);
