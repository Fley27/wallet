import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomepageScreen from '../screens/homepage';
import OperationNavigation from "./operationNavigation";
import CreditNavigation from './creditNavigation';
import NotificationNavigation from './notificationNavigation';
import HomeIcon from '../icons/home.tsx';
import IncomeIcon from '../icons/income.tsx';
import ExpenseIcon from '../icons/expense.tsx';
import NotificationIcon from "../icons/notification.tsx"

const Tab = createBottomTabNavigator();

const MenuTabNavigation = () => {
    return (
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="HomepageScreen"
                component={HomepageScreen}
                
                options={({route, navigation}) => ({
                    title: 'Dashboard', //Set Header Title
                    headerStyle: {
                      backgroundColor: '#A52A2A', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                      fontWeight: 'bold', //Set Header text style
                    },
                    tabBarLabel: "",
                    tabBarOptions: {
                        activeTintColor: "#fff",
                    },
                    
                    tabBarIcon: (tabInfo) => {
                        return (
                            <HomeIcon
                                width = {33}
                                height = {33}
                                color={tabInfo.focused ? "#A52A2A" : "#C0C0C0"}
                            />
                        );
                    },
                    tabBarIconStyle:{
                        marginTop: 5
                    }
                })}
            />
            <Tab.Screen
                name="Operation"
                component={OperationNavigation}
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarOptions: {
                        activeTintColor: "#fff",
                    },
                    
                    tabBarIcon: (tabInfo) => {
                        return (
                            <IncomeIcon
                                width = {38}
                                height = {38}
                                color={tabInfo.focused ? "#A52A2A" : "#C0C0C0"}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen 
                name="Credit"
                component={CreditNavigation}
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarOptions: {
                        activeTintColor: "#fff",
                    },
                    
                    tabBarIcon: (tabInfo) => {
                        return (
                            <ExpenseIcon
                                width = {32}
                                height = {32}
                                color={tabInfo.focused ? "#A52A2A" : "#C0C0C0"}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Notification"
                component={NotificationNavigation}
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarOptions: {
                        activeTintColor: "#fff",
                    },
                    
                    tabBarIcon: (tabInfo) => {
                        return (
                            <NotificationIcon
                                width = {25}
                                height = {25}
                                color={tabInfo.focused ? "#A52A2A" : "#C0C0C0"}
                            />
                        );
                    },

                    tabBarOptions: {
                        activeTintColor: "#fff",
                    },
                }}
            />
        </Tab.Navigator>
    );
};



export default MenuTabNavigation;