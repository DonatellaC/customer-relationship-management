import { createSlice } from "@reduxjs/toolkit";

const name = "createNewCustomer";

const initialState = {
  form: {
    fields: {
      first_name: "",
      last_name: "",
      region: "Region 1",
      contact: "",
    },
  },
};

const reducers = {
  createNewCustomer: (state) => {},
  createNewCustomerResult: (state, { payload }) => {},
  createNewCustomerError: (state, { payload }) => {},

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
