import { all } from "redux-saga/effects";
import { watchCreateNewCustomer } from "./create";

export default function* customer() {
  yield all([watchCreateNewCustomer()]);
}
