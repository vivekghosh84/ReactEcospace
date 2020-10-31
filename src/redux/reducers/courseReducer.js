import * as constTypes from "../actions/actionTypeConst";
import intitalState from "./intitalState";

export default function courseReducer(state = intitalState.courses, action) {
  switch (action.type) {
    case constTypes.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case constTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    case constTypes.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.course.id ? action.course : course
      );
    case constTypes.DELETE_COURSE_SUCCESS:
      //return state.filter((course) => course.id !== action.course.id);
      // let courseArray = [...state.courses];
      // let deletedItem = courseArray.findIndex(item => item.id === action.course.id);
      // courseArray.splice(deletedItem, 1);
      //return Object.assign({}, state, {courses: state.filter((course) => course.id !== action.course.id), });

      // return [
      //   ...state,
      //   { courses: state.filter((course) => course.id !== action.course.id) },
      // ];

      return state.filter((course) => course.id !== action.course);
    default:
      return state;
  }
}
