import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/Title';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

export default function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');
  
  const { width, height } = useWindowDimensions();


  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      return Alert.alert(
        'Invalid number!', 
        'Number has to be a number between 1 and 99.', 
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
      }
      onPickNumber(chosenNumber);
  }

  const marginTop = height < 400 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position" keyboardVerticalOffset={30}>
        <View style={[styles.rootContainer, {marginTop: marginTop}]}>
          <Title >Guess My Number</Title>
          <Card style={styles.inputContainer}>
              <InstructionText>Enter Number</InstructionText>
              <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                value={enteredNumber}
                onChangeText={numberInputHandler}
                />
              <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                  </View>
                  <View style={styles.buttonContainer}>
                      <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                  </View>
              </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  ); 
}




const styles = StyleSheet.create({
    screen: {
        flex: 1,
      },
      rootContainer: {
        flex: 1,
        alignItems: 'center',
      },
      numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 2,
        color: Colors.secondary500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
      },
      buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    buttonContainer: {
        flex: 1,
    },
});
    


