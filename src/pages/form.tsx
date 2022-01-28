import { useIsAuth } from 'lib/isAuth';
import React from "react";




const form = () => {
  useIsAuth();

  return (
    <>
      {/* <ErrorPage statusCode={500} /> */}
      {/* <Converse /> */}
    </>
  );
};

export default form;
