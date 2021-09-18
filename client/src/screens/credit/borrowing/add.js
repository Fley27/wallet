import React , {useState, useEffect } from "react";
import {ActivityIndicator, View, StyleSheet} from "react-native";
import { connect } from 'react-redux';
import { createBorrowing, selectBorrowing} from "../../../redux/action/borrowing";
import {GetUserDetail} from  "../../../redux/action/auth";
import PropTypes from "prop-types";
import Amount from "../../../component/amount";
import Name from "../../../component/name";
import Currency from '../../../component/currency';
import DateComponent from "../../../component/date";
import Phone from "../../../component/phone";
import Email from "../../../component/email";
import RepeatProcess from "../../../component/repeatProcess";

const Add = ({navigation, createBorrowing, selectBorrowing, GetUserDetail, ...props}) =>{ 

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
        if(props.borrowing.borrowing){
            setShow(true)
        }

    }, [props.borrowing.borrowing])
    
    const handleNoRepeat = () =>{
        setShow(!show);
        navigation.navigate("CreditHomeScreen")
        selectBorrowing(null);
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
        selectBorrowing(null);
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
    //amount, currency, status, phone, email, expectedDate, paidDate, borrower
    const handleClick = () =>{
        const obj = {
            amount: amount,
            currency: currency.length ? currency : "USD",
            phone: phone,
            name: name,
            email: email,
            paidDate: new Date(),
            expectedDate: expectedDate,
            borrower: props.auth.user.user.id
        }
        createBorrowing(JSON.stringify(obj));
    }

    return(
        <View style = {styles.container}>
            {
                !props.borrowing.loading ? (
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
                ): (
                    <ActivityIndicator size="large" color="#A52A2A" />
                )
            }
            <RepeatProcess
                show = {show}
                setModalVisible = {setModalVisible}
                handleConfirm = {handleRepeat}
                handleBack = {handleNoRepeat}
                label = "income"
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
    borrowing: PropTypes.object.isRequired,   
    auth: PropTypes.object.isRequired,    
    createBorrowing: PropTypes.func.isRequired,
    GetUserDetail: PropTypes.func.isRequired,
    selectBorrowing: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    borrowing: state.borrowing,
    auth: state.auth
});

export default connect(mapStateToProps, {createBorrowing, selectBorrowing, GetUserDetail})(Add);
