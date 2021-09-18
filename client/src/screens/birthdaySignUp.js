import React , {useState} from 'react';
import {
    SafeAreaView,
    Text, 
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet} from "react-native";

const BirthdaySignUp = ({navigation}) =>{

    const [state, setState] = useState({
        date: "2010-06-01"
    })

    const handleCountry = () =>{
        navigation.replace("CountrySignUp")
    }

    return(
        <SafeAreaView style = {styles.container}>
            <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>
                <View style = {styles.viewContainer}>
                    <Text style = {styles.label}>Enter your age</Text>
                    <TextInput 
                        style = {styles.textInput}
                        placeholder = "18"
                        autoCapitalize="none"
                        keyboardType="numeric"
                        returnKeyType="next"
                    />
                    <TouchableOpacity onPress = {handleCountry} style = {styles.button}>
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

export default BirthdaySignUp;