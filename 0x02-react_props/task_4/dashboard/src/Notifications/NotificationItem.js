import React from "react";
import propTypes from "prop-types";
import "./Notifications.css";

const NotificationItem = ({ type, html, value }) => {
  let notificationContent = null;
  if (type && value) {
    notificationContent = <li data-notification-type={type}>{value}</li>;
  }
  if (html) {
    notificationContent = (
      <>
        {notificationContent}
        <li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
      </>
    );
  }
  return <>(notificationContent)</>;
};

NotificationItem.propTypes = {
  type: propTypes.string.isRequired,
  value: propTypes.string,
  html: propTypes.shape({ __html: propTypes.string })
};

export default NotificationItem;
