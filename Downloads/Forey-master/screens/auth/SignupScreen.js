import React,{useState, Component} from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
    NativeBaseProvider,
    Box,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Icon,
    IconButton,
    HStack,
    Divider
} from 'native-base';
import firebase from 'firebase';

class SignupScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignUp=this.onSignUp.bind(this)
    }

    onSignUp(){
        const { email, password, name} = this.state
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
                firebase.firestore()
                    .collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        email, name
                    })
            })
            .catch((error) => {
                console.log(error);
            })
        this.props.navigation.navigate('Login')
    }

    render(){
        return (
            <View style={styles.container}>
                <MaterialCommunityIcons name="dog" color='#6B3E2E' size={80} />
                <Text style = {styles.text}>Create an account</Text>
                <Box
                    safeArea
                    flex={1}
                    p={2}
                    w="90%"
                    mx='auto'
                >
                
                <VStack space={2}>
                <FormControl>
                        <FormControl.Label _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
                            Name
                        </FormControl.Label>
                        <Input 
                            autoCapitalize="none"
                            onChangeText = {(name) => this.setState({name})}
                            autoCorrect={false} 
                            placeholder="Enter your name " 
                        />
                    </FormControl>
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
                    <FormControl >
                        <FormControl.Label  _text={{color: 'muted.700', fontSize: 'sm', fontWeight: 600}}>
                            Password
                        </FormControl.Label>
                        <Input 
                            type="password" 
                            placeholder="Enter your password"
                            secureTextEntry={true}
                            onChangeText = {(password) => this.setState({password})}
                        />
                    </FormControl>
                    <VStack  space={2}>
                        <Button mt ={5}
                        style = {{backgroundColor: '#6B3E2E'}}
                        onPress={() => this.onSignUp()}>
                            Login
                        </Button>
                    </VStack>
                    <HStack justifyContent="center">
                        <Text fontSize='sm' color='muted.700' fontWeight={400}>Have an account? </Text>
                        <Link onPress={()=>this.props.navigation.navigate("Login")} _text={{ color: '#6B3E2E', bold: true, fontSize: 'sm' }}>
                        Sign in
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

export default SignupScreen;
