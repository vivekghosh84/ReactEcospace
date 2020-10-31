import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "http://localhost:3001";
const routeUrl = baseUrl + "/courses/";

export function getCourses() {
  return fetch(routeUrl).then(handleResponse).catch(handleError);
}

export function saveCourse(course) {
  //return fetch(routeUrl + (course.id | ""), {
  return fetch(routeUrl + (course.id ? course.id : ""), {
    method: course.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(course),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return fetch(routeUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
