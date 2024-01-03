import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Title, Subheading } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStepCounter from "../../hooks/useStepCounter";

const HomeScreen = ({ navigation }) => {
    const stepCount = useStepCounter();

    const saveStepCount = async () => {
        try {
          await AsyncStorage.setItem('stepCount', String(stepCount));
          console.log('Step count saved successfully.');
        } catch (error) {
          console.error('Error saving step count:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Title style={styles.title}>FitTrack</Title>
            <Subheading style={styles.subtitle}>Welcome to your fitness journey!</Subheading>

            {/* Add buttons or components for various features */}
            <Button
                mode="contained"
                onPress={() => navigation.navigate('Workout')}
                style={styles.button}
            >
                Start Workout
            </Button>

            <Button
                mode="outlined"
                onPress={() => navigation.navigate('Stats')}
                style={styles.button}
            >
                View Stats
            </Button>

            <View>
                <Text>Step Count: {stepCount}</Text>
                <Button title="Save Step Count" onPress={saveStepCount} />
            </View>
        </View>
    );
};

/*
HomeScreen.navigationOptions = {
    headerShown: false,
};
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black', // Set background color to black
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'white', // Set text color to white
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 32,
    },
    button: {
        marginVertical: 8,
    },
});

export default HomeScreen;
