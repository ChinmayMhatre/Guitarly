import React,{useState,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View,TextInput, Pressable } from 'react-native';
import * as FileSystem from 'expo-file-system'
import * as Sharing from "expo-sharing";
import QRCode from 'react-native-qrcode-svg';
import { left } from 'styled-system';

const QrGenerator = () => {
    const [mysvg, setMysvg] = useState("")
    const [qrValue, setQrValue] = useState("")
    const [inputValue, setInputValue] = useState("")

    generateNewQr = ()=>{
        setQrValue(inputValue)
    }

    saveqr = ()=>{
        mysvg.toDataURL(callback);

    }

    callback = async (dataURL)=>{
        const uri = FileSystem.documentDirectory+`home.png`
        console.log(uri)
        await FileSystem.writeAsStringAsync(uri, dataURL, { encoding: FileSystem.EncodingType.Base64 });
        await Sharing.shareAsync(uri);
        console.log("lala")
        setQrValue('')
        setInputValue('')
    }
    return (
        
        <View style={styles.maincontainer}>
            <View style={styles.container}>
                    <View style={styles.box}>
                    <Text style={styles.boxtext}>Generate QR Code</Text>
                    <Text style={styles.boxtext2}>Lorem ipsum dolor sit amet, sit consectetur adipiscing elit.</Text>
                    <TextInput
                    style={styles.input}
                    placeholder='Enter message'
                    onChangeText={(inputValue)=>setInputValue(inputValue)}
                    value={inputValue}
                    />
                    <Pressable
                    style={styles.button}
                    onPress={generateNewQr}
                    >
                    <Text style={styles.text}>Generate</Text>
                    </Pressable>
                    </View>
            {qrValue != "" ?(
                <>
                    <QRCode
                    value={qrValue}
                    getRef={(c) => {setMysvg(c)}}
                    />
                    <Pressable
                    style={styles.button}
                    onPress={saveqr}
                    >
                    <Text style={styles.text}>Save</Text>
                    </Pressable>
                </>
            ):(
                <View/>
            )}
        </View>
        </View>
    )

}

export default QrGenerator

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        width:150,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'white',
        borderRadius:10,
        borderColor:'white',
        textAlign:'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box:{
        backgroundColor: '#F1D9B9',
        borderRadius:10,
        height:300,
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
    maintext:{
        fontSize:16,
        margin:20,
    },
    button:{
        backgroundColor:'#795644',
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        paddingVertical: 12,
        paddingHorizontal: 12,
        height:50,
        width:100,
    },
    text: {
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
        alignItems:'center'
    },
});
