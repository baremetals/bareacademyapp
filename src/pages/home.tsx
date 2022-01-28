import React from "react";
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import Home from "components/Home";
import { useIsAuth } from "../lib/isAuth";


function HomePage() {
  useIsAuth();
  return (
    <>
      <Home />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    return {
      props: {},
    };
  }
);

export default HomePage;
