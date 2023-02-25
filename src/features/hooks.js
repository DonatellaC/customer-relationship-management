import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PENDING, INPROGRESS } from "../utilities/helpers";
import * as actions from "./reducers";

export const useUpdateFields = (customerID = null) => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.createNewCustomer.form.fields);
  const status = useSelector((state) => state.customer.edit.status);

  console.log(
    "customer ID ::: ",
    customerID,
    status,
    customerID && status !== INPROGRESS
  );

  useEffect(() => {
    if (customerID && status === PENDING) {
      dispatch(actions.setForm(customerID));
    }
  }, [customerID, status]);

  return {
    fields,
    setFormField: (field) => (value) => {
      console.log(`Updating field ${field} to ${value}`);

      dispatch(actions.setFormField({ field, value }));
    },
  };
};

export const useNewCustomer = () => {
  const dispatch = useDispatch();

  return {
    // resetFormField: () => {
    //   return dispatch(actions.setFormField());
    // },
    onSubmit: () => {
      console.log("Dispatching CREATE_CUSTOMER action");
      dispatch(actions.createNewCustomer());
    },
  };
};

export const useCreateCustomerStatus = () => {
  return useSelector((state) => state.customer.create.status);
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();
  const status = useEditCustomerStatus();

  return {
    status,
    onSubmit: () => {
      console.log("Dispatching EDIT_CUSTOMER action");
      dispatch(actions.editCustomer(customerID));
    },
  };
};

export const useEditCustomerStatus = () => {
  return useSelector((state) => state.customer.edit.status);
};

export const useListCustomers = () => {
  return useSelector((state) => state.customer.list.customers);
};
