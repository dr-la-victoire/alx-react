import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";

export default function Notifications() {
  const style = {
    float: "right",
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
      <button
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
      >
        x
      </button>
    </div>
  );
}
