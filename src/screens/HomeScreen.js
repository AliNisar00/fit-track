import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Title, Subheading } from "react-native-paper";
import { ProgressCircle } from 'react-native-svg-charts'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ProgressCircle style={styles.progressCircle} progress={0.7} progressColor={'rgb(134, 65, 244)'} />
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
        backgroundColor: 'black',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: 'white',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 32,
    },
    button: {
        marginVertical: 8,
    },
    progressCircle: {
        height: 200,
        marginVertical: 16,
    },
});

export default HomeScreen;
