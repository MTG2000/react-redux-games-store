import React from "react";
import "./App.scss";
import ScrollToTop from "./ScrollToTopController";
import { BrowserRouter } from "react-router-dom";
import "./aos";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import store from "../store";
import { Provider } from "react-redux";

const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#f44336",
      secondary: "#444"
    },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#009688"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#1de9b6"
      // dark: will be calculated from palette.secondary.main,
    }

    // error: will use the default color
  },
  typography: {
    fontFamily: [
      "Farro",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});

const AppWrapper = props => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ScrollToTop>{props.children}</ScrollToTop>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default AppWrapper;
