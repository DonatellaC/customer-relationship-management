import React from "react";
import { View, TouchableOpacity } from "react-native";

export default function List() {
  return (
    <TouchableOpacity
      onPress={() => navigate("Edit Customer", { customerID: item.id })}
    >
      <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
        <Text key={"fn"}>First Name: {item.first_name}</Text>
        <Text key={"ln"}>Last Name: {item.last_name}</Text>
      </View>
    </TouchableOpacity>
  );
}
