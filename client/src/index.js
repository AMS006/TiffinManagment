import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, useLocation } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.withCredentials = true;
if (localStorage.providerToken) {
  const { providerToken } = JSON.parse(localStorage.providerToken);
  axios.defaults.headers.common["Authorization"] = `Bearer ${providerToken}`;
} else if (localStorage.userToken) {
  const { userToken } = JSON.parse(localStorage.userToken);
  axios.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
}
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <Provider store={store}>
      <Toaster />
      <App />
    </Provider>
  </BrowserRouter>
);
