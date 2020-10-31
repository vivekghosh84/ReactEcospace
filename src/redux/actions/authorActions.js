import * as constTypes from "./actionTypeConst";
import * as authorApi from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAuthorSuccess(authors) {
  return { type: constTypes.LOAD_AUTHORS_SUCCESS, authors };
}

//thunk
export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorSuccess(authors));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
