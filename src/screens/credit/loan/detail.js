import React, {useState} from "react";
import dateFormat from "dateformat"
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Delete from "../../../component/deleteconfirmation";


const Detail = ({loan}) => {
    const {amount, currency, date, name, phone, email, status, paidDate, outLimited, expectedDate} = loan.loan.credit;
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
                            <Text style = {styles.textDevice}>  {currency}</Text>
                        </View>
                    </View>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Lender</Text>
                        </View>
                        <View style = {styles.amountContainer}>
                            <Text style = {styles.textLabel}>{name}</Text>
                        </View>
                    </View>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Email</Text>
                        </View>
                        <View style = {styles.amountContainer}>
                            <Text style = {styles.textLabel}>{email}</Text>
                        </View>
                    </View>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Phone</Text>
                        </View>
                        <View style = {styles.amountContainer}>
                            <Text style = {styles.textLabel}>{phone}</Text>
                        </View>
                    </View>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Date</Text>
                        </View>
                        <View style = {styles.amountContainer}>
                            <Text style = {styles.textLabel}>{dateFormat(date, "mm-dd-yyyy" )}</Text>
                        </View>
                    </View>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Status</Text>
                        </View>
                        <View style = {styles.amountContainer}>
                            <Text style = {styles.textLabel}>{status ? "Paid" : "Unpaid" }</Text>
                            <View style = {[styles.statusCircle, styles.device, {marginLeft: 5},
                                outLimited === true && status === true ? {backgroundColor: "rgb(66, 179, 245)"} : 
                                outLimited === false && status === true ? {backgroundColor: "rgb(87, 245, 66)"} : 
                                outLimited === true && status === false ? {backgroundColor: "rgb(245, 120, 66)"}: 
                                outLimited === false && status === false ? {backgroundColor: "rgb(214, 13, 50)"} : null]}></View>
                        </View>
                    </View>
                    <View style = {styles.header}>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Expected date</Text>
                        </View>
                        <View style = {styles.amountContainer}>
                            <Text style = {styles.textLabel}>{dateFormat(expectedDate, "mm-dd-yyyy" )}</Text>
                        </View>
                    </View>
                    {
                        paidDate ? (
                            <View style = {styles.header}>
                                <View style = {styles.labelContainer}>
                                    <Text style = {styles.label}>Paid date</Text>
                                </View>
                                <View style = {styles.amountContainer}>
                                    <Text style = {styles.textLabel}>{paidDate ? dateFormat(paidDate, "mm-dd-yyyy" ) : ""}</Text>
                                </View>
                            </View>
                        ): null
                    }
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
                label = "income"
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

Detail.propTypes = {
    loan: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    loan: state.loan, 
});

export default connect(mapStateToProps)(Detail);