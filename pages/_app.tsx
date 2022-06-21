import "styles/globals.scss";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import muiTheme from "lib/mui/muiTheme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={muiTheme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;
