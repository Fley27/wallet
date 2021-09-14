import React from "react";
import {ActivityIndicator, View, FlatList, StyleSheet} from "react-native";
import ItemCredit from "./itemCredit";

const ListCredit = ({navigation, link, isActivated, DATA}) =>{
    return(
        <View style = {styles.container}> 
            {
                DATA ? ( 
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <ItemCredit navigation = {navigation} link = {link} item = {item} />}
                        keyExtractor={item => item._id}
                    />
                ): (
                    <ActivityIndicator size="large" color="#A52A2A" />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgb(230,230,230)",
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})


export default ListCredit;