import courseReducer, { initialState } from "./courseReducer";
import notificationReducer, { initialState } from "./notificationReducer";
import uiReducer, { defaultState } from "./uiReducer";
import { Map } from "immutable";

export const defaultRootState = {
  courses: Map(initialState),
  notifications: Map(initialState),
  ui: Map(defaultState)
};

const rootReducer = {
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer
};

export default rootReducer;
