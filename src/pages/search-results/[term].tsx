import React from 'react'
import Head from "next/head";
import { useIsAuth } from "lib/isAuth";
import SearchResult from "components/SearchResult";
import { GetServerSideProps } from "next";
import { requireAuthentication } from "lib/requireAuthentication";
import axios from "axios";
type propTypes = {
  data: {
    data: [];
    meta: {};
  };
};

const SeachResultsPage = (props: propTypes) => {
  // console.log(props);
  useIsAuth();
  return (
    <>
      <Head>
        <title>Bare Metals Aacademy | Online Courses</title>
        <meta
          name="description"
          content="Tutorial site for learning web and software development"
        />
        <meta
          property="og:title"
          content="Bare Metals Aacademy | Online Courses"
          key="title"
        />
        <meta property="og:type" content="search" />
      </Head>
      <SearchResult {...props} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (ctx) => {
    const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
    const cookies = JSON.parse(ctx.req.cookies.bareacademy as string);
    const { jwt } = cookies;
    const token = `Bearer ${jwt}`;
    const { term } = ctx.query;

    const getChatData = async () => {
      try {
        return (
          await axios({
            method: "GET",
            url: `${baseUrl}/search`,
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
            data: {
              term,
            },
          })
        ).data;
      } catch (err) {
        console.log("fuck me finally", err);
      }
    };

    const data = await getChatData();

    return {
      props: {data},
    };
  }
);

export default SeachResultsPage
