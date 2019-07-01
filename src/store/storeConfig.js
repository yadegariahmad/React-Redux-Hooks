import { createStore, combineReducers } from "redux";
import nameReducer from './reducers/nameReducer';
import counterReducer from './reducers/counterReducer';

const INITIAL_STATE = {};

export default createStore(
  combineReducers({
    name: nameReducer,
    counter: counterReducer
  }),
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);