import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import firebase from "firebase";
import { Camera } from "expo-camera";
import image1 from "../../test.jpg";
import * as FileSystem from "expo-file-system";
import * as Speech from "expo-speech";
import * as ImagePicker from "expo-image-picker";

const CurrencyScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [loaded, setLoaded] = useState(true);
    const [processing, setProcessing] = useState(false);

    let openImagePickerAsync = async () => {
        let permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let photo = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        });

        setImage(photo.uri);
        const uriSections = photo.uri.split(".");
        const fileType = uriSections[uriSections.length - 1];
        const form = new FormData();
        form.append("image", {
            uri: photo.uri,
            name: "test" + fileType,
            type: "image/" + fileType,
        });
        console.log(form);
        Speech.speak("Please wait while we process your currency note");
        setProcessing(true);
        fetch("https://foreycurrencydetector.herokuapp.com/image", {
            method: "POST",
            body: form,
        })
            .then((response) => response.json())
            .then((response) => {
                console.log("response", response);
                if (String(response.note) == "-1") {
                    Speech.speak(
                        "Sorry, we could not detect any currency note."
                    );
                } else {
                    Speech.speak(String(response.note));
                }
                setProcessing(false);
            })
            .catch((error) => {
                console.log("error", error);
            });
    };

    navigation.addListener("focus", () => {
        setLoaded(true);
    });
    navigation.addListener("blur", () => {
        setLoaded(false);
    });

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const onLogout = () => {
        firebase.auth().signOut();
    };

    const handleCapture = async () => {
        try {
            const photo = await camera.takePictureAsync({ base64: true });
            // console.log(photo);
            setImage(photo.uri);
            const uriSections = photo.uri.split(".");
            const fileType = uriSections[uriSections.length - 1];
            const form = new FormData();
            form.append("image", {
                uri: photo.uri,
                name: "test" + fileType,
                type: "image/" + fileType,
            });
            console.log(form);
            Speech.speak("Please wait while we process your currency note");
            setProcessing(true);
            fetch("https://foreycurrencydetector.herokuapp.com/image", {
                method: "POST",
                body: form,
            })
                .then((response) => response.json())
                .then((response) => {
                    console.log("response", response);
                    if (String(response.note) == "-1") {
                        Speech.speak(
                            "Sorry, we could not detect any currency note."
                        );
                    } else {
                        Speech.speak(String(response.note));
                    }
                    setProcessing(false);
                })
                .catch((error) => {
                    console.log("error", error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            {image ? (
                <Image
                    source={{ uri: image }}
                    style={{ width: 300, height: 200 }}
                />
            ) : null}

            {processing ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItem: "center",
                    }}
                >
                    <Text>Processing...</Text>
                </View>
            ) : (
                loaded && (
                    <Camera
                        ratio={"16:9"}
                        style={styles.camera}
                        type={type}
                        ref={(ref) => setCamera(ref)}
                    >
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    setType(
                                        type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back
                                    );
                                }}
                            >
                                <Text style={styles.text}> Flip </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleCapture}
                            >
                                <Text style={styles.text}>Capture</Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                )
            )}
            <Button title="Logout" onPress={() => onLogout()} />
            <Button title="open gallery" onPress={() => openImagePickerAsync()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffbe7",
    },
    camera: {
        aspectRatio: 16 / 9,
    },
    buttonContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: "transparent",
        flexDirection: "row",
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        color: "white",
    },
});

export default CurrencyScreen;
