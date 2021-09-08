import React, {useState} from "react";
import { View, Text, VirtualizedList, StyleSheet, ScrollView} from "react-native";
import ItemNotification from "../../component/itemNotification"; 
import {getItemNotification} from "../../data/data";

const getItemCount = (data) => 10;

const DATA = [];

const NotificationHome = () =>{
    const data = [getItemNotification, getItemNotification, getItemNotification, getItemNotification, getItemNotification];

    return(
        <ScrollView style = {styles.srollview}>
            <View style = {styles.container}>
                <View style = {styles.listContainer}>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Today</Text>
                        </View>
                    </View>
                    <View style = {styles.list}>
                        {
                            data.map((item, index)=>(
                                <ItemNotification key = {index} item = {item}/>
                            ))
                        }
                    </View>
                </View>
                <View style = {styles.listContainer}>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Earlier</Text>
                        </View>
                    </View>
                    <View style = {styles.list}>
                        {
                            data.map((item, index)=>(
                                <ItemNotification key = {index} item = {item}/>
                            ))
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    srollview:{
        marginHorizontal: 0,
    },
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "rgb(230,230,230)",
        padding: 20,
        paddingLeft: 0,
        paddingRight: 0,
    },
    listContainer: {
        width: "100%",
        backgroundColor: "#FFF",
        marginTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    header: {
        height: 50,
        borderBottomWidth: 0.8,
        borderColor: "rgb(226, 227, 228)",
    },
    labelContainer: {
        marginTop: "auto",
        marginBottom: "auto"
    },
    label: {
        fontWeight: "600",
        fontSize: 16,
        color: "#252223",
    },
    list: {
        width: "100%"
    }
});

export default NotificationHome;
