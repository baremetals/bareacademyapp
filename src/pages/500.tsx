import React from 'react'
import ErrorPage from "components/ErrorPage";

const ServerError = () => {
  return <ErrorPage statusCode={500} />;
};

export default ServerError
