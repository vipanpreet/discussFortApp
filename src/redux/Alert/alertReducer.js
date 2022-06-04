import { SET_ALERT, REMOVE_ALERT } from "./alertTypes";

export const alertReducer = (state = { alertState: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return { ...state, alertState: payload };
    case REMOVE_ALERT:
      return { alertState: {} };
    default:
      return state;
  }
};
