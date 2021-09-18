import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import NotificationIcon from "../icons/notification.tsx"

const NavigationDrawerHeader = ({navigation}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity 
                style = {styles.container}
                onPress = {()=>{
                    navigation.navigate("Notification");
                }}
            >
                <NotificationIcon
                    width = {25}
                    height = {25}
                    color = {"#FFF"}
                />
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        marginRight: 15
    },
    imageContainer: {
        width: 45,
        height: 45,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#D3D3D3",
        marginRight:10,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 42,
        height: 42,
        alignItems: 'center',
        borderRadius: 40,
    },
});

export default NavigationDrawerHeader;