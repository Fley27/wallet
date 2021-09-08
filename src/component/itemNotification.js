import React, {useState} from "react";
import { View, Text, StyleSheet } from "react-native";


const ItemNotification = ({item}) =>{
    return(
        <View style = {styles.container}>
            <View style = {styles.iconContainer}>
                <View style = {styles.iconCircle}>
                    <Text style = {styles.icon}>
                        {item.department}
                    </Text>
                </View>
            </View>
            <View style = {styles.alertContainer}>
                <Text style = {styles.alert}>{item.alert}</Text>
                <Text style = {styles.date}>{item.date}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        minHeight: 90,
        borderBottomWidth: 0.8,
        borderColor: "rgb(226, 227, 228)",
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 20
    },
    iconContainer:{
        height: "100%",
        width: 40,
        marginTop: 10,
        minWidth: 40
    },
    iconCircle: {
        height: 40,
        width: 40,
        backgroundColor: "#E9EBEB",
        borderRadius: 20,
        justifyContent:"center",
        alignItems: "center"
    },
    icon: {
        fontWeight: "900",
        fontSize: 16,
        color: "#4B4C4C"
    },
    alertContainer:{
        marginTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
        width: "85%"

    },
    alert: {
        fontSize: 12,
        color: "#0C0E0E",
        textAlign: "left"
    },
    date:{
        marginTop: 10,
        fontSize: 10,
        color: "#2E2F30"
    },
})

export default ItemNotification;