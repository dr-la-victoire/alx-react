import React from "react";
import propTypes from "prop-types";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

const Notifications = displayDrawer => {
  const style = {
    display: "none"
  };

  if (displayDrawer) {
    style.display = "block";
  }

  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      <div className="Notifications" style={style}>
        <p style={{ display: "inline", marginRight: "80%" }}>
          Here is the list of notifications
        </p>
        <button
          aria-label="Close"
          onClick={console.log("Close button has been clicked")}
        >
          <img style={{ display: "inline" }} src={closeIcon} alt="Close" />
        </button>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={getLatestNotification()} />
        </ul>
      </div>
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: propTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: true
};

export default Notifications;
