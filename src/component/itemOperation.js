import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { selectIncome} from "../redux/action/income";
import dateFormat from "dateformat"

const ItemOperation = ({item, navigation, link, selectIncome}) =>{

    const handleDetail = () =>{
        selectIncome(item)
        navigation.navigate(link);
    }

    return(
        <TouchableOpacity onPress = {()=>handleDetail()}
            style = {styles.container} >
            <View style = {styles.subContainer}>
                <View style = {styles.header}>
                    <View style = {styles.amountContainer}>
                        <Text style = {styles.textAmount}>$ {item.amount}</Text>
                        <Text style = {styles.textDevice}>  {item.currency}</Text>
                    </View>
                    <Text style = {styles.textDate}>{dateFormat(item.date, "mmmm dS, yyyy" )}</Text>
                </View>
                <View style = {styles.typeContainer}>
                    <Text style = {styles.type}>{item.category}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "97%",
        backgroundColor: "#FFF",
        height: 100,
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
    textDate:{
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
    }
})

ItemOperation.propTypes = {
    selectIncome: PropTypes.func.isRequired,
}

export default connect(null, { selectIncome})(ItemOperation);