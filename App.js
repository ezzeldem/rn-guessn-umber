import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useState } from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gussRounds, setGussRounds] = useState(0);

  const configureNewGameHandler = () => {
    setUserNumber(null);
    setGussRounds(0);
  };

  const startNumber = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGussRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startNumber} />;

  if (userNumber && gussRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (gussRounds > 0) {
    content = (
      <GameOverScreen
        gussRounds={gussRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({ screen: { flex: 1 } });
