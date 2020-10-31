import * as constTypes from "../actions/actionTypeConst";
import initialState from "./intitalState";

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case constTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
