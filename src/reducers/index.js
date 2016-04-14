import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  authenticated: authenticationReducer,
  routing: routerReducer
});

export default rootReducer;
