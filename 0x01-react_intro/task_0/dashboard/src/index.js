import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Notifications from "./Notifications";

const inject = document.getElementById("root");
ReactDOM.render(
  <div className="main">
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </div>,
  inject
);
