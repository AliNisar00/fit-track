import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Title, Subheading } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title style={styles.title}>FitTrack</Title>
            <Subheading style={styles.subtitle}>Welcome to your fitness journey!</Subheading>

            {/* Add buttons or components for various features */}
            <Button
                mode="contained"
                onPress={() => navigation.navigate('StepCounter')}
                style={styles.button}
            >
                Start Step Counter
            </Button>

            <Button
                mode="outlined"
                onPress={() => navigation.navigate('Stats')}
                style={styles.button}
            >
                View Stats
            </Button>
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
