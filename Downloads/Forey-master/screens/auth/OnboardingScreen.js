import React from 'react'
import { View, Text,Button,Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Onboarding from 'react-native-onboarding-swiper';
const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        skipToPage={2}
        // TODO replace navigate with replace so that user does not come back here
        onDone={()=>navigation.replace("Login")}
        pages={[
            {
            backgroundColor: '#F1D9B9',
            image: <MaterialCommunityIcons name="dog" color='#6B3E2E' size={250} />,
            title: 'Welcome To Forey',
            subtitle: 'A new way to connect with the world',
            titleStyles:{
                fontWeight: 'bold',
                color: '#6B3E2E',
            },
            subTitleStyles:{
                color:'#6B3E2E',
                paddingHorizontal:15,
            }
            },
            {
            backgroundColor: '#E9DAC1',
            image: <MaterialCommunityIcons name="alpha-i-circle-outline" color='#6B3E2E' size={250} />,
            title: 'Help Icons',
            subtitle: 'Navigate to the help icon using talkback to learn more about the feature',
            titleStyles:{
                fontWeight: 'bold',
                color: '#6B3E2E',
            },
            subTitleStyles:{
                color:'#6B3E2E',
                paddingHorizontal:15,
            }
            },
            {
            backgroundColor: '#e9bcbe',
            image: <MaterialCommunityIcons name="play" color='#6B3E2E' size={250} />,
            title: "Let's Get Started",
            subtitle: 'Login to forey and get started',
            titleStyles:{
                fontWeight: 'bold',
                color: '#6B3E2E',
            },
            subTitleStyles:{
                color:'#6B3E2E',
                paddingHorizontal:15,
            }
            },
        ]}
        />
    )
}

export default OnboardingScreen
