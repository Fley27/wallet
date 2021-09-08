import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Item = ({item}) =>(
    <View style = {[styles.flatListItem, 
        item.id === "Incomes" ? styles.item1 : item.id === "Expenses" ?  styles.item2 : 
        item.id === "Credits" ? styles.item3 : item.id === "Loans" ? styles.item4 : null]}>
        <View style = {styles.itemHeader}>
            <Text style = {styles.itemHeaderLabel}>{item.id.toUpperCase()}</Text>
        </View>
        <View style={styles.separator} />
        <View style = {styles.itemBody}>
            <View style = {styles.amount}>
                <Text style = {styles.amountText}>{item.data[0].amount}</Text>
                <Text style = {styles.deviceText}>   {item.data[0].device}</Text>
            </View>
            <View style = {styles.amount}>
                <Text style = {styles.amountText}>{item.data[1].amount}</Text>
                <Text style = {styles.deviceText}>   {item.data[1].device}</Text>
            </View>
            <View style = {styles.amount}>
                <Text style = {styles.amountText}>{item.data[2].amount}</Text>
                <Text style = {styles.deviceText}>   {item.data[2].device}</Text>
            </View>
        </View>
    </View>
)


const styles = StyleSheet.create({

    flatListItem:{
        flex: 1,
        width: 180,
        height: 150,
        margin: 5,
        marginTop: 0,
        borderRadius: 10,
        padding: 10
    },
    item1:{
        backgroundColor: "#4682B4",
    },
    item2:{
        backgroundColor: "#DAA520",
    },
    item3:{
        backgroundColor: "#CD5C5C",
    },
    item4:{
        backgroundColor: "#20B2AA",
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#FFF',
        borderBottomWidth: 2,
    },  
    itemHeaderLabel:{
        fontSize: 14,
        fontWeight: "700",
        color: "#FFF"
    },
    amount:{
        flexDirection: "row",
        marginTop: 7,
        alignItems:  "center"
    },
    amountText: {
        fontSize: 15,
        fontWeight: "700",
        letterSpacing: 1.1,
        color: "#FFF"
    },
    deviceText:{
        fontSize: 8,
        fontWeight: "700",
        color: "#F5F5F5"
    }
})

export default Item;

