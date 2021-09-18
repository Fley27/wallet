import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationDrawerHeader from './navigationDrawerHeader'
import OperationHomeScreen from '../screens/operation/index';
import DetailIncomeScreen from "../screens/operation/income/detail";
import AddIncomeScreen from "../screens/operation/income/add";
import DetailExpenseScreen from "../screens/operation/expense/detail";
import AddExpenseScreen from "../screens/operation/expense/add";



const Stack = createStackNavigator();

const OperationNavigation = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="OperationHomeScreen">
            <Stack.Screen
                name="OperationHomeScreen"
                component={OperationHomeScreen}
                options={({navigation,route})=>({
                    title: 'Operation', //Set Header Title
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
            <Stack.Screen
                name="DetailIncomeScreen"
                component={DetailIncomeScreen}
                options={({navigation, route})=>({
                    title: 'Income Details', //Set Header Title
                    
                    headerStyle: {
                      backgroundColor: '#A52A2A', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', 
                        alignSelf: 'center' 
                    },
                })}
            />
            <Stack.Screen
                name="AddIncomeScreen"
                component={AddIncomeScreen}
                options={({navigation, route})=>({
                    title: 'New Income', //Set Header Title
                    
                    headerStyle: {
                      backgroundColor: '#A52A2A', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', 
                        alignSelf: 'center' 
                    },
                })}
            />
            <Stack.Screen
                name="DetailExpenseScreen"
                component={DetailExpenseScreen}
                options={({navigation,route})=>({
                    title: 'Expense Details', //Set Header Title
                    
                    headerStyle: {
                      backgroundColor: '#A52A2A', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', 
                        alignSelf: 'center' 
                    },
                })}
            />
            <Stack.Screen
                name="AddExpenseScreen"
                component={AddExpenseScreen}
                options={({navigation, route})=>({
                    title: 'New Expense', //Set Header Title
                    
                    headerStyle: {
                      backgroundColor: '#A52A2A', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', 
                        alignSelf: 'center' 
                    },
                })}
            />
        </Stack.Navigator>
    );
};

export default OperationNavigation;