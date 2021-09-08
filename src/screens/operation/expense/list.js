import React from "react";
import { View, StyleSheet } from "react-native";
import ListOperation from '../../component/listOperation';
import BottomNavigation from "../../component/bottomNavigation";
import FloatingButton from "../../component/floatingButton";
import {getItemExpense} from "../../data/data";

const ListExpense = ({navigation}) =>{
    
    const handleAddExpense = () =>{
        navigation.replace("")
    }

    return(
        <View style = {styles.container}>
            <ListOperation 
                getItem = {getItemExpense} 
                link = {"DetailExpenseScreen"} 
                navigation = {navigation}
            />
            <FloatingButton handleNavigation = {handleAddExpense}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})


export default ListExpense;