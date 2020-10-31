import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "http://localhost:3001";
const routeUrl = baseUrl + "/authors/";

export function getAuthors() {
  return fetch(routeUrl).then(handleResponse).catch(handleError);
}
