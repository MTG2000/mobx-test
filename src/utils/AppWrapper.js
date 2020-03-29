import React from "react";
import "./App.scss";
import ScrollToTop from "./ScrollToTopController";
import { BrowserRouter } from "react-router-dom";
// import "./aos";
import MaterialTheme from "./MaterialTheme";
import { ContextProvider } from "../stores/Context";

const AppWrapper = props => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <MaterialTheme>
          <ScrollToTop>{props.children}</ScrollToTop>
        </MaterialTheme>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default AppWrapper;
