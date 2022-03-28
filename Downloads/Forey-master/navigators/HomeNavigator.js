import React, { Component } from "react";
import { Text, View, Icon } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CurrencyScreen from "../screens/home/CurrencyScreen";
import QrScreen from "../screens/home/QrScreen";
import StoryScreen from "../screens/home/StoryScreen";
import QrGenerator from "../screens/home/QrGenerator";
import Home from "../screens/home/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
export class HomeNavigator extends Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{
                    tabBarActiveTintColor: "#6B3E2E",
                    tabBarInactiveTintColor: "#000",

                    tabBarLabelStyle: {
                        fontSize: 9,
                        marginBottom: 5,
                    },
                    tabBarStyle: [
                        {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingTop: 10,
                            height: 60,
                        },
                        null,
                    ],
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="home"
                                color="#6B3E2E"
                                size={size}
                            />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="QR Generator"
                    component={QrGenerator}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="qrcode-plus"
                                color="#6B3E2E"
                                size={size}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="QR Scanner"
                    component={QrScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="qrcode-scan"
                                color="#6B3E2E"
                                size={size}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Currency"
                    component={CurrencyScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="currency-inr"
                                color="#6B3E2E"
                                size={size}
                            />
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Story"
                    component={StoryScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="music"
                                color="#6B3E2E"
                                size={size}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        );
    }
}

export default HomeNavigator;
