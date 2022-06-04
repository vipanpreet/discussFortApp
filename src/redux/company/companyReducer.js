import {
  COMPANY_GET_FAIL,
  COMPANY_GET_REQUEST,
  COMPANY_GET_SUCCESS,
  COMPANY_SINGLE_FAIL,
  COMPANY_SINGLE_REQUEST,
  COMPANY_SINGLE_SUCCESS,
} from "./companyTypes";

export const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case COMPANY_GET_REQUEST:
      return { ...state, loading: true };

    case COMPANY_GET_SUCCESS:
      return { ...state, loading: false, companies: action.payload.companies };

    case COMPANY_GET_FAIL:
      return { ...state, loading: false, error: action.payload };

    case COMPANY_SINGLE_REQUEST:
      return { ...state, loading: true };

    case COMPANY_SINGLE_SUCCESS:
      return { ...state, loading: false, singleCompany: action.payload };

    case COMPANY_SINGLE_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
