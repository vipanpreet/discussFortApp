import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

// reducers
import {userLoginReducer} from './user/userReducer';
import {deliveryReducer} from './delivery/deliveryReducer';
import {alertReducer} from './Alert/alertReducer';
import {companyReducer} from './company/companyReducer';
import {trackingReducer} from './tracking/trackingReducer';
import {checkTokenExpirationMiddleware} from '../middlewares/checkTokenExpirationMiddleware';

const logger = createLogger({
  // ...options
});

const reducer = combineReducers({
  auth: userLoginReducer,
  deliveryState: deliveryReducer,
  companyState: companyReducer,
  trackingState: trackingReducer,
  alertShow: alertReducer,
});

const middleware = [thunk];
// var userInfoFromStorage = null;

// init load user on app load
const initialState = {};

const store = createStore(
  reducer,
  initialState,
  // applyMiddleware(...middleware, logger, checkTokenExpirationMiddleware),
  applyMiddleware(...middleware, checkTokenExpirationMiddleware),
);
export default store;
