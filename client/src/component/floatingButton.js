import  React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PlusIcon from "../icons/plusIcon.tsx"

const FloatingButton = ({handleNavigation}) => (
    <TouchableOpacity onPress = {handleNavigation}
        style = {styles.fab}>
        <PlusIcon
            width = {20}
            height = {20}
            color = {"#FFF"}
        />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    fab: {
        margin: 16,
        backgroundColor: "#A52A2A",
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        position: "absolute",
        right: 0,
        bottom: 10,
    },
})

export default FloatingButton;