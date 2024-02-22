import { Text, StyleSheet, Platform } from "react-native"

export default function Title({children}) {
  return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        marginVertical: 10,
        color: 'white',
        textAlign: 'center',
        padding: 10,
        borderWidth: Platform.select({ios: 2, android: 0}),
        borderColor: 'white',
        borderRadius: 20,
        maxWidth: '80%',
        width: 300,
      },
})
