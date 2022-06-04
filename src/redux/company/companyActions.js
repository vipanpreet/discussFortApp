import axios from "axios";
import {
  COMPANY_GET_FAIL,
  COMPANY_GET_REQUEST,
  COMPANY_GET_SUCCESS,
  COMPANY_SINGLE_FAIL,
  COMPANY_SINGLE_REQUEST,
  COMPANY_SINGLE_SUCCESS,
} from "./companyTypes";

import { BACK_URI } from "../../config/keys";

export const getCompaniesAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMPANY_GET_REQUEST,
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

    const { data } = await axios.get(`${BACK_URI}/api/company`, config);
    dispatch({
      type: COMPANY_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_GET_FAIL,
      payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg,
    });
  }
};

export const getSingleCompanyAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: COMPANY_SINGLE_REQUEST,
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
    const { data } = await axios.get(`${BACK_URI}/api/company/${id}`, config);
    dispatch({
      type: COMPANY_SINGLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_SINGLE_FAIL,
      payload: error.response && error.response.data.msg ? error.response.data.msg : error.msg,
    });
  }
};
