import React from "react";
import {ActivityIndicator, Text, View, FlatList, StyleSheet} from "react-native";
import ItemCredit from "./itemCredit";

const ListCredit = ({navigation, link, DATA, loading}) =>{
    return(
        <View style = {styles.container}> 
            {
                loading ? (
                    <ActivityIndicator size="large" color="#A52A2A" />
                ): DATA.length ? ( 
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <ItemCredit navigation = {navigation} link = {link} item = {item} />}
                        keyExtractor={item => item._id}
                    />
                ): (
                    <Text style = {styles.textEmpty}>
                        {
                            link === "DetailLoanScreen" ? "There is no Loan" : "There is no Borrowing"
                        }
                    </Text>
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
    },
    textEmpty: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "700"
    }
})


export default ListCredit;