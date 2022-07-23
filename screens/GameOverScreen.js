import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import MinButton from "../components/MinButton";
import defultStyles from "../constants/defult-styles";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={defultStyles.title}>Game adssdaOver</Text>
      <View style={styles.imgBox}>
        <Image
          style={styles.image}
          fadeDuration={300}
          source={require("../assets/success.png")}
        />
      </View>
      <Text style={defultStyles.bodyText}>
        Number Of Round:
        <Text style={styles.insedText}> {props.gussRounds}</Text>
      </Text>
      <Text style={defultStyles.bodyText}>
        Number Was:
        <Text style={styles.insedText}> {props.userNumber}</Text>
      </Text>
      <MinButton onPress={props.onRestart}>New Game</MinButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgBox: {
    borderWidth: 3,
    borderColor: "#76dbe9",
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  insedText: { color: "#8f42db", fontFamily: "opne-sans-bold" },
});

export default GameOverScreen;
