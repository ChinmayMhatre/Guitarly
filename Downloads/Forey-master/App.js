import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from 'native-base';
import MainNavigator from './navigators/MainNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QrScreen from './screens/home/QrScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  // todo add onboarding only on first launch using async storage
  return (
    <>
      <StatusBar style="auto"/>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen 
              name="Main" 
              component={MainNavigator} 
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
