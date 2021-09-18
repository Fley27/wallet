import React, {useState, useEffect} from "react";
import {
    ActivityIndicator,
    View,
    Image,
    Text,
    TextInput, 
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet} from "react-native";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {signIn} from "../redux/action/auth";
import Logo from "../images/des.png";

const Login = ({navigation, signIn,  ...props}) =>{

    useEffect(() => {
        props.auth.token !== null ? handleHomepage() : null 
    }, [props.auth]);

    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");

    const handleRegister = () =>{
        navigation.replace("RegisterScreen");
    }

    const handleHomepage = () =>{
        navigation.replace("Home");
    }

    const handleClick = () => {
        const obj = {};
        obj.email = email,
        obj.password = password
        signIn(JSON.stringify(obj));
    }

    return(
        props.auth.loading ?(
            <ActivityIndicator size="large" color="#A52A2A" />
        ):(
            <SafeAreaView style = {{flex: 1}}>
                <View style = {styles.container}>
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        contentContainerStyle={{
                            flex: 1,
                            justifyContent: 'center',
                            alignContent: 'center',
                        }}>
                            <KeyboardAvoidingView
                                keyboardVerticalOffset = {-180}
                                behavior = "height"
                                style = {styles.keyboardAvoiding}>
                                <View style = {styles.imageContainer}>
                                    <Image
                                        source={Logo}
                                        style={styles.image}
                                    />
                                    <Text style = {styles.title}>Take Control Of Your Money</Text>
                                </View>
                                <View style = {styles.signInContainer}>
                                    <View style = {styles.textInputContainer}>
                                        <TextInput
                                            style = {styles.textInput}
                                            placeholder = "Email"
                                            autoCapitalize="none"
                                            keyboardType="email-address"
                                            returnKeyType="next"
                                            value = {email}
                                            onChangeText = {onChangeEmail}
                                        />
                                        <TextInput
                                            style = {styles.textInput}
                                            placeholder = "Password"
                                            keyboardType = "ascii-capable"
                                            secureTextEntry = {true}
                                            value = {password}
                                            onChangeText = {onChangePassword}
                                        />
                                    </View>
                                    <View  style = {styles.buttonSection}>
                                        <TouchableOpacity style = {styles.forgotPassword}>
                                            <Text style = {styles.textForgotPassword}>
                                                Forgot password?
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress =  {()=>handleClick()}>
                                            <View style = {styles.login}>
                                                <Text style = {styles.textLogin}>
                                                    SIGN IN
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            <View style = {styles.registerContainer}>
                                <Text style = {styles.register}> Don't have an account yet? </Text>
                                    <TouchableOpacity style = {styles.signUpButton} onPress = {handleRegister}><Text style = {styles.textRegister}>SIGN UP</Text></TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView> 
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 5,
        marginBottom: 0
    },
    imageContainer:{
        flex: 1.4,
        alignItems: "center",
        marginTop: 25,
    },
    image: {
        width: 80,
        height: 80,
        alignItems: 'center',
        margin: 0
    },
    title:{
        fontSize: 22,
        fontWeight: "bold",
        marginTop: -10,
        height:30
    },
    keyboardAvoiding:{
        flex: 1,
        flexDirection: "column"
    },
    signInContainer:{
        flex: 2.7,
        justifyContent: "center"
    },
    textInputContainer:{
        flex: 1
    },
    textInput:{
        marginBottom: 20,
        color: '#000',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#808080',
        height: 60,
        backgroundColor: "#DCDCDC",
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        color: "#000"
    },
    buttonSection:{
        flex: 1,
        alignItems: "center",
        position: "relative",
        top: 60
    },
    forgotPassword:{
        position: "relative",
        top: -30
    },
    textForgotPassword:{
        color: "#000",
        fontWeight: "bold",
    },
    login:{
        height: 45,
        width: 300,
        borderRadius: 40,
        backgroundColor: "#FFF",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#FF4500",
        justifyContent: "center",
    },
    textLogin:{
        color: "#FF4500",
        fontWeight: "bold",
        fontSize: 16,
    },
    socialMediaButtonContainer:{
        flex: 1.3,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%"
    },
    google:{
        height: 50,
        width: 120,
        borderRadius: 40,
        backgroundColor: "#FFF",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#FFA500",
        justifyContent: "center",
        marginTop: 20
    },
    textGoogle:{
        color: "#FFA500",
        fontWeight: "bold",
        fontSize: 16,
    },
    facebook:{
        height: 50,
        width: 140,
        borderRadius: 40,
        backgroundColor: "#FFF",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#4883B4",
        justifyContent: "center",
        marginTop: 20
    },
    textFacebook:{
        color: "#4883B4",
        fontWeight: "bold",
        fontSize: 16,
    },
    registerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    register:{
        color: "#696969",
        justifyContent: "center",
        marginTop: 9
    },
    signUpButton:{
        justifyContent: "flex-end",
        marginTop: 10
    },  
    textRegister:{
        color: "#FF4500",
        fontSize: 17,
        fontWeight: "bold",
        marginTop: 0
    },
});

Login.propTypes = {
    signIn: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect (mapStateToProps, {signIn})(Login);

/*
<View style = {styles.socialMediaButtonContainer}>
                                    <Text style = {styles.textForgotPassword}>or continue with</Text>
                                    <View style = {styles.buttonContainer}>
                                        <TouchableOpacity>
                                            <View style = {styles.google}>
                                                <Text style = {styles.textGoogle}>
                                                    GOOGLE
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity>
                                            <View style = {styles.facebook}>
                                                <Text style = {styles.textFacebook}>
                                                    FACEBOOK
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
*/
