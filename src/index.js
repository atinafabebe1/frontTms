import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/common/login";
import { Provider } from "react-redux";
import { store } from "./Store";
import App from "./App";
import VehicleRequesting from "./components/employee/request.js";
import NavbarVicePresident from "./components/vicePresident/navbarVicePresident";
import HomeHeadOfDeployment from "./components/headOfDeployment/navbarHeadOfDeployement";
import SignUp from "./components/common/signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      {/* <HomeHeadOfDeployment /> */}
    </Provider>
  </BrowserRouter>
);
