import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import Home from './screens/Home';


const theme = {
  ...DefaultTheme,
	colors: {
    ...DefaultTheme.colors,
		background: 'transparent',
	},
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{
				headerShown: false,
				}} 
        initialRouteName='Home'
        >
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
