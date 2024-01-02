import 'react-native-gesture-handler';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './navigators/TabNavigator';

import LoginScreen from './src/screens/LoginScreen';
import AccountLoginScreen from './src/screens/AccountLoginScreen';
import AccountSignupScreen from './src/screens/AccountSignupScreen';

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5D3FD3', // Iris
    accent: '#2ecc71', // Green
    background: '#2c3e50', // Dark gray
    surface: '#34495e', // Lighter gray
    text: '#ecf0f1', // Light gray
    error: '#e74c3c', // Red
  },
};

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName={'Login'} screenOptions={ {headerShown: false} }>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AccountLogin" component={AccountLoginScreen} />
      <Stack.Screen name="AccountSignup" component={AccountSignupScreen} />
    </Stack.Navigator>
  );
}

/*
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    AccountLogin: AccountLoginScreen,
    AccountSignup: AccountSignupScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'FitTrack',
    },
  }
);
*/

//const AppContainer = createAppContainer(navigator);

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
