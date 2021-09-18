import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NumberFormat from 'react-number-format';


const Item = ({item}) =>(
    <View style = {[styles.flatListItem, 
        item._id === "Incomes" ? styles.item1 : item._id === "Expenses" ?  styles.item2 : 
        item._id === "Borrowings" ? styles.item3 : item._id === "Loans" ? styles.item4 : null]}>
        <View style = {styles.itemHeader}>
            <Text style = {styles.itemHeaderLabel}>{item._id.toUpperCase()}</Text>
        </View>
        <View style={styles.separator} />
        <View style = {styles.itemBody}>
            <View style = {styles.amount}>
                <Text style = {styles.amountText}>
                    <NumberFormat
                        value={item.total_usd}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        renderText={(value, props) => <Text {...props}>{value}</Text>}
                    />
                </Text>
                <Text style = {styles.deviceText}>  USD</Text>
            </View>
            <View style = {styles.amount}>
                <Text style = {styles.amountText}>
                    <NumberFormat
                        value={item.total_dop}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={''}
                        renderText={(value, props) => <Text {...props}>{value}</Text>}
                    />
                </Text>
                <Text style = {styles.deviceText}>  RD$ </Text>
            </View>
            <View style = {styles.amount}>
                <Text style = {styles.amountText}>
                    <NumberFormat
                        value={item.total_htg}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={''}
                        renderText={(value, props) => <Text {...props}>{value}</Text>}
                    />
                </Text>
                <Text style = {styles.deviceText}>  G</Text>
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
        color: "#FFF"
    }
})

export default Item;

