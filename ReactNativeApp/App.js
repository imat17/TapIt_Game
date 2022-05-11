import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { validateContent, validateLength } from './components/form/Validation';
import Login from './screens/Login';
import Register from './screens/Register';
import Auth from './screens/Auth';
import Home from './screens/Home';
import Play from './screens/Play';

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
        initialRouteName='Auth'
        >
        <Stack.Screen name='Auth' component={Auth}/>
        <Stack.Screen name='Login' validateContent={validateContent} validateLength={validateLength} component={Login}/>
        <Stack.Screen name='Register' validateContent={validateContent} validateLength={validateLength} component={Register}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Play' component={Play}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
