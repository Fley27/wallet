import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationDrawerHeader from './navigationDrawerHeader'
import NotificationHomeScreen from '../screens/notification/index';

const Stack = createStackNavigator();

const NotificationNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="NotificationHomeScreen">
            <Stack.Screen
                name="NotificationHomeScreen"
                component={NotificationHomeScreen}
                options={{
                    title: 'Notifications', //Set Header Title
                    headerStyle: {
                      backgroundColor: '#A52A2A', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', 
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export default NotificationNavigation;