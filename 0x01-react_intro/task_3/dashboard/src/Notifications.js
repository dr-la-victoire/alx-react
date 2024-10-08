import React from "react";
import "./Notifications.css";
import close from "./close.png";
import { getLatestNotification } from "./utils";

export default function Notifications() {
  const style = {
    float: "right"
  };

  const imageStyle = {
    width: "20px",
    height: "20px"
  };
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        style={style}
        aria-label="Close"
        onClick={() => console.log("Close button has been clicked")}
      >
        <img style={imageStyle} src={close} alt="Close Button" />
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
