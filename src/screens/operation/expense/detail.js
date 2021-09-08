import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import EditIcon from "../../../icons/editIcon.tsx";
import DeleteIcon from '../../../icons/deleteIcon.tsx';
import {getItemExpenseDetail} from "../../../data/data";
import Delete from "../../../component/deleteconfirmation";

const Detail = ({navigation}) => {
    const {amount, device, date, type, activity, reason} = getItemExpenseDetail;
    const [show, setShow] = useState(false);

    const setModalVisible = () =>{
        setShow(!show)
    }
    
    const handleConfirm = () =>{
        setShow(!show)
    }
    
    return(
        <View style = {styles.container}>
            <View style = {styles.container}>
                <View style = {styles.headerContainer}>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Amount</Text>
                        </View>
                        <View style = {styles.amountContainer}>
                            <Text style = {styles.textLabel}>{amount}</Text>
                            <Text style = {styles.textDevice}>  {device}</Text>
                        </View>
                    </View>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Activity</Text>
                        </View>
                        <View style = {styles.amountContainer}>
                            <Text style = {styles.textLabel}>{activity}</Text>
                        </View>
                    </View>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Category</Text>
                        </View>
                        <View style = {styles.amountContainer}>
                            <Text style = {styles.textLabel}>{type}</Text>
                        </View>
                    </View>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Date</Text>
                        </View>
                        <View style = {styles.amountContainer}>
                            <Text style = {styles.textLabel}>{date}</Text>
                        </View>
                    </View>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Description</Text>
                        </View>
                        <View style = {styles.amountContainer}>
                            <Text style = {styles.textLabel}>{reason}</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.buttonText}>EDIT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress = {()=>setModalVisible()}
                        style = {styles.button}
                    >
                        <Text style = {styles.buttonText}>DELETE</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Delete 
                show = {show}
                setModalVisible = {setModalVisible}
                handleConfirm = {handleConfirm}
                label = "expense"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        flex: 1,
        alignItems: "center",
        backgroundColor: "rgb(230,230,230)"
    },
    headerContainer:{
        flexDirection: "column",
        backgroundColor: "#FFF",
        margin: 5,
        marginTop: 20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        padding: 15,
        width: "97%"
    },
    header:{
        flexDirection: "row",
        borderTopWidth: 0.8,
        borderColor: "rgb(226, 227, 228)",
        height: 30
    },
    label: {
        fontSize: 15,
        fontWeight: "bold",
        color: "rgb(128, 128, 128)",
        textAlign: "left"
    },
    labelContainer:{
        marginRight: 20,
        width: 120,
        marginBottom: "auto",
        marginTop: "auto"
    },
    amountContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    textLabel:{
        fontSize: 15,
        fontWeight: "bold",
        color: "#2C2D2D",
        marginTop: 2
    },
    textDevice:{
        fontSize: 8,
        fontWeight: "700"
    },
    textDate:{
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
        color: "#000"
    },
    typeContainer:{
        marginTop: 20
    },
    type:{
        fontSize: 19,
        fontWeight: "bold",
        color: "#000"
    },
    source:{
        fontSize: 19,
        fontWeight: "bold",
        color: "#000",
        marginTop: 20
    },
    buttonContainer:{
        flexDirection: "row",
        margin: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    button:{
        flexDirection: "row",
        justifyContent: "space-around",
        width: "35%",
        backgroundColor: "#FFF",
        height: 50,
        margin: 15,
        borderRadius: 40, 
        alignItems: "center",
    },
    buttonText:{
        color: "#000",
        fontSize: 14,
        fontWeight: "700"
    },
    statusCircle: {
        height: 10,
        width: 10,
        backgroundColor: "#000",
        borderRadius: 10
    },
})

export default Detail;