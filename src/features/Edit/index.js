import React from "react";
import { useRoute } from "@react-navigation/native";
import { useEditCustomer } from "../hooks";
import Form from "../../components/Form/Form";

export default function Edit() {
  const { params } = useRoute();
  const { customerID } = params;
  const { status, onSubmit } = useEditCustomer(customerID);

  return (
    <Form handleSubmit={onSubmit} status={status} customerID={customerID} />
  );
}
