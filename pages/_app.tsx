import MainNav from "@components/layout/MainNav";
import "@styles/globals.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import React from "react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <MainNav mainPage={<Component {...pageProps} />} />
    </SessionProvider>
  );
}

export default appWithTranslation(MyApp);
