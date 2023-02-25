import { createSlice } from "@reduxjs/toolkit";
import { PENDING, REQUESTING, SUCCESS, ERROR } from "../utilities/helpers";

const name = "createNewCustomer";

const initialState = {
  list: {
    status: PENDING,
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
  error: {
    message: "",
  },
};

const reducers = {
  createNewCustomer: (state) => {
    state.create.status = REQUESTING;
  },
  createNewCustomerResult: (state, { payload }) => {
    state.create.status = SUCCESS;
    state.list.customers = payload;
    state.form.fields = initialState.form.fields;
    state.create = initialState.create;
  },
  createNewCustomerError: (state, { payload }) => {
    state.create.status = ERROR;
    state.create.error = payload;
    state.form.fields = initialState.form.fields;
  },

  createNewCustomerReset: (state) => {
    state.create = initialState.create;
  },
  editCustomer: (state) => {
    state.edit.status = REQUESTING;
  },
  setForm: (state, { payload }) => {
    const customer = state.list.customers.find((a) => (a.id = payload));

    if (customer) {
      state.form.fields = customer;
    } else {
      state.error.message = `could not find customer with id: ${payload}`;
    }
  },
  editCustomerResult: (state, { payload }) => {
    state.edit.status = SUCCESS;
    state.list.customers = payload;
    state.form.fields = initialState.form.fields;
    state.edit = initialState.edit;
  },
  editCustomerError: (state) => {
    state.edit.status = ERROR;
    state.error.message = payload;
    state.form.fields = initialState.form.fields;
  },
  editcCustomerReset: (state) => {
    state.edit = initialState.edit;
  },

  editCustomerStatus: (state, { payload }) => {
    state.edit = payload;
  },

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
  setForm,
  editCustomer,
  editCustomerResult,
  editCustomerError,
  editCustomerReset,
  editCustomerStatus,
  setFormField,
} = slice.actions;

export default slice.reducer;
