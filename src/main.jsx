import { store } from "./store/store";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n"; // Your i18n configuration
import "./index.css";
import App from "./App.jsx"; // Your main application component

ReactDOM.createRoot(document.getElementById("root")).render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
);
