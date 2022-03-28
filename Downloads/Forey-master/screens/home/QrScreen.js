import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, Button ,Pressable} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { alignContent, style } from 'styled-system';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Speech from 'expo-speech';
import { NavigationContainer } from '@react-navigation/native';
const QrScreen = ({navigation}) => {
    const [hasPermission, sethasPermission] = useState(null);
    const [scanned, setScanned] = useState(false)
    const [text, setext] = useState('Not yet Scanned')

    const askForCameraPermission=()=>{
        (async()=>{
            const {status}=await BarCodeScanner.requestPermissionsAsync();
            sethasPermission(status=='granted')
        })()
    }

    useEffect(()=>{
        askForCameraPermission();
    },[]);

    const handleBarCodeScanned=({type,data})=>{
        setScanned(true);
        setext(data);
        Speech.speak(data)
        console.log('Type: '+ type +'\nData: '+ data)
    }

    if(hasPermission===null){
        return (
            <View style={styles.container}>
                <Text>Requesting for Camera permission</Text>
            </View>
        );
    }

    if(hasPermission===false) {
        return (
            <View style={styles.container}>
                <Text style={{margin:10}}>No access to Camera</Text>
                <Button title={'Allow Camera'} onPress={()=>askForCameraPermission()}/>
            </View>
        );
    }
    if(scanned===false){
            return (
                <View style={styles.container}>
                    <View style={styles.box}>
                    <Text style={styles.boxtext}>Scan QR Code</Text>
                    <Text style={styles.boxtext2}>Lorem ipsum dolor sit amet, sit consectetur adipiscing elit.</Text>
                    </View>
                    <View style={styles.barcodebox}>
                        <BarCodeScanner
                        onBarCodeScanned={scanned?undefined:handleBarCodeScanned}
                        style={{height:400,width:400}}/>
                    </View>
                    <Button title="chalo generator me" onPress={navigation.navigate("QR Generator")} />
                </View>
            );
    }
    else{
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                <Text style={styles.boxtext}>Scan QR Code</Text>
                <Text style={styles.boxtext2}>Lorem ipsum dolor sit amet, sit consectetur adipiscing elit.</Text>
                </View>
                <MaterialCommunityIcons name="check-underline-circle" color='#6B3E2E' size={80} />
                <Text style={styles.maintext}>{text}</Text>
            {scanned && 
            <Pressable style={styles.button} onPress={()=>setScanned(false)}>
            <Text style={styles.text}>Scan again</Text>
            </Pressable>}
            
        </View> 
        )
    }
    
}

export default QrScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box:{
        backgroundColor: '#F1D9B9',
        borderRadius:10,
        height:150,
        width:300,
        marginBottom:50,
        alignItems:'center',
        justifyContent:'center'
    },
    boxtext:{
        fontSize:16,
        textAlign:'center',
        margin:20,
    },
    boxtext2:{
        fontSize:12,
        lineHeight:14,
        textAlign:'center'
    },
    barcodebox: {
        alignItems:'center',
        justifyContent:'center',
        height:300,
        width:300,
        overflow:'hidden',
        borderRadius:30,
        backgroundColor:'tomato',
    },
    maintext:{
        fontSize:16,
        margin:20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        backgroundColor:'#795644',
        borderRadius:10
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
