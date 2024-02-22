import {Text, StyleSheet} from 'react-native';
import Colors from '../constants/colors';

export default function InstructionText({children, style}) {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}


const styles = StyleSheet.create({
    instructionText: {
        color: Colors.secondary500,
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
      },
})