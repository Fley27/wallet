import React from "react";
import {Modal, View, TouchableOpacity, Text, StyleSheet} from "react-native";

const RepeatProcess = ({setModalVisible, handleConfirm, handleBack, show, label, setTab}) =>{

    
    return(
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                onRequestClose={() => {
                    setModalVisible();
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style = {styles.modalTitle}>Add another {`${label}`} ?</Text>
                        <View style = {styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => handleBack()}
                            >
                                <Text style={styles.textStyle}>NO</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => handleConfirm()}
                            >
                                <Text style={styles.textStyle}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> 
            </Modal>
        </>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        width: "100%"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
        height: 200
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "600",
        color: "#000"
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%"
    },
    button: {
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        marginTop: 20,
        width: 60,
        height: 40,
        flexDirection: "row",
        backgroundColor: "#A52A2A",
        textAlign: "center"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        width: "100%"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
});

export default RepeatProcess;