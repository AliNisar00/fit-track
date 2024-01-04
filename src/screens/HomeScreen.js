import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Title, Subheading } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
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
