import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors";

export default function NumberContainer({children}) {

  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    numberContainer: {
        borderWidth: 4,
        borderColor: Colors.secondary500,
        borderRadius: 10,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.secondary500,
        fontSize: 36,
        fontFamily: 'open-sans-bold',
    },
})