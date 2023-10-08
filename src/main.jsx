import "./index.css";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import App from "./App.jsx"; // Your main application component
import i18n from "./utils/i18n"; // Your i18n configuration
import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store";
import { LangProvider } from "./context/LangContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LangProvider>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </LangProvider>
);
