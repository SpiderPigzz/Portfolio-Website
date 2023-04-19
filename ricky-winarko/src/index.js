//Entry point for the webpack and deals with the routes
import React from "react";
import ReactDOM from "react-dom/client";
import WebRoute from "./utils/router";
import AuthProvider from "./providers/AuthProvider/AuthProvider";
import GraphQLProvider from "./providers/GraphQLProvider";
import { ThemeProvider, responsiveFontSizes, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

import "index.css";
import ChatProvider from "providers/ChatProvider/ChatProvider";
//context: https://github.com/vasturiano/react-force-graph/issues/409

let theme = createTheme({
  typography: {
    fontFamily: "Helvetica Neue, Roboto",
  },
  palette: {
    mode: "dark",
    background: {
      default: "#120411",
    },
    primary: {
      main: "#df0ffe",
    },
    // secondary: {
    //   main: "rgb(255, 105, 127)",
    // },
    // normal: {
    //   main: "#2596be",
    // },
  },
});
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AuthProvider>
      <ChatProvider>
        <SnackbarProvider maxSnack={3}>
          <GraphQLProvider>
            <WebRoute />
          </GraphQLProvider>
        </SnackbarProvider>
      </ChatProvider>
    </AuthProvider>
  </ThemeProvider>
);
