import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Color from "../constants/color";

const MinButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    fontFamily: "opne-sans",
    fontSize: 18,
    color: "#fff",
  },
});

export default MinButton;
