import '@/styles/globals.css'
import muiTheme from "@/theme/muiTheme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={muiTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
