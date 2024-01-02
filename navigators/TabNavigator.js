import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../src/screens/HomeScreen'
import MenuScreen from '../src/screens/MenuScreen'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
        initialRouteName={'Home'}
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}>
        <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
        <Tab.Screen name='Menu' component={MenuScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default TabNavigator;
