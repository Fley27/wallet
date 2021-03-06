import React from 'react';
import {
    SafeAreaView,
    Text, 
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StyleSheet} from "react-native";

const PasswordSignUp = ({navigation}) =>{

    const handleLastname = () =>{
        navigation.replace("LastnameSignUp")
    }

    return(
        <SafeAreaView style = {styles.container}>
            <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>
                <View style = {styles.viewContainer}>
                    <View style = {styles.textContainer}>
                        <Text style = {styles.label}>Enter a password</Text>
                        <Text style = {styles.minimum}>  (minimum 8 characters)</Text>
                    </View>
                    <TextInput 
                        style = {styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        keyboardType="ascii-capable-number-pad"
                        returnKeyType="next"
                    />
                    <Text style = {styles.label}>Confirm password</Text>
                    <TextInput 
                        style = {styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={true}
                        keyboardType="ascii-capable-number-pad"
                        returnKeyType="next"
                    />
                    <TouchableOpacity onPress = {handleLastname} style = {styles.button}>
                        <View style = {styles.next}>
                            <Text style = {styles.textNext}>NEXT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
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
    textContainer:{
        flexDirection: "row",
        alignItems: "center",
    },
    minimum:{
        fontSize: 10,
        color: "#000",
        fontWeight: "700",
        marginBottom: 13
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
        fontSize: 22,
        color: "#000",
        fontWeight: "700"
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
        borderColor: "#1E90FF",
        justifyContent: "center",
        marginTop: 5
    },
    textNext:{
        color: "#1E90FF",
        fontWeight: "bold",
        fontSize: 16,
    }
})

export default PasswordSignUp;