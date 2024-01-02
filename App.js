import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';

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

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'FitTrack',
    },
  }
);

const AppContainer = createAppContainer(navigator);

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  );
};

export default App;
