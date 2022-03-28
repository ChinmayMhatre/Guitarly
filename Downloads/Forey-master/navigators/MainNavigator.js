import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from '../screens/auth/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import AuthNavigator from './AuthNavigator.js';
import HomeNavigator from './HomeNavigator.js';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXSko7SMCnR3RWgeG3pi2YTaZdrwCV1RE",
    authDomain: "forey-5e27b.firebaseapp.com",
    projectId: "forey-5e27b",
    storageBucket: "forey-5e27b.appspot.com",
    messagingSenderId: "65702774866",
    appId: "1:65702774866:web:e0b3567222b5a3b1edf78b"
    };

if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig)
    }

const Stack = createNativeStackNavigator();

class MainNavigator extends Component{
    constructor(props){
        super(props);
        this.state = {
            loaded : false,
            loggedIn: false,
        }
    }
    
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
        if(!user){
            this.setState({
                loggedIn: false,
                loaded: true,
            })
        }else {
            console.log('njfnfmvfn ' + user.email)
            this.setState({
                loggedIn: true,
                loaded: true,
            })
        }
        })
    }

    render(){
        // const Stack = createStackNavigator();
        const {loggedIn, loaded } = this.state
        if(!loaded){
            return(
                <View>
                    <Text>Loading</Text>
                </View>
            )
        }
        if(!loggedIn) {
            return (
                <Stack.Navigator initialRouteName="Auth">
                    <Stack.Screen 
                        name="Auth" 
                        component={AuthNavigator} 
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            ); 
        }
        return (
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    options={{headerShown:false}} 
                    component={HomeNavigator} 
                />
                
            </Stack.Navigator>
        )
    }
    
}

export default MainNavigator

