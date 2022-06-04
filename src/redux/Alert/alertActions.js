import {v4 as uuidv4} from 'uuid';
import {SET_ALERT, REMOVE_ALERT} from './alertTypes';

export const setAlert = (message, alertType, timeout) => dispatch => {
  const id = uuidv4();
  dispatch({
    type: SET_ALERT,
    payload: {message, alertType, timeout, id},
  });
  if (timeout) {
    setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout);
  }
};
export const removeAlert = () => dispatch => {
  setTimeout(() => dispatch({type: REMOVE_ALERT}), 500);
};
