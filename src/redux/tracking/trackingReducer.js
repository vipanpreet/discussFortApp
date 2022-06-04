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

export const trackingReducer = (
  state = {trackingsLoading: true, hideCompleted: false},
  action,
) => {
  switch (action.type) {
    case TRACKING_GET_REQUEST:
      return {...state, trackingsLoading: true};

    case TRACKING_GET_SUCCESS:
      return {
        ...state,
        trackingsLoading: false,
        trackings: action.payload.orderTrackings,
        trackingsCount: action.payload.totalOrderTrackingsCount,
      };

    case TRACKING_GET_FAIL:
      return {...state, trackingsLoading: false, error: action.payload};

    case TRACKING_SINGLE_REQUEST:
      return {...state, loading: true};

    case TRACKING_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        singleTracking: action.payload.singleTracking,
        error: null,
      };

    case TRACKING_SINGLE_FAIL:
      return {...state, loading: false, error: action.payload};

    case TRACKING_ACCEPT_REQUEST:
      return {...state, loading: true};

    case TRACKING_ACCEPT_SUCCESS:
      return {...state, loading: false, singleTracking: action.payload};

    case 'TRACKING_NOTIFICATION_SUCCESS':
      return {...state, loading: false, trackingNotificationId: action.payload};

    case 'TRACKING_NOTIFICATION_RESET':
      return {...state, loading: false, trackingNotificationId: ''};

    case TRACKING_ACCEPT_FAIL:
      return {...state, loading: false, error: action.payload};

    case HIDE_COMPLETED:
      return {...state, loading: false, hideCompleted: action.payload};

    case TRACKING_CHECKPOINT_REQUEST:
      return {...state, loading: true};

    case TRACKING_CHECKPOINT_SUCCESS:
      return {...state, loading: false, singleTracking: action.payload};

    case TRACKING_CHECKPOINT_FAIL:
      return {...state, loading: false, error: action.payload};

    case TRACKING_AVAILABLE_RESCHEDULE_REQUEST:
      return {...state, loading: true};

    case TRACKING_AVAILABLE_RESCHEDULE_SUCCESS:
      return {...state, loading: false, singleTracking: action.payload};

    case TRACKING_AVAILABLE_RESCHEDULE_FAIL:
      return {...state, loading: false, error: action.payload};

    default:
      return state;
  }
};
