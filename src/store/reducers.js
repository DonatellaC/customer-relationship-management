import { combineReducers } from "@reduxjs/toolkit";
import createNewCustomer from "../features/reducers";

const rootReducer = combineReducers({
  createNewCustomer,
});

export default rootReducer;
