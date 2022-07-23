import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MinButton from "../components/MinButton";
import color from "../constants/color";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (value, numOfRound) => (
  <View key={value} style={styles.listItem}>
    <Text style={styles.text}># {numOfRound}</Text>
    <Text>{value}</Text>
  </View>
);

const GameScreen = (props) => {
  const initailGusses = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initailGusses);
  const [pastGusses, setPostGisses] = useState([initailGusses]);
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGussHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greter" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Dont Lie", "Try Again", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((curRounds) => curRounds + 1);
    setPostGisses([nextNumber, ...pastGusses]);
  };

  return (
    <View style={styles.screen}>
      <Text> Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MinButton
          onPress={() => {
            nextGussHandler("lower");
          }}
        >
          <Ionicons name='md-remove' size={24} color='#fff' />
        </MinButton>
        <MinButton
          onPress={() => {
            nextGussHandler("greter");
          }}
        >
          <Ionicons name='md-add' size={24} color='#fff' />
        </MinButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGusses.map((el, index) =>
            renderListItem(el, pastGusses.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "90%",
  },
  listContainer: {
    flex: 1,
    width: "60%",
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    padding: 15,
    maxWidth: "60%",
    marginVertical: 10,
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: "#FFF",
    borderRadius: 10,
    justifyContent: "space-around",
  },
  text: {
    marginHorizontal: 10,
    fontSize: 14,
    color: color.accent,
  },
});

export default GameScreen;
