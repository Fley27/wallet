import React, {useState, useEffect} from 'react';
import {Text, Image, View, TouchableHighlight, StyleSheet} from "react-native";
import Logo from "../images/des.png";


const Register = ({navigation}) =>{

    const handleEmail = () =>{
        navigation.replace("SignUpNavigation")
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.imageContainer}>
                <Image
                    source={Logo}
                    style={styles.image}
                />
                <Text style = {styles.title}>Manage your money.</Text>      
                <Text style = {styles.title}>Lend and Sell safely.</Text>
                <Text style = {styles.title}>Do Everything for Free.</Text>
            </View>
            <View style = {styles.buttonContainer}>
                <View >
                    <Text style = {styles.caption}>Sign Up</Text>
                </View>
                <TouchableHighlight onPress = {handleEmail}>
                    <View style = {styles.email}>
                        <Text style = {styles.textEmail}>
                            Continue with Email
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style = {styles.google}>
                        <Text style = {styles.textGoogle}>
                            Continue with Google
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight>
                    <View style = {styles.facebook}>
                        <Text style = {styles.textFacebook}>
                            Continue with Facebook
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
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
    },
    imageContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    image:{
        width: 70,
        height: 70,
        alignItems: 'center',
        margin: 0
    },
    title:{
        fontSize: 28,
        fontWeight: "700",
        marginTop: 5,
        color: "#000",
    },
    buttonContainer:{
        flex: 1,
        alignItems: "center",
        width: "100%"
    },
    caption:{
        fontSize: 35,
        color: "#FF4500",
        fontWeight: "bold",
        marginBottom: 40
    },
    email:{
        height: 50,
        width: 300,
        borderRadius: 40,
        backgroundColor: "#FFF",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#288b22",
        justifyContent: "center",
        marginTop: 10
    },
    textEmail:{
        color: "#288b22",
        fontWeight: "bold",
        fontSize: 16,
    },
    google:{
        height: 50,
        width: 300,
        borderRadius: 40,
        backgroundColor: "#FFF",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#FFA500",
        justifyContent: "center",
        marginTop: 10
    },
    textGoogle:{
        color: "#FFA500",
        fontWeight: "bold",
        fontSize: 16,
    },
    facebook:{
        height: 50,
        width: 300,
        borderRadius: 40,
        backgroundColor: "#FFF",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#4883B4",
        justifyContent: "center",
        marginTop: 10
    },
    textFacebook:{
        color: "#4883B4",
        fontWeight: "bold",
        fontSize: 16,
    },
});
export default Register;