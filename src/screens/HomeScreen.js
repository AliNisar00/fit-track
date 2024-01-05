import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Title, Subheading } from "react-native-paper";
import { LineChart } from 'react-native-chart-kit';

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

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
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
