import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunkMiddleware from 'redux-thunk';

import authReducer from "./reducer/authReducer";

const store = createStore(
    combineReducers({authReducer}),
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;