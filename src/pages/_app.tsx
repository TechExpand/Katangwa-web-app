import '@/styles/globals.css'
import muiTheme from "@/theme/muiTheme";
import { ThemeProvider } from "@mui/material";
import { NextPage } from "next";
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
} & any;
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: any) => page);
  return getLayout(
    <ThemeProvider theme={muiTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
