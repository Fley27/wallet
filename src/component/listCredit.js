import React from "react";
import {View, VirtualizedList, StyleSheet} from "react-native";
import ItemCredit from "./itemCredit";


const getItemCount = (data) => 10;

const DATA = [];

const ListCredit = ({navigation, link, getItem}) =>{

    return(
        <View style = {styles.container}> 
            <VirtualizedList
                data={DATA}
                initialNumToRender={0}
                renderItem={({ item }) => <ItemCredit navigation = {navigation} link = {link} item = {item} />}
                keyExtractor={item => item.id}
                getItemCount={getItemCount}
                getItem={getItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgb(230,230,230)"
    }
})

export default ListCredit;