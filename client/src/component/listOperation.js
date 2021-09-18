import React from "react";
import {View, Text, FlatList, ActivityIndicator, StyleSheet} from "react-native";
import ItemOperation from './itemOperation';


const ListOperation = ({navigation, link, loading, DATA}) =>{
    return(
        <View style = {styles.container}> 
            {
                loading ? (
                    <ActivityIndicator size="large" color="#A52A2A" />
                ): DATA.length ? ( 
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <ItemOperation navigation = {navigation} link = {link} item = {item} />}
                        keyExtractor={item => item._id}
                    />
                ): (
                    <Text style = {styles.textEmpty}>
                        {
                            link === "DetailIncomeScreen" ? "There is no Income" : "There is no Expense"
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

export default ListOperation;