import React from "react";
import {Modal, View, TouchableOpacity, Text, StyleSheet} from "react-native";

const DeleteConfirmation = ({setModalVisible, handleConfirm, show, label}) =>{

    
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
                        <Text style = {styles.modalTitle}>Are you sure, you want to delete this {`${label}`} ?</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => handleConfirm()}
                        >
                            <Text style={styles.textStyle}>Yes</Text>
                        </TouchableOpacity>
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
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "65%",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#000"
    },
    button: {
        borderRadius: 30,
        padding: 10,
        elevation: 2,
        marginTop: 20,
        width: 70,
        flexDirection: "row",
        backgroundColor: "#A52A2A"
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 15,
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
});

export default DeleteConfirmation;