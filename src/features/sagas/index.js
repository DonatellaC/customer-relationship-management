import { all } from "redux-saga/effects";
import { watchCreateNewCustomer } from "./create";
import { watchLoadCustomers } from "./load";
import { watchDeleteCustomers } from "./delete";

export default function* customer() {
  yield all([
    watchCreateNewCustomer(),
    watchLoadCustomers(),
    watchDeleteCustomers(),
  ]);
}
