import axios from "axios";
import {
  DELIVERY_GET_FAIL,
  DELIVERY_GET_REQUEST,
  DELIVERY_GET_SUCCESS,
  DELIVERY_SINGLE_FAIL,
  DELIVERY_SINGLE_REQUEST,
  DELIVERY_SINGLE_SUCCESS,
} from "./deliveryTypes";

import { BACK_URI } from "../../config/keys";

export const getDeliveriesAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELIVERY_GET_REQUEST,
    });
    const {
      auth: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.get(`${BACK_URI}/api/delivery`, config);
    dispatch({
      type: DELIVERY_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELIVERY_GET_FAIL,
      payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg,
    });
  }
};

export const getSingleDeliveryAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELIVERY_SINGLE_REQUEST,
    });
    const {
      auth: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: userInfo.token,
      },
    };

    const { data } = await axios.get(`${BACK_URI}/api/tracking/${id}`, config);
    dispatch({
      type: DELIVERY_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELIVERY_SINGLE_FAIL,
      payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg,
    });
  }
};
