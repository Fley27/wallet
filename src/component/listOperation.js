import React, {useEffect} from "react";
import {View, FlatList, Text, StyleSheet} from "react-native";
import ItemOperation from './itemOperation';


const ListOperation = ({navigation, link, isActivated, DATA}) =>{
    return(
        <View style = {styles.container}> 
            {
                DATA ? (
                    
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => <ItemOperation navigation = {navigation} link = {link} item = {item} />}
                        keyExtractor={item => item._id}
                    />
                ): (
                    <View>
                        <Text>No {isActivated} yet.</Text>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgb(230,230,230)"
    }
})

export default ListOperation;