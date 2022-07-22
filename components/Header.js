import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Color from "../constants/color";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    backgroundColor: Color.primary,
    paddingTop: 60,
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
