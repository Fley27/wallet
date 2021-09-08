import React, {useState} from "react";
import {View, TouchableOpacity, Modal, Text, StyleSheet, Alert} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Homepage from "../screens/homepage";
import IncomeNavigation from "./incomeNavigation";


const BottomNavigation  = ({selectOption, navigation}) =>{

    const [menu, setMenu] = useState(selectOption);

    const [modal, setModal] = useState({
        income: false,
        expense: false
    });

    const handleMenu  = (item) =>{
        setMenu(item)
    }

    const setModalVisible = (item) =>{
        if(item === "income")
            setModal(prevState=>({...prevState, income: !modal.income}))
        else
            setModal(prevState=>({...prevState, expense: !modal.expense}))
    }

    const resetModal = () =>{
        setModal(prevState=>({...prevState, income: false, expense: false}))
    }

    const handleIncome = () =>{
        navigation.replace("IncomeNavigation")
    }

    const handleExpense = () =>{
        navigation.replace("ExpenseNavigation")
    }

    const handleHomepage = () =>{
        navigation.replace("HomepageScreen")
    }

    return(
        <Tab.Navigator>
            <Tab.Screen name="HomepageScreen" component={Homepage} />
            <Tab.Screen name="Income" component={IncomeNavigation} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    barNagation:{
        flexDirection: "row",
        width: "100%",
        height: 60,
        backgroundColor: "#A52A2A",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
    itemNavigation:{
        width: "20%",
        alignItems: "center"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "65%",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000"
    },
    button: {
        borderRadius: 30,
        padding: 10,
        elevation: 2,
        marginTop: 20,
        width: 130,
        flexDirection: "row",
        backgroundColor: "#A52A2A"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 15,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
});

/*
<>
            <View style = {styles.barNagation}>
                <View style = {styles.itemNavigation}>
                    <TouchableOpacity onPress = {()=>{ 
                        if(menu !== "Home")
                            handleHomepage();
                        handleMenu("Home");
                    }}>
                        <HomeIcon 
                            width = {30}
                            height = {30}
                            color = {menu === "Home" ? "#FFF" : "#C0C0C0"}
                        />
                    </TouchableOpacity>
                </View>
                <View style = {styles.itemNavigation}>
                    <TouchableOpacity onPress = {()=> {
                        handleMenu("Income");
                        setModalVisible("income")
                        
                    }}>
                        <IncomeIcon 
                            width = {30}
                            height = {30}
                            color = {menu === "Income" ? "#FFF" : "#C0C0C0"}
                        />   
                    </TouchableOpacity>
                </View>
                <View style = {styles.itemNavigation}>
                    <TouchableOpacity onPress = {()=>{ 
                        handleMenu("Expense")
                        setModalVisible("expense")
                    }}>
                        <ExpenseIcon
                            width = {30}
                            height = {30}
                            color = {menu === "Expense" ? "#FFF" : "#C0C0C0"}
                        />
                    </TouchableOpacity>
                </View>
                <View style = {styles.itemNavigation}>
                    <TouchableOpacity onPress = {()=> handleMenu("Friend")}>
                        <FriendIcon
                            width = {30}
                            height = {30}
                            color = {menu === "Friend" ? "#FFF" : "#C0C0C0"}
                        />
                    </TouchableOpacity>
                </View>
                <View style = {styles.itemNavigation}>
                    <TouchableOpacity onPress = {()=> handleMenu("Notification")}>
                        <NotificationIcon
                            width = {30}
                            height = {30}
                            color = {menu === "Notification" ? "#FFF" : "#C0C0C0"}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal.income}
                onRequestClose={() => {
                    setModalVisible("income");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style = {styles.modalTitle}>Choose an option</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={()=>{
                                handleIncome();
                                setModalVisible("income");
                            }}
                        >
                            <IcIcon
                                height = {20}
                                width = {20}
                                color = "#FFF"
                            />
                            <Text style={styles.textStyle}>Income</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={()=>{
                                handleExpense();
                                setModalVisible("income");
                            }}
                        >
                            <ExIcon
                                height = {20}
                                width = {20}
                                color = "#FFF"
                            />
                            <Text style={styles.textStyle}>Expense</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal.expense}
                onRequestClose={() => {
                    setModalVisible("expense");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style = {styles.modalTitle}>Choose an option</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible("expense")}
                        >
                            <CrIcon
                                height = {20}
                                width = {20}
                                color = "#FFF"
                            />
                            <Text style={styles.textStyle}>Credit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible("expense")}
                        >
                            <LoIcon
                                height = {20}
                                width = {20}
                                color = "#FFF"
                            />
                            <Text style={styles.textStyle}>Loan</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
*/
export default BottomNavigation;