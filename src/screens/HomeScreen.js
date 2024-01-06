import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Title, Subheading } from "react-native-paper";
import { LineChart } from 'react-native-chart-kit';
import { signOut } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import Toast from 'react-native-toast-message';


const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 44],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Purple color
        strokeWidth: 2,
      },
    ],
};

const HomeScreen = ({ navigation, route }) => {

    const auth = FIREBASE_AUTH;
    const [userName, setUserName] = useState("");

    useEffect(() => {
        // Retrieve the userName from the route params
        const { userName } = route.params || {};
        setUserName(userName);
    }, [route.params]);

    const handleLogout = async () => {
        try {
            // Sign out the user
            await signOut(auth);

            // Show a toast notification after successful logout
            Toast.show({
                type: 'success',
                text1: 'Logged out',
            });

            // Navigate back to the login screen
            navigation.navigate('Login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello {userName}</Text>
            <Text style={styles.subtitle}>Bezier Line Chart</Text>
            <LineChart
                data={data}
                width={350}
                height={220}
                yAxisLabel="$"
                chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16,
                },
                propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: '#ffa726',
                },
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16,
                }}
            />
            <Button
                mode="contained"
                onPress={handleLogout}
                style={styles.button}
            >
                Logout
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
        color: 'white',
        fontSize: 18,
        marginBottom: 32,
    },
    button: {
        marginVertical: 8,
    },
});

export default HomeScreen;
