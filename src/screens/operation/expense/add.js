import React , {useState, useEffect } from "react";
import {View, StyleSheet} from "react-native";
import Amount from "../../../component/amount";
import Device from '../../../component/currency';
import Type from "../../../component/type";
import Activity from "../../../component/activity";
import Reason from "../../../component/reason";
import {typeExpense} from "../../../data/data"

const AddExpense = ({navigation}) =>{ 

    const [tab, setTab] = useState(0);

    const setIncrement = () =>{
        const index = tab + 1;
        setTab(index);
    }

    const setDecrement = () =>{
        const index = tab - 1;
        setTab(index);
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.tabContainer}>
                {
                    tab === 0 ? (
                        <Amount 
                            setIncrement = {setIncrement}
                        />
                    ): tab === 1?(
                        <Device 
                            setDecrement = {setDecrement}
                            setIncrement = {setIncrement}
                        />
                    ): tab === 2?(
                        <Type
                            setDecrement = {setDecrement}
                            setIncrement = {setIncrement}
                            types = {typeExpense}
                            selectItem = "MANDOTARY"
                        />
                    ): tab === 3?(
                        <Activity
                            setDecrement = {setDecrement}
                            setIncrement = {setIncrement}
                        />
                    ): tab === 4?(
                        <Reason
                            setDecrement = {setDecrement}
                        />
                    ): null
                }
            </View>
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


export default AddExpense;
