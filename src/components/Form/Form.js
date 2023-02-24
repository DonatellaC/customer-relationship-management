import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useUpdateFields } from "../../features/hooks.js";
import formStyles from "./styles";

const Form = ({ disabled = false, onSubmit }) => {
  const styles = StyleSheet.create(formStyles());
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
        onChangeText={(v) => setFormField("firstName", v)}
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
        onChangeText={(v) => setFormField("lastName", v)}
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
        onChangeText={(v) => setFormField("region", v)}
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
        onChangeText={(v) => setFormField("contact", v)}
      />

      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
