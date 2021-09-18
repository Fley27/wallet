import React , {useState, useEffect } from "react";
import {ActivityIndicator, View, StyleSheet} from "react-native";
import { connect } from 'react-redux';
import { createLoan, selectLoan } from "../../../redux/action/loan";
import {GetUserDetail} from  "../../../redux/action/auth";
import PropTypes from "prop-types";
import Amount from "../../../component/amount";
import Name from "../../../component/name";
import Currency from '../../../component/currency';
import DateComponent from "../../../component/date";
import Phone from "../../../component/phone";
import Email from "../../../component/email";
import RepeatProcess from "../../../component/repeatProcess";

const Add = ({navigation, createLoan, selectLoan, GetUserDetail, ...props}) =>{ 

    const [tab, setTab] = useState(0);
    const [amount, setChangeAmount] = useState("");
    const [name, setName] = useState("");
    const [currency, setChangeCurrency] = useState("");
    const [phone, setChangePhone] = useState("");
    const [email, setChangeEmail] = useState("");
    const [expectedDate, setChangeExpectedDate] = useState(new Date());

    const [show, setShow] = useState(false);

    const setModalVisible = () =>{
        setShow(!show)
    } 
    
    useEffect(() => {
        if(props.loan.loan){
            setShow(true)
        }

    }, [props.loan.loan])
    
    const handleNoRepeat = () =>{
        setShow(!show);
        navigation.navigate("CreditHomeScreen")
        selectLoan(null);
    }

    const handleRepeat = () =>{
        setShow(!show);
        setChangeAmount("");
        setChangeCurrency("");
        setChangePhone("");
        setChangeEmail("");
        setChangeExpectedDate("");
        setName("");
        setTab(0);
        selectLoan(null);
    }

    useEffect(() => {
        GetUserDetail();
    }, [])

    const setIncrement = () =>{
        const index = tab + 1;
        setTab(index);
    }

    const setDecrement = () =>{
        const index = tab - 1;
        setTab(index);
    }

    const handleClick = () =>{
        const obj = {
            amount: amount,
            currency: currency.length ? currency : "USD",
            phone: phone,
            name: name,
            email: email,
            expectedDate: expectedDate,
            lender: props.auth.user.user.id
        }
        createLoan(JSON.stringify(obj));
    }

    return(
        <View style = {styles.container}>
            {
                props.loan.loading ? (
                    <ActivityIndicator size="large" color="#A52A2A" />
                ):(
                    <View style = {styles.tabContainer}>
                        {
                            tab === 0 ? (
                                <Amount 
                                    setIncrement = {setIncrement}
                                    onChangeText = {setChangeAmount}
                                    value = {amount}
                                />
                            ): tab === 1?(
                                <Currency 
                                    setDecrement = {setDecrement}
                                    setIncrement = {setIncrement}
                                    onChangeText = {setChangeCurrency}
                                    value = {currency}
                                />
                            ):tab === 2?(
                                <Name
                                    setDecrement = {setDecrement}
                                    setIncrement = {setIncrement}
                                    onChangeText = {setName}
                                    value = {name}
                                />
                            ): tab === 3?(
                                <Email
                                    setDecrement = {setDecrement}
                                    setIncrement = {setIncrement}
                                    onChangeText = {setChangeEmail}
                                    value = {email}
                                />
                            ):tab === 4?(
                                <Phone
                                    setDecrement = {setDecrement}
                                    setIncrement = {setIncrement}
                                    onChangeText = {setChangePhone}
                                    value = {phone}
                                />
                            ):  tab === 5?(
                                <DateComponent
                                    date = {expectedDate}
                                    setDate = {setChangeExpectedDate}
                                    setDecrement = {setDecrement}
                                    handleClick = {handleClick}
                                />
                            ): null
                        }
                    </View>
                )
            }
            <RepeatProcess
                show = {show}
                setModalVisible = {setModalVisible}
                handleConfirm = {handleRepeat}
                handleBack = {handleNoRepeat}
                label = "loan"
            />
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
    loan: PropTypes.object.isRequired,   
    auth: PropTypes.object.isRequired,    
    createLoan: PropTypes.func.isRequired,
    GetUserDetail: PropTypes.func.isRequired,
    selectLoan: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    loan: state.loan,
    auth: state.auth
});

export default connect(mapStateToProps, {createLoan, selectLoan, GetUserDetail})(Add);
