import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';


const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Onboard">
            <Stack.Screen 
                name="Onboard" 
                options={{headerShown:false}} 
                component={OnboardingScreen} 
            />
            <Stack.Screen 
                options={{headerShown:false}}
                name="Login" 
                component={LoginScreen}
                
            />
            <Stack.Screen 
                name="Signup" 
                component={SignupScreen}
                
                options={({navigation})=>({
                    title:"",
                    headerStyle:{
                        backgroundColor:"#f9fafd",
                        shadowColor:"#f9fafd"
                    },
                    headerShadowVisible:false
                })}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator
