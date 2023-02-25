import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { useNewCustomer, useUpdateFields } from "../../features/hooks.js";
import { Button } from "../../components/Button/Button";
import formStyles from "./styles";

const Form = ({ disabled = false }) => {
  const styles = StyleSheet.create(formStyles());
  const { onSubmit } = useNewCustomer();
  const { fields, setFormField } = useUpdateFields();

  const { firstName, lastName, region, contact } = fields;

  return (
    <View style={styles.container}>
      <TextInput
        key={"firstName"}
        placeholder="First Name"
        value={firstName}
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 4,
          padding: 15,
        }}
        onChangeText={setFormField("firstName")}
      />

      <View style={{ height: 15, width: "100%" }}></View>

      <TextInput
        key={"lastName"}
        placeholder="Last Name"
        value={lastName}
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 4,
          padding: 15,
        }}
        onChangeText={setFormField("lastName")}
      />
      <View style={{ height: 15, width: "100%" }}></View>

      <TextInput
        key={"region"}
        placeholder="Region"
        value={region}
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 4,
          padding: 15,
        }}
        onChangeText={setFormField("region")}
      />
      <View style={{ height: 15, width: "100%" }}></View>
      <TextInput
        key={"contact"}
        placeholder="Contact"
        value={contact}
        style={{
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 4,
          padding: 15,
        }}
        onChangeText={setFormField("contact")}
      />
      <Button onPress={onSubmit} text="Submit" />
    </View>
  );
};

export default Form;
