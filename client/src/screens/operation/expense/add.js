import React , {useState, useEffect } from "react";
import { connect } from 'react-redux';
import { createExpense, selectExpense} from "../../../redux/action/expense";
import {GetUserDetail} from  "../../../redux/action/auth";
import PropTypes from "prop-types";
import {ActivityIndicator, View, StyleSheet} from "react-native";
import Amount from "../../../component/amount";
import Device from '../../../component/currency';
import Type from "../../../component/type";
import Activity from "../../../component/activity";
import Reason from "../../../component/reason";
import RepeatProcess from "../../../component/repeatProcess";
import {typeExpense} from "../../../data/data"

const AddExpense = ({navigation, createExpense,selectExpense, GetUserDetail, ...props}) =>{ 

    const [tab, setTab] = useState(0);
    const [amount, setChangeAmount] = useState("");
    const [currency, setChangeCurrency] = useState("");
    const [category, setChangeCategory] = useState("");
    const [reason, setChangeReason] = useState("");
    const [activity, setChangeActivity] = useState("");


    const [show, setShow] = useState(false);

    const setModalVisible = () =>{
        setShow(!show)
    }
    
    const handleNoRepeat = () =>{
        setShow(!show);
        navigation.navigate("OperationHomeScreen")
        selectExpense(null)
    }

    const handleRepeat = () =>{
        setShow(!show);
        setChangeAmount("");
        setChangeCurrency("");
        setChangeCategory("");
        setChangeReason("");
        setChangeActivity("");
        selectExpense(null);
        setTab(0);
    }

    useEffect(() => {
        GetUserDetail();
    }, [])

    useEffect(() => {
        if(props.expense.expense){
            setShow(true)
        }

    }, [props.expense.expense])

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
            category: category.length ? category : "MANDATORY",
            description: reason,
            activity: activity,
            user: props.auth.user.user.id
        }
        createExpense(JSON.stringify(obj))
    }

    return(
        <View style = {styles.container}>
            {
                props.expense.loading ? (
                    <ActivityIndicator size="large" color="#A52A2A" />
                ): (
                    <View style = {styles.tabContainer}>
                        {
                            tab === 0 ? (
                                <Amount 
                                    setIncrement = {setIncrement}
                                    onChangeText = {setChangeAmount}
                                    value = {amount}
                                />
                            ): tab === 1?(
                                <Device 
                                    setDecrement = {setDecrement}
                                    setIncrement = {setIncrement}
                                    onChangeText = {setChangeCurrency}
                                    value = {currency}
                                />
                            ): tab === 2?(
                                <Type
                                    setDecrement = {setDecrement}
                                    setIncrement = {setIncrement}
                                    types = {typeExpense}
                                    selectItem = "MANDATORY"
                                    onChangeText = {setChangeCategory}
                                    value = {category}
                                />
                            ): tab === 3?(
                                <Activity
                                    setDecrement = {setDecrement}
                                    setIncrement = {setIncrement}
                                    onChangeText = {setChangeActivity}
                                    value = {activity}
                                />
                            ): tab === 4?(
                                <Reason
                                    setDecrement = {setDecrement}
                                    onChangeText = {setChangeReason}
                                    handleClick = {handleClick}
                                    value = {reason}
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
                label = "expense"
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


AddExpense.propTypes = {
    expense: PropTypes.object.isRequired,   
    auth: PropTypes.object.isRequired,    
    createExpense: PropTypes.func.isRequired,
    GetUserDetail: PropTypes.func.isRequired,
    selectExpense: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    expense: state.expense,
    auth: state.auth
});

export default connect(mapStateToProps, {createExpense, GetUserDetail, selectExpense})(AddExpense);
