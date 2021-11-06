/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/scenes/home';
import Login from './src/scenes/login';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ 
            title:'Music App', 
            headerStyle: { backgroundColor: '#212121'}, 
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 20, fontWeight: '800', fontFamily: 'arial'}
            }}/>
          <Stack.Screen name="Login" component={Login} options={{
            title:'Music App', 
            headerStyle: { backgroundColor: '#212121'}, 
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {fontSize: 20, fontWeight: '800', fontFamily: 'arial'}
          }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 24
  },
});

export default App;
