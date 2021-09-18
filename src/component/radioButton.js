import React from "react";
import { View, TouchableOpacity ,Text, StyleSheet} from "react-native";

const RadioButton = ({value, status, label, setChange}) =>{
    return(
        <View style = {styles.containerRadio}>
            <View style = {styles.valueContainer}>
                <Text style = {styles.value}>{label}</Text>
            </View>
            
            <TouchableOpacity onPress={() => setChange(value)} style = {styles.circleButtonContainer}>
                <View style = {[styles.circleButton, status === "checked" ? styles.circleButtonSelected : styles.circleButton ]}></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerRadio:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        width: "80%"
    },
    
    value:{
        fontSize: 14,
        color: "#000",
    },
    circleButtonContainer:{
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#A52A2A",
        justifyContent: "center",
        alignItems: "center"
    },
    circleButtonSelected:{
        height: 12,
        width: 12,
        borderRadius: 10,
        backgroundColor: "#A52A2A"
    }
})

export default RadioButton;