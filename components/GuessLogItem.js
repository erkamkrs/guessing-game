import { View, Text, StyleSheet } from "react-native"
import Colors from "../constants/colors"

export default function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumber}</Text>
        <Text style={styles.itemText}> Opponent's Guess: {guess}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary600,
        borderWidth: 1,
        borderRadius: 30,
        padding: 16,
        marginVertical: 8,
        backgroundColor: Colors.secondary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
      },
      itemText: {
        fontFamily: 'open-sans',
      },

})
