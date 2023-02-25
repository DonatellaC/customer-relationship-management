import { put, select, takeLatest, delay } from "redux-saga/effects";
import * as actions from "../reducers";

export function* watchCreateNewCustomer() {
  yield takeLatest(actions.createNewCustomer.toString(), takeCreateNewCustomer);
}

export function* takeCreateNewCustomer() {
  try {
    const fields = yield select((state) => state.createNewCustomer.form.fields);
    const customers = yield select(
      (state) => state.createNewCustomer.list.customers
    );

    const createNewCustomer = {
      id: customers.length + 1,
      ...fields,
    };

    yield delay(1500);

    const result = [createNewCustomer, ...customers];

    // yield set("CUSTOMERS", result);
    yield put(actions.createNewCustomerResult(result));
  } catch (error) {
    console.log(error);
    yield put(actions.createNewCustomerError(error.toString()));
  }
}
