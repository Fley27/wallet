import React from 'react'; 
import SplashScreen from '../screens/splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Connection from './connection.js';
import MenuTabNavigation from './menuTabNavigation';
import NotificationNavigation from './notificationNavigation';


const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Connection"
                    component={Connection}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="Home"
                    component={MenuTabNavigation}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>            
        </NavigationContainer>
    );
};

export default MainNavigation;
