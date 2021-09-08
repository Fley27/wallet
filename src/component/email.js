import React , {useState} from 'react';
import {
    Text, 
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet} from "react-native";

const Email = ({setIncrement, onChangeText, value}) =>{
    return(
        <View style = {styles.container}>
            <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>
                <View style = {styles.viewContainer}>
                    <Text style = {styles.label}>Enter your email</Text>
                    <TextInput 
                        style = {styles.textInput}
                        placeholder = "johndoe@gmail.com"
                        autoCapitalize="none"
                        keyboardType= "email-address"
                        returnKeyType="next"
                        onChangeText = {onChangeText}
                        value = {value}
                    />
                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity onPress = {setDecrement} style = {styles.button}>
                            <View style = {styles.next}>
                                <Text style = {styles.textNext}>BACK</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {setIncrement} style = {styles.button}>
                            <View style = {styles.next}>
                                <Text style = {styles.textNext}>NEXT</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30
    },
    KeyboardAvoidingView:{
        flex: 1,
        width: "100%"
    },
    viewContainer:{
        flex: 1,
    },
    label:{
        fontSize: 22,
        color: "#000",
        fontWeight: "700",
        marginBottom: 13
    },
    textInput:{
        marginBottom: 20,
        color: '#000',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#808080',
        height: 60,
        backgroundColor: "#FFF",
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        color: "#000"
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30
    },
    button:{
        alignItems:"center"
    },
    next:{
        height: 50,
        width: 300,
        borderRadius: 40,
        backgroundColor: "#FFF",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#A52A2A",
        justifyContent: "center",
        marginTop: 5
    },
    textNext:{
        color: "#A52A2A",
        fontWeight: "bold",
        fontSize: 16,
    }
})

export default Email;