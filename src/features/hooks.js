import { useDispatch, useSelector } from "react-redux";
import * as actions from "./reducers";

export const useUpdateFields = () => {
  const dispatch = useDispatch();
  const fields = useSelector((state) => state.createNewCustomer.form.fields);

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
    onSubmit: () => {
      console.log("Dispatching CREATE_CUSTOMER action");
      dispatch(actions.createNewCustomer());
    },
  };
};

export const useEditCustomer = (customerID) => {
  const dispatch = useDispatch();

  return {
    onSubmit: () => {
      console.log("Dispatching EDIT_CUSTOMER action");
      dispatch(actions.editCustomer(customerID));
    },
  };
};
