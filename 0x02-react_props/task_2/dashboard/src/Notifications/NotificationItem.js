import React from "react";
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

export default NotificationItem;
