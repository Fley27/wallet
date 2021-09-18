import React , {useState} from 'react';
import {
    SafeAreaView,
    Text, 
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Picker,
    StyleSheet} from "react-native";

const CountrySignUp = ({navigation}) =>{

    const [selectedValue, setSelectedValue] = useState("HAITI");

    const handleHomepage = () =>{
        navigation.replace("Home")
    }

    return(
        <SafeAreaView style = {styles.container}>
            <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>
                <View style = {styles.viewContainer}>
                    <Text style = {styles.label}>Choose your Country</Text>
                    <Picker
                        style = {styles.textPicker}
                        itemStyle = {styles.textPicker}
                        selectedValue={selectedValue}
                    >
                        <Picker.Item label="HAITI" value="HAITI" />
                        <Picker.Item label="USA" value="USA" />
                        <Picker.Item label="DOMINICAN REPUBLIC" value="DOMINICAN REPUBLIC" />
                        <Picker.Item label="CANADA" value="CANADA" />
                        <Picker.Item label="FRANCE" value="FRANCE" />
                    </Picker>
                    <TouchableOpacity onPress = {handleHomepage} style = {styles.button}>
                        <View style = {styles.next}>
                            <Text style = {styles.textNext}>SUBMIT</Text>
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
    textPicker:{
        marginBottom: 40,
        color: '#000',
        borderWidth: 1,
        borderColor: '#000',
        height: 60,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
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

export default CountrySignUp;