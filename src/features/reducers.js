import { createSlice } from "@reduxjs/toolkit";
import { PENDING, REQUESTING, SUCCESS, ERROR } from "../utilities/helpers";

const name = "createNewCustomer";

const initialState = {
  list: {
    customers: [],
  },
  form: {
    fields: {
      first_name: "",
      last_name: "",
      region: "Region 1",
      contact: "",
    },
  },
  create: {
    status: PENDING,
  },
  edit: {
    status: PENDING,
  },
};

const reducers = {
  createNewCustomer: (state) => {
    state.create.status = REQUESTING;
  },
  createNewCustomerResult: (state, { payload }) => {
    state.create.status = SUCCESS;
    state.list.customers = payload;
  },
  createNewCustomerError: (state, { payload }) => {
    state.create.status = ERROR;
    state.create.error = payload;
  },

  createNewCustomerReset: (state, { payload }) => {},

  setFormField: (state, { payload }) => {
    const current = state.form.fields;
    const { field, value } = payload;

    const fields = {
      ...current,
      [field]: value,
    };

    state.form.fields = fields;
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  createNewCustomer,
  createNewCustomerResult,
  createNewCustomerError,
  createNewCustomerReset,
  setFormField,
} = slice.actions;

export default slice.reducer;
