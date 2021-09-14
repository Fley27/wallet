import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationDrawerHeader from './navigationDrawerHeader'
import CreditHomeScreen from '../screens/credit/index';
import AddBorrowingScreen from '../screens/credit/borrowing/add';
import AddLoanScreen from '../screens/credit/loan/add';
import DetailBorrowingScreen from '../screens/credit/borrowing/detail';
import DetailLoanScreen from '../screens/credit/loan/detail';

const Stack = createStackNavigator();

const CreditNavigation = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="CreditHomeScreen">
            <Stack.Screen
                name="CreditHomeScreen"
                component={CreditHomeScreen}
                options={({navigation, route})=>({
                    title: 'Credit', //Set Header Title
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
                name="DetailLoanScreen"
                component={DetailLoanScreen}
                options={{
                    title: 'Loan Details', //Set Header Title
                    
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
            <Stack.Screen
                name="DetailBorrowingScreen"
                component={DetailBorrowingScreen}
                options={{
                    title: 'Borrowing Details', //Set Header Title
                    
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
            <Stack.Screen
                name="AddBorrowingScreen"
                component={AddBorrowingScreen}
                options={{
                    title: 'New Borrowing', //Set Header Title
                    
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
            <Stack.Screen
                name="AddLoanScreen"
                component={AddLoanScreen}
                options={{
                    title: 'New Loan', //Set Header Title
                    
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

export default CreditNavigation;