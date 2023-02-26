import { all } from "redux-saga/effects";
import { watchCreateNewCustomer } from "./create";
import { watchLoadCustomers } from "./load";

export default function* customer() {
  yield all([watchCreateNewCustomer(), watchLoadCustomers()]);
}
