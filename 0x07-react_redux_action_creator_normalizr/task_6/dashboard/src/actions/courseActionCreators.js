// Import the action types
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index: index
  };
}

export function boundSelectCourse(index) {
  return dispatch(selectCourse(index));
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index: index
  };
}

export function boundUnSelectCourse(index) {
  return dispatch(unSelectCourse(index));
}
