import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default function PrimaryButton( { children, onPress }) {
    
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={onPress} 
                style={
                ({pressed}) => pressed ? 
                [styles.buttonInnerContainer, styles.pressed] 
                : styles.buttonInnerContainer
                } 
                android_ripple={{color: Colors.primary800}}
            >    
                <Text style={styles.buttonText} >{children}</Text>
            </Pressable>
        </View>

    );
}


const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 36,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 4,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
        
    }
    });
