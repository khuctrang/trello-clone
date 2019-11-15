import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";
import { PersistGate } from "redux-persist/integration/react";

import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";

const { persistor, store } = Store();

const GlobalStyle = createGlobalStyle`
  html {
    background-color:#333;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    color: #172b4d!important;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
