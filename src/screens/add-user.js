import React , {useState, useEffect } from "react";
import {ActivityIndicator, View, StyleSheet} from "react-native";
import { connect } from 'react-redux';
import { signUp } from "../redux/action/auth";
import PropTypes from "prop-types";
import Email from "./emailSignUp";
import Sex from "./sexSignUp";
import Name from "../component/name";
import DateComponent from "../component/date";
import Password from "../component/password";

const Add = ({navigation, signUp, ...props}) =>{ 

    const [tab, setTab] = useState(0);
    const [firstname, setChangeFirstname] = useState("");
    const [lastname, setChangeLastname] = useState("");
    const [sex, setChangeSex] = useState("MAN");
    const [email, setChangeEmail] = useState("");
    const [password, setChangePassword] = useState("");
    const [confirmPassword, setChangeConfirmPassword] = useState("");
    const [date, setDate] = useState(new Date());

    const setIncrement = () =>{
        const index = tab + 1;
        setTab(index);
    }

    const setDecrement = () =>{
        const index = tab - 1;
        setTab(index);
    }

    useEffect(() => {
        if(props.auth){
            if(props.auth.token){
                navigation.replace("Home");
            }
        }
    }, [props.auth.token]);

    const handleClick = () =>{
        const obj = {
            firstname: firstname,
            lastname: lastname,
            gender: sex,
            email: email,
            password: password, 
            country: "",
            date: date
        }
        signUp(JSON.stringify(obj))
    }

    return(
        <View style = {styles.container}>
            {
                props.auth.loading ? (
                    <ActivityIndicator size="large" color="#A52A2A" />
                ): (
                    <View style = {styles.tabContainer}>
                        {
                            tab === 0 ? (
                                <Email 
                                    setIncrement = {setIncrement}
                                    onChangeText = {setChangeEmail}
                                    value = {email}
                                />
                            ): tab === 1?(
                                <Password
                                    setDecrement = {setDecrement}
                                    setIncrement = {setIncrement}
                                    onChangeText = {setChangePassword}
                                    value = {password}
                                    confirm = {confirmPassword}
                                    onChangePassword = {setChangeConfirmPassword}
                                />
                            ): tab === 2?(
                                <Name
                                    setDecrement = {setDecrement}
                                    setIncrement = {setIncrement}
                                    onChangeText = {setChangeFirstname}
                                    value = {firstname}
                                />
                            ): tab === 3?(
                                <Name
                                    setDecrement = {setDecrement}
                                    setIncrement = {setIncrement}
                                    onChangeText = {setChangeLastname}
                                    value = {lastname}
                                />
                            ): tab === 4?(
                                <Sex 
                                    setDecrement = {setDecrement}
                                    setIncrement = {setIncrement}
                                    onChangeText = {setChangeSex}
                                    value = {sex}
                                />
                            ):tab === 5?(
                                <DateComponent
                                    date = {date}
                                    setDate = {setDate}
                                    setDecrement = {setDecrement}
                                    handleClick = {handleClick}
                                />
                            ):  null
                        }
                    </View>
                )
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    tabContainer:{
        flex: 1
    }
});

Add.propTypes = {
    auth: PropTypes.object.isRequired,    
    signUp: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    income: state.income,
    auth: state.auth
});

export default connect(mapStateToProps, {signUp})(Add);
