import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import EmailSignUpScreen from '../screens/emailSignUp';
import PasswordSignUp from "../screens/passwordSignUp"
import LastnameSignUp from "../screens/lastnameSignUp";
import FirstnameSignUp from "../screens/firstnameSignUp";
import SexSignUp from '../screens/sexSignUp';
import BirthdaySignUp from '../screens/birthdaySignUp';
import CountrySignUp from '../screens/countrySignUp';

const Stack = createStackNavigator();

const SignUpNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="EmailSignUpScreen">
            <Stack.Screen
                name="EmailSignUpScreen"
                component={EmailSignUpScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="PasswordSignUp"
                component={PasswordSignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="LastnameSignUp"
                component={LastnameSignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="FirstnameSignUp"
                component={FirstnameSignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SexSignUp"
                component={SexSignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="BirthdaySignUp"
                component={BirthdaySignUp}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="CountrySignUp"
                component={CountrySignUp}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
};

export default SignUpNavigation;