import notifData from "../../../../notifications.json";
import { normalize, schema } from "normalizr";

// Define users schema
const user = new schema.Entity("users");

// Define messages schema
const message = new schema.Entity("messages", { idAttribute: "guid" });

// Define notifications schema
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

// Normalized data
const normalizedData = normalize(notifData, [notification]);

export default function getAllNotificationsByUser(userId) {
  const result = [];
  const notifications = normalizedData.entities.notification;
  const messages = normalizedData.entities.message;

  // loop to filter by author id & get context
  for (const id in notifications) {
    // filtering (author id === userId)
    if (notifications[id].author === userId) {
      result.push(messages[notifications[id]].context);
    }
  }

  return result;
}

export { normalizedData };
