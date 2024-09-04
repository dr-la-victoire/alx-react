import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import Notifications from "./Notifications";

const root = document.getElementById("root");
ReactDOM.render(
  <div className="main-container">
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </div>,
  root
);
