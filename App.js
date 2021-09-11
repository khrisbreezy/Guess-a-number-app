import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import StartGame from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fecthFonts = () => {  
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameRounds, setGameRounds] = useState(0);
  const [dataLoading, setDataLoading] = useState(false);

  if (!dataLoading) {
    return <AppLoading startAsync={fecthFonts} onFinish={() => setDataLoading(true)} onError={console.warn} />;
  }

  const restartGameHandler = () => { 
    setGameRounds(0);
    setUserNumber(null);
  } 

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };
  
  const gameOverHandler = numOfRounds => {
    setGameRounds(numOfRounds);  
  };

  let content =  <StartGame onStartGame={startGameHandler} />;
  if (userNumber && gameRounds <= 0) {
    content =   <GameScreen userChoice={userNumber} gameOverFn={gameOverHandler} />
  } else if (gameRounds > 0) {
    content = <GameOverScreen guessedNum={userNumber} totalRounds={gameRounds} restartGame={restartGameHandler}  />
  }

  return (
    <View style={styles.screen}>
      <Header title="GUESS THE NUMBER" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
  
});
