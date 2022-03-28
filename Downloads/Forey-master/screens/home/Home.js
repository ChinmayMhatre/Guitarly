import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Speech from "expo-speech";
import { Heading } from "native-base";
import axios from "axios";
const API_KEY = "808322860097cad38d4a3ac8ea6de48f";
import * as Location from "expo-location";
import { style } from "styled-system";

const Home = () => {
    const [greeting, setGreeting] = useState("");
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        const time = new Date().getHours();
        let message =
            time > 17
                ? "Good evening"
                : time > 12
                ? "Good afternoon"
                : "Good morning";
        setGreeting(message);

        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                fetchDataFromApi("40.7128", "-74.0060");
            }

            let location = await Location.getCurrentPositionAsync({});
            await fetchDataFromApi(
                location.coords.latitude,
                location.coords.longitude
            );
        })();
        console.log(weatherData);
    }, []);

    const fetchDataFromApi = (latitude, longitude) => {
        if (latitude && longitude) {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
                )
                .then((data) => {
                    // console.log(data);
                    setWeatherData(data);
                    let message =
                        greeting +
                        " " +
                        "Today's temperature is " +
                        data.data.current.temp +
                        " degrees " +
                        "and the weather today is " +
                        data.data.current.weather[0].main;
                    Speech.speak(message);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <View style={styles.container}>
            <Heading style={styles.heading}>{greeting}</Heading>
            <Text style={styles.weather}>
                {weatherData.data && weatherData.data.current.temp} ℃
            </Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fffbe7",
    },
    heading: {
        textAlign: "center",
        paddingTop: 50,
    },
    weather: {
        textAlign: "center",
        fontSize: 15,
    },
});
