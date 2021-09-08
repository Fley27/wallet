import React, {useState, useEffect} from 'react';
import {
    Text, 
    View,
    Pressable,
    KeyboardAvoidingView,
    StyleSheet} from "react-native";
import {sex} from "../data/data"

const SexSignUp = ({navigation}) =>{

    const [state, setState] = useState({
        Sex : "Male"
    })

    const handleSelectSex = (item) =>{
        setState(prevState=>({...prevState, Sex: item }))
    }

    const handleBirthday = () =>{
        navigation.replace("BirthdaySignUp")
    }

    return(
        <View style = {styles.container}>
            <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>
                <View style = {styles.viewContainer}>
                    <Text style = {styles.label}>Select your Sex</Text>
                    
                    <View style = {styles.buttonContainer}>
                        {
                            sex.map((item, index)=>(
                                <Pressable key = {index} onPress = {()=>{
                                    handleSelectSex(item.value)
                                }} style = {styles.buttonSexOption}>
                                    <View style = {state.Sex === item.value ? styles.optionActive : styles.option}>
                                        <Text style = {state.Sex === item.value ? styles.textOptionActive : styles.textOption}>{item.value}</Text>
                                    </View>
                                </Pressable>
                            ))
                        }
                    </View>
                    
                    <Pressable onPress = {handleBirthday} style = {styles.button}>
                        <View style = {styles.next}>
                            <Text style = {styles.textNext}>NEXT</Text>
                        </View>
                    </Pressable>
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
    buttonSexOption:{
        width: "25%",
        alignItems: "center"
    },
    optionActive:{
        height: 50,
        width: 100,
        borderRadius: 40,
        backgroundColor: "#FFF",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#000",
        justifyContent: "center",
        marginTop: 5
    },
    option:{
        height: 50,
        width: 100,
        borderRadius: 40,
        backgroundColor: "#FFF",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#DCDCDC",
        justifyContent: "center",
        marginTop: 5
    },
    textOptionActive:{
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    },
    textOption:{
        color: "#DCDCDC",
        fontWeight: "bold",
        fontSize: 16,
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

export default SexSignUp;