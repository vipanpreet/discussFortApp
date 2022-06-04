import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';
import {
  ASSIGN_TOKEN_FAIL,
  ASSIGN_TOKEN_REQUEST,
  ASSIGN_TOKEN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from './userTypes';

import {BACK_URI} from '../../config/keys';
import {HIDE_COMPLETED} from '../tracking/trackingTypes';

export const getCreds = () => async dispatch => {
  try {
    let data = await EncryptedStorage?.getItem('userInfo');
    let needCompleted = await EncryptedStorage?.getItem('needCompleted');
    if (data !== undefined) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: JSON.parse(data),
      });
    }
    if (needCompleted !== undefined) {
      dispatch({
        type: HIDE_COMPLETED,
        payload: needCompleted,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = (email, password) => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const {data} = await axios.post(
      `${BACK_URI}/api/auth/login`,
      {email, password},
      config,
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    await EncryptedStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const logout = () => async dispatch => {
  await EncryptedStorage.clear();
  dispatch({type: USER_LOGOUT});
};
