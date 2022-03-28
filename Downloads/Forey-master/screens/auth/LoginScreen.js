import React,{useState, Component} from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Box,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    HStack,
} from 'native-base';
import firebase from 'firebase';

class LoginScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
        this.onSignIn=this.onSignIn.bind(this)
    }

    onSignIn(){
        const { email, password} = this.state
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        })
        this.props.navigation.navigate('HomeScreen')
    }

    render(){
        return (
            <View style={styles.container}>
                <MaterialCommunityIcons name="dog" color='#6B3E2E' size={80} />
                <Text style = {styles.text}>Forey</Text>
                <Box
                    safeArea
                    flex={1}
                    p={2}
                    w="90%"
                    mx='auto'
                >
                
                <VStack space={2} mt={5}>
                    <FormControl>
                        <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
                            Email ID
                        </FormControl.Label>
                        <Input 
                            keyboardType="email-address" 
                            autoCapitalize="none"
                            onChangeText = {(email) => this.setState({email})}
                            autoCorrect={false} 
                            placeholder="Enter your email id " 
                        />
                    </FormControl>
                    <FormControl mb={5}>
                        <FormControl.Label  _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
                            Password
                        </FormControl.Label>
                        <Input 
                            type="password" 
                            placeholder="Enter your password"
                            secureTextEntry={true}
                            onChangeText = {(password) => this.setState({password})}
                        />
                        <Link
                        _text={{ fontSize: 'xs', fontWeight: '700', color:'#6B3E2E' }}
                        alignSelf="flex-end"
                        mt={1}
                        >
                        Forget Password?
                        </Link>
                    </FormControl>
                    <VStack  space={2}>
                        <Button
                        style = {{backgroundColor: '#6B3E2E'}}
                        onPress = {() => this.onSignIn()} >
                            Login
                        </Button>
                    </VStack>
                    <HStack justifyContent="center">
                        <Text fontSize='sm' color='muted.700' fontWeight={400}>I'm a new user. </Text>
                        <Link onPress={()=>this.props.navigation.navigate("Signup")} _text={{ color: '#6B3E2E', bold: true, fontSize: 'sm' }}>
                        Sign Up
                        </Link>
                    </HStack>
                    </VStack>
                    </Box>
    
    
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f9fafd",
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        paddingTop:120
    },
    logo:{
        height:150,
        width:150,
        resizeMode:'cover'
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
})

export default LoginScreen;
