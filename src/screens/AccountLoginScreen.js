import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Title, Subheading } from "react-native-paper";

const AccountLoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Title style={styles.title}>This is a placeholder page for account log in.</Title>
                <Subheading style={styles.subtitle}>Press the button below to continue to Home screen.</Subheading>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Home')}
                    style={styles.button}
                >
                    Continue...
                </Button>
            </View>
        </View>
    );
};

/*
AccountLoginScreen.navigationOptions = {
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
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    buttonContainer: {
        width: '100%',
    },
    button: {
        marginVertical: 8,
    },
});

export default AccountLoginScreen;
