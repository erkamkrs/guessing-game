import { View, Image, StyleSheet, Text, useWindowDimensions, ScrollView } from "react-native"
import Title from "../components/Title"
import Colors from "../constants/colors"
import PrimaryButton from "../components/PrimaryButton"

export default function GameOver({rounds, userNumber, onStartNewGame}) {
    const {width, height} = useWindowDimensions()

    let imageSize = 300;

    if (width < 380) {
        imageSize = 200;
    }
     
    if (height < 400) {
        imageSize = 100;
    }

    const imageStyles = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    }


  return (
    <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyles]}>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
        <Text style={styles.summaryText}>
        I needed this many rounds <Text style={styles.highlight}>{rounds}</Text> guess the number <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    imageContainer: {

        borderWidth: 3,
        borderColor: Colors.primary700,
        overflow: 'hidden',
        marginVertical: 20,
        alignSelf: 'center',},
    image: {
        width:  "100%",
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        textAlign: 'center',
        fontSize: 24,
        margin: 20,
    },
    highlight: {
        color: Colors.primary500,
        fontFamily: 'open-sans-bold',
    }
})