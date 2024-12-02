// Importing action types
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../actions/uiActionTypes";
import { Map } from "immutable";

// Defining the initial state
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

// Creating the reducer function
export default function uiReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return initialState.set("isNotificationDrawerVisible", true);
    case HIDE_NOTIFICATION_DRAWER:
      return initialState.set("isNotificationDrawerVisible", false);
    case LOGIN_SUCCESS:
      return initialState.set("isUserLoggedIn", true);
    case LOGIN_FAILURE:
      return initialState.set("isUserLoggedIn", false);
    case LOGOUT:
      return initialState.set("isUserLoggedIn", false);
    default:
      return state;
  }
}
