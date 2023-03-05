import { useEffect } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useUpdateFields, useEditCustomer } from "../hooks";
import Form from "../../components/Form/Form";

export default function Edit() {
  const { customer } = useRoute().params;
  const { fields, setFormField } = useUpdateFields();

  useEffect(() => {
    setFormField("firstName", customer?.firstName);
    setFormField("lastName", customer?.lastName);
    setFormField("region", customer?.region);
    setFormField("contact", customer?.contact);
  }, [customer]);
  const { onSubmit } = useEditCustomer();
  console.log(customer, "***Edit component, customer");

  return (
    <View>
      <Form
        firstName={fields.firstName}
        lastName={fields.lastName}
        region={fields.region}
        contact={fields.contact}
        setFormField={setFormField}
        onSubmit={onSubmit}
      />
    </View>
  );
}
