import React, {useState, useEffect} from 'react';
import {
    Text, 
    View,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity
} from "react-native";


const Type = ({setDecrement, setIncrement, types, selectItem, onChangeText}) =>{

    const [state, setState] = useState({
        type : selectItem
    })

    const handleSelectType = (item) =>{
        setState(prevState=>({...prevState, type: item }))
    }
    
    return(
        <View style = {styles.container}>
            <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>
                <View style = {styles.viewContainer}>
                    <Text style = {styles.label}>Select</Text>
                    
                    <View style = {styles.buttonContainer}>
                        {
                            types.map((item, index)=>(
                                <TouchableOpacity key = {index} onPress = {()=>{
                                    handleSelectType(item.value)
                                    onChangeText(item.value)
                                }} style = {styles.buttonSexOption}>
                                    <View style = {state.type === item.value ? styles.optionActive : styles.option}>
                                        <Text style = {state.type === item.value ? styles.textOptionActive : styles.textOption}>{item.value}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
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
        justifyContent: "space-around",
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
        fontSize: 14,
    },
    textOption:{
        color: "#DCDCDC",
        fontWeight: "bold",
        fontSize: 14,
    },
    button:{
        alignItems:"center"
    },
    next:{
        height: 50,
        width: 150,
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

export default Type;