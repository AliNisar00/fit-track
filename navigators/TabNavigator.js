import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../src/screens/HomeScreen'
import MenuScreen from '../src/screens/MenuScreen'
import { BlurView } from '@react-native-community/blur'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
        initialRouteName={'Home'}
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarBackground: () => {
                <BlurView overlayColor='' blurAmount={15} style={styles.BlurViewStyles} />
            }
        }}>
        <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
        <Tab.Screen name='Menu' component={MenuScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: 'rgba(12,15,20,0.5)', // TO DO: set up a separate color file later
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
});

export default TabNavigator;
