import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import store from "../app/store";
import Head from "next/head";
import nprogress from "nprogress";
import Router from "next/router";
// import SocketsProvider from "../context/socket.context";
import { darkTheme } from "../styles/theme";
import { useApollo } from "../lib/apolloClient";
import { analytics, logEvent } from "lib/admin";

import "../styles/globals.css";
import "nprogress/nprogress.css";

function MyApp({ Component, pageProps }: AppProps) {
  const startLoading = () => {
    if (typeof window !== "undefined") {
      nprogress.start();
    }
  };
  const stopLoading = () => {
    if (typeof window !== "undefined") {
      nprogress.done();
    }
  };

  const log = () => {
    if (typeof window !== "undefined") {
      logEvent(analytics, `${window.location.pathname}_visited`);
    }
  };

  const apolloClient = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    nprogress.configure({ showSpinner: false });
    Router.events.on("routeChangeStart", startLoading);
    Router.events.on("routeChangeComplete", stopLoading);

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }

    if (process.env.NODE_ENV === "production") {
      Router.events.on("routeChangeComplete", log);
    }

    return () => {
      Router.events.on("routeChangeStart", startLoading);
      Router.events.on("routeChangeComplete", stopLoading);
      Router.events.off("routeChangeComplete", log);
    };
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:locale" content="en_GB" />
      </Head>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={darkTheme}>
            {/* <SocketsProvider> */}
            <Component {...pageProps} />
            {/* </SocketsProvider> */}
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
