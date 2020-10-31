import * as constTypes from "../actions/actionTypeConst";
import initialState from "./intitalState";

// export default function apiCallsStatusReducer(
//   state = initialState.apiCallsInProgress,
//   action
// ) {
//   switch (action.type) {
//     case constTypes.BEGIN_API_CALL:
//       return state + 1;
//     case constTypes.END_API_CALL:
//       return state - 1;
//     default:
//       return state;
//   }
// }

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallsStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === constTypes.BEGIN_API_CALL) {
    return state + 1;
  } else if (
    action.type === constTypes.API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}
