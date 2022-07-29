import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { ThemeProvider } from "@mui/styles";
import { CssBaseline } from "@mui/material";

import theme from "./theme";
import "./index.css";

const store = configureStore(
  { reducer: rootReducer },
  compose(applyMiddleware(thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
