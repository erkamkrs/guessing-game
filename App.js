import { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameIsOver from './screens/GameOver';
import Colors from './constants/colors';

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn)
 


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

 const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

   // Watch for fonts to be loaded, then hide the splash screen
   useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync()
    }
    if (fontsLoaded) {
      hideSplashScreen()
    }
  }, [fontsLoaded])
  // Initally return null instead of <AppLoading />
  if (!fontsLoaded) {
    return null
  }


  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }


  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }



  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} onGameOver={gameOverHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}  onGameOver={gameOverHandler}/>;

  }

  if (gameIsOver && userNumber) {
    screen = <GameIsOver rounds={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
  }



  return (
    <>
    <StatusBar style="light" />
      <LinearGradient colors={[Colors.primary700, Colors.secondary500]} style={styles.rootScreen}>
        <ImageBackground source={require('./assets/images/background.png')} 
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
        {screen}  
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },


});
