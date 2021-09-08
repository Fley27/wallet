import React , {useState, useEffect } from "react";
import {View, StyleSheet} from "react-native";
import { connect } from 'react-redux';
import { createBorrowing} from "../../../redux/action/borrowing";
import {GetUserDetail} from  "../../../redux/action/auth";
import PropTypes from "prop-types";
import Amount from "../../../component/amount";
import Currency from '../../../component/currency';
import Type from "../../../component/type";
import Source from "../../../component/sourceIncome";
import RepeatProcess from "../../../component/repeatProcess";
import {typeIncome} from "../../../data/data"

const Add = ({navigation, createIncome, GetUserDetail, ...props}) =>{ 

    const [tab, setTab] = useState(0);
    const [amount, setChangeAmount] = useState("");
    const [currency, setChangeCurrency] = useState("");
    const [category, setChangeCategory] = useState("");
    const [source, setChangeSource] = useState("");

    const [show, setShow] = useState(false);

    const setModalVisible = () =>{
        setShow(!show)
    }
    
    const handleConfirm = () =>{
        setShow(!show)
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
            category: category.length ? category : "GIFT",
            source: source,
            user: props.auth.user.user.id
        }
        createIncome(JSON.stringify(obj))
    }

    return(
        <View style = {styles.container}>
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
                    ): tab === 2?(
                        <Type
                            setDecrement = {setDecrement}
                            setIncrement = {setIncrement}
                            types = {typeIncome}
                            selectItem = "GIFT"
                            onChangeText = {setChangeCategory}
                            value = {category}
                        />
                    ): tab === 3?(
                        <Source
                            setDecrement = {setDecrement}
                            onChangeText = {setChangeSource}
                            handleClick = {handleClick}
                            value = {source}
                        />
                    ): null
                }
            </View>
            <RepeatProcess
                show = {show}
                setModalVisible = {setModalVisible}
                handleConfirm = {handleConfirm}
                label = "income"
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer:{
        flex: 1
    }
});

Add.propTypes = {
    borrowing: PropTypes.object.isRequired,   
    auth: PropTypes.object.isRequired,    
    createBorrowing: PropTypes.func.isRequired,
    GetUserDetail: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    borrowing: state.income,
    auth: state.auth
});

export default connect(mapStateToProps, {createBorrowing,GetUserDetail})(Add);
