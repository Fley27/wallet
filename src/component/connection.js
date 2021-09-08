import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register'
import SignUpNavigation from './signUpNavigation'
const Stack = createStackNavigator();

const Connection = () => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignUpNavigation"
                component={SignUpNavigation}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default Connection;