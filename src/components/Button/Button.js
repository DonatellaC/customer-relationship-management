import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const width = Dimensions.get("window").width;

const Button = (props) => {
  return (
    <TouchableOpacity style={styles.btnBody} onPress={props.onPress}>
      <Text style={styles.btnText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnBody: {
    backgroundColor: "#3f51b5",
    paddingVertical: 8,
    width: width / 1.3,
    borderRadius: 5,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
});

export { Button };
