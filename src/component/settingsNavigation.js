import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationDrawerHeader from './navigationDrawerHeader'
import SettingsHomeScreen from '../screens/settings/index';


const Stack = createStackNavigator();

const SettingsNavigation = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="SettingsHomeScreen">
            <Stack.Screen
                name="SettingsHomeScreen"
                component={SettingsHomeScreen}
                options={({navigation, route})=>({
                    title: 'Settings', //Set Header Title
                    headerRight: () => (
                        <TouchableOpacity >
                            <NavigationDrawerHeader navigation = {navigation}/>
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                      backgroundColor: '#A52A2A', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', 
                    },
                })}
            />
        </Stack.Navigator>
    );
};

export default SettingsNavigation;