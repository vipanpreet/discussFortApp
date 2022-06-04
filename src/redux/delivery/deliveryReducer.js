import {
  DELIVERY_GET_FAIL,
  DELIVERY_GET_REQUEST,
  DELIVERY_GET_SUCCESS,
  DELIVERY_SINGLE_FAIL,
  DELIVERY_SINGLE_REQUEST,
  DELIVERY_SINGLE_SUCCESS,
} from "./deliveryTypes";

export const deliveryReducer = (state = {}, action) => {
  switch (action.type) {
    case DELIVERY_GET_REQUEST:
      return { ...state, loading: true };

    case DELIVERY_GET_SUCCESS:
      return { ...state, loading: false, deliveries: action.payload.deliveries };

    case DELIVERY_GET_FAIL:
      return { ...state, loading: false, error: action.payload };

    case DELIVERY_SINGLE_REQUEST:
      return { ...state, loading: true };

    case DELIVERY_SINGLE_SUCCESS:
      return { ...state, loading: false, singleDelivery: action.payload };

    case DELIVERY_SINGLE_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
