import { View, StyleSheet, Alert, FlatList, ScrollView, useWindowDimensions} from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../components/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

  let minBoundary = 1;
  let maxBoundary = 100;


export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();


  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;

  }, [])

  function nextGuessHandler(direction) {
    if (direction === 'lower' && currentGuess < userNumber ||
        direction === 'higher' && currentGuess > userNumber) {
      Alert.alert("Don't lie!", "You know that this is wrong...",
       [{text: "Sorry!", style: "cancel"}]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
      
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
  }

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <> 
  <NumberContainer>{currentGuess}</NumberContainer> 
    <Card>
      <InstructionText style={styles.instructionText}>Higher or Lower </InstructionText>
      <View style={styles.buttonsContainerWide}> 
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower", )}>
              <Ionicons name="remove-circle-outline" size={24} color='white' />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher", )}>
              <Ionicons name="add-circle-outline" size={24} color="white" />
            </PrimaryButton>
          </View>
      </View>
  </Card>
  </>
  )

  if (width > 500) {
    content = (
      <>
        <View>
          <InstructionText style={styles.instructionText}>
            Higher or Lower 
          </InstructionText>
          <View style={styles.buttonsContainerWide}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "lower", )}>
                <Ionicons name="remove-circle-outline" size={24} color='white' />
              </PrimaryButton>
            </View>
            <NumberContainer>{currentGuess}</NumberContainer> 
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, "higher", )}>
                <Ionicons name="add-circle-outline" size={24} color="white" />
              </PrimaryButton>
            </View>
          </View>
        </View>
      </>
    );
  }
  


  return (
    <View style={styles.screen}>
    <Title>Opponent's Guess</Title>
    {content}
    <View style={styles.listContainer}>
      <FlatList 
      data={guessRounds} 
      renderItem={itemData => 
      <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}>
        {itemData.item}
      </GuessLogItem>}
        keyExtractor={(item) => item}/>
    </View>
    </View>
  )
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 40,
        alignItems: 'center',
    },
    instructionText: {
      marginBottom: 30,
    },
    buttonsContainer: {
        flexDirection: 'column',
    },
    buttonsContainerWide: {
      flexDirection: 'row',
      alignContent: 'center',
      width: '100%',
    },
    buttonContainer: {
        flex: 1,
        margin: 10,
    },
    listContainer: {
      flex: 1,
      padding: 16,
    },

})
