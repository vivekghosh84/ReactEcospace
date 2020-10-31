import * as constTypes from "./actionTypeConst";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCoursesSucccess(courses) {
  return { type: constTypes.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
  return { type: constTypes.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
  return { type: constTypes.CREATE_COURSE_SUCCESS, course };
}

export function deleteCourseSuccess(course) {
  return { type: constTypes.DELETE_COURSE_SUCCESS, course };
}

//thunks
export function loadCourses() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSucccess(courses));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveCourses(course) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return courseApi
      .saveCourse(course)
      .then((savedCourses) => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourses))
          : dispatch(createCourseSuccess(savedCourses));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteCourse(course) {
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return courseApi
      .deleteCourse(course)
      .then((deletedCourse) => {
        dispatch(deleteCourseSuccess(course));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
