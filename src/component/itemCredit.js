import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { selectBorrowing} from "../redux/action/borrowing";
import { selectLoan } from "../redux/action/loan";
import dateFormat from "dateformat";

const ItemCredit = ({item, navigation, link, selectBorrowing, selectLoan}) =>{

    const handleDetail = () =>{
        if(link === "DetailLoanScreen")
            selectLoan(item);
        else if(link === "DetailBorrowingScreen")
            selectBorrowing(item);
        navigation.navigate(link);
    }

    return(
        <TouchableOpacity onPress = {handleDetail} 
            style = {styles.container} >
            <View style = {styles.subContainer}>
                <View style = {styles.header}>
                    <View style = {styles.amountContainer}>
                        <Text style = {styles.textAmount}>{item.amount}</Text>
                        <Text style = {styles.textDevice}>  {item.currency}</Text>
                    </View>
                    <View style = {styles.statusContainer}>
                        <View style = {styles.statusTextContainer}>
                            <Text style = {styles.statusText}>{item.status ? "Paid" : "Unpaid" }</Text>
                        </View>
                        <View style = {[styles.statusCircle, 
                            item.outLimited === true && item.status === true ? {backgroundColor: "rgb(66, 179, 245)"} : 
                            item.outLimited === false && item.status === true ? {backgroundColor: "rgb(87, 245, 66)"} : 
                            item.outLimited === true && item.status === false ? {backgroundColor: "rgb(245, 120, 66)"}: 
                            item.outLimited === false && item.status === false ? {backgroundColor: "rgb(214, 13, 50)"} : null]}></View>
                    </View>
                </View>
                <View style = {styles.typeContainer}>
                    <Text style = {styles.type}>{item.name}</Text>
                    <Text style = {styles.textDate}>{dateFormat(item.date, "mm / dd / yyyy" )}</Text> 
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "97%",
        backgroundColor: "#FFF",
        height: 120,
        marginTop: 5,
        marginBottom: 5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 20,
        marginLeft: "auto",
        marginRight: "auto"
    },
    subContainer:{
        flexDirection: "column"
    },
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    amountContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    textAmount:{
        fontSize: 19,
        fontWeight: "bold",
        color: "#000"
    },
    textDevice:{
        fontSize: 10,
        fontWeight: "700"
    },
    statusContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    statusTextContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    statusCircle: {
        height: 10,
        width: 10,
        backgroundColor: "#000",
        borderRadius: 10
    },
    textDate: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
        color: "#000"
    },
    typeContainer:{
        marginTop: 20,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },
    type:{
        fontSize: 19,
        fontWeight: "bold",
        color: "#000"
    },
    statusText: {
        fontSize: 12,
        fontWeight: "600",
        color: "#000",
        marginRight: 5
    }
})

ItemCredit.propTypes = {
    selectBorrowing: PropTypes.func.isRequired,
}

export default connect(null, { selectBorrowing, selectLoan})(ItemCredit);