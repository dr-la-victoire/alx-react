import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Notifications from "./Notifications";

ReactDOM.render(
  <div className="main">
    <div className="root-notifications">
      <Notifications />
    </div>
    <App />
  </div>,
  document.getElementById("root")
);
