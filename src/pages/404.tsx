import React from 'react'
import ErrorPage from "components/ErrorPage";

const PageNotFound = () => {
    return <ErrorPage statusCode={404} />;
}

export default PageNotFound
