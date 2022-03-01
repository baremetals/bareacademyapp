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

    return () => {
      Router.events.on("routeChangeStart", startLoading);
      Router.events.on("routeChangeComplete", stopLoading);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Bare Academy</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
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
