import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { AppContextProvider } from "./context/AppContextProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AppContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextProvider>,
  rootElement
);
