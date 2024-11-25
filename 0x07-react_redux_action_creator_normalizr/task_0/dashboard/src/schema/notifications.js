import notifData from "../../../../notifications.json";

export default function getAllNotificationsByUser(userId) {
  return notifData
    .filter(notification => notification.author.id === userId)
    .map(notification => notification.context);
}
