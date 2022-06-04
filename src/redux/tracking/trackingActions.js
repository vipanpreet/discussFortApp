import axios from 'axios';
import {
  TRACKING_SINGLE_FAIL,
  TRACKING_SINGLE_REQUEST,
  TRACKING_SINGLE_SUCCESS,
  TRACKING_GET_FAIL,
  TRACKING_GET_REQUEST,
  TRACKING_GET_SUCCESS,
  TRACKING_ACCEPT_FAIL,
  TRACKING_ACCEPT_REQUEST,
  TRACKING_ACCEPT_SUCCESS,
  TRACKING_CHECKPOINT_FAIL,
  TRACKING_CHECKPOINT_REQUEST,
  TRACKING_CHECKPOINT_SUCCESS,
  HIDE_COMPLETED,
  TRACKING_AVAILABLE_RESCHEDULE_REQUEST,
  TRACKING_AVAILABLE_RESCHEDULE_SUCCESS,
  TRACKING_AVAILABLE_RESCHEDULE_FAIL,
} from './trackingTypes';
import EncryptedStorage from 'react-native-encrypted-storage';

import {BACK_URI} from '../../config/keys';

export const acceptTrackingAction =
  (id, status, checkpoint) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TRACKING_ACCEPT_REQUEST,
      });
      const {
        auth: {userInfo},
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: userInfo.token,
        },
      };

      const {data} = await axios.post(
        `${BACK_URI}/api/tracking/accept/${id}`,
        {status, checkpoint},
        config,
      );
      console.log(data);
      dispatch({
        type: TRACKING_ACCEPT_SUCCESS,
        payload: data,
      });
      dispatch(getTrackingsAction());
    } catch (error) {
      dispatch({
        type: TRACKING_ACCEPT_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.msg,
      });
    }
  };

export const addCheckpointTrackingAction =
  (id, checkpoint, status) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TRACKING_CHECKPOINT_REQUEST,
      });
      const {
        auth: {userInfo},
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: userInfo.token,
        },
      };

      const {data} = await axios.post(
        `${BACK_URI}/api/tracking/checkpoint/${id}`,
        {checkpoint, status},
        config,
      );

      dispatch({
        type: TRACKING_CHECKPOINT_SUCCESS,
        payload: data,
      });
      dispatch(getTrackingsAction());
    } catch (error) {
      dispatch({
        type: TRACKING_CHECKPOINT_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.msg,
      });
    }
  };

export const getTrackingsAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TRACKING_GET_REQUEST,
    });
    const {
      auth: {userInfo},
      trackingState: {hideCompleted},
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: userInfo.token,
      },
    };

    const response = await axios.get(
      `${BACK_URI}/api/tracking?status=${hideCompleted ? '' : 'DELIVERED'}`,
      config,
    );
    dispatch({
      type: TRACKING_GET_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: TRACKING_GET_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const makeSchedulingAvailableAction =
  id => async (dispatch, getState) => {
    try {
      dispatch({
        type: TRACKING_AVAILABLE_RESCHEDULE_REQUEST,
      });
      const {
        auth: {userInfo},
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: userInfo.token,
        },
      };

      const response = await axios.post(
        `${BACK_URI}/api/tracking/rescheduledflag/${id}`,
        {isRescheduledEnabled: true},
        config,
      );
      dispatch({
        type: TRACKING_AVAILABLE_RESCHEDULE_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: TRACKING_AVAILABLE_RESCHEDULE_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.msg,
      });
    }
  };

export const addTrackingFromNotification =
  trackingId => async (dispatch, getState) => {
    try {
      dispatch({
        type: 'TRACKING_NOTIFICATION_SUCCESS',
        payload: trackingId,
      });
    } catch (error) {
      dispatch({
        type: TRACKING_GET_FAIL,
        payload:
          error.response && error.response.data.msg
            ? error.response.data.msg
            : error.msg,
      });
    }
  };

export const getSingleTrackingAction = id => async (dispatch, getState) => {
  try {
    dispatch({
      type: TRACKING_SINGLE_REQUEST,
    });
    const {
      auth: {userInfo},
    } = getState();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: userInfo.token,
      },
    };

    const {data} = await axios.get(
      `${BACK_URI}/api/tracking/single/${id}`,
      config,
    );
    dispatch({
      type: TRACKING_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TRACKING_SINGLE_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.msg,
    });
  }
};

export const switchHideCompletedAction = data => async dispatch => {
  await EncryptedStorage.setItem('needCompleted', JSON.stringify(data));
  dispatch({
    type: HIDE_COMPLETED,
    payload: data,
  });
};
