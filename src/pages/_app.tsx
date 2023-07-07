import '@/styles/globals.css'
import muiTheme from "@/theme/muiTheme";
import { ThemeProvider } from "@mui/material";
import { NextPage } from "next";
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
} & any;
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const getLayout = Component.getLayout || ((page: any) => page);
  // return getLayout(
  //   <QueryClientProvider client={queryClient}>
  //     <ThemeProvider theme={muiTheme}>
  //       <Component {...pageProps} />
  //     </ThemeProvider>
  //     <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
  //   </QueryClientProvider>
  // );
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={muiTheme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </QueryClientProvider>
  );
}
