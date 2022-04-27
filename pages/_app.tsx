import "@styles/globals.css";
import MainNav from "@components/layout/MainNav";

import { appWithTranslation } from "next-i18next";

import React from "react";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <MainNav mainPage={<Component {...pageProps} />} />;
}

export default appWithTranslation(MyApp);
