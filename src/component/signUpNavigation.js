import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddUser from '../screens/add-user';

const Stack = createStackNavigator();

const SignUpNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="EmailSignUpScreen">
            <Stack.Screen
                name="EmailSignUpScreen"
                component={AddUser}
                options={{
                    title: 'Sign Up', //Set Header Title
                    
                    headerStyle: {
                      backgroundColor: '#A52A2A', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', 
                        alignSelf: 'center' 
                    },
                }}
            />
        </Stack.Navigator>
    );
};

export default SignUpNavigation;