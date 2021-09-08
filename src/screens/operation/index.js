import React, {useState, useEffect} from "react";
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getIncome, filterIncome} from "../../redux/action/income";
import {GetUserDetail} from  "../../redux/action/auth";
import ListOperation from '../../component/listOperation';
import FilterIcon from "../../icons/filterIcon";
import FloatingButton from "../../component/floatingButton";
import RadioButton from "../../component/radioButton";
import {getItemIncome, getItemExpense} from "../../data/data";

const OperationHome = ({navigation, GetUserDetail, getIncome, filterIncome, ...props}) =>{

    const [state, setState] = useState({
        tab: "IC",
        device: "ALL",
        searchBy: "source",
        orderBy: "ascending"
    });

    useEffect(() => {
        GetUserDetail();
    }, [])

    useEffect(() => {
        if(props.auth){
            if(props.auth.user){
                if(state.tab === "IC"){
                    const obj = {
                        id : props.auth.user.user.id
                    }
                    getIncome(JSON.stringify(obj))
                }
            }
        }
    }, [props.auth.user])

    const [modal, setModal] = useState(false);

    const setModalVisible = () =>{
        setModal(!modal)
    }

    const setSearchBy = (item) =>{
        setState(prevState=> ({...prevState, searchBy: item}));
        alert(item)
    }

    const setOrderBy = (item) =>{
        setState(prevState=> ({...prevState, orderBy: item}))
    }
    
    const handleAdd = () =>{
        if(state.tab === "IC")
            navigation.navigate("AddIncomeScreen")
        else if (state.tab === "EX")
            navigation.navigate("AddExpenseScreen")
    }

    const selectOperation  = (item) =>{
        setState(prevState=> ({...prevState, tab: item}))
    }

    const selectDevice  = (item) =>{
        setState(prevState=> ({...prevState, device: item}))
    }

    const resetModal = () =>{
        setModal( false )
    }

    return(
        <View 
            style = {styles.container}
            onPress = {()=>resetModal()}>
            <View style = {styles.listHeaderContainer}>
                <View style = {styles.graphSection}>
                    <View style = {styles.graphHeaderTabContainer}>
                        <View style = {styles.tabOperation}>
                            <TouchableOpacity onPress = {()=> selectOperation("IC")} style = {[styles.operationOption, {borderTopLeftRadius: 10, borderBottomLeftRadius: 10} , state.tab === "IC" ? styles.operationOptionSelected : null]}>
                                <Text style = {styles.operationOptionText}>IC</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {()=> selectOperation("EX")} style = {[styles.operationOption,{borderTopRightRadius: 10, borderBottomRightRadius: 10},  state.tab === "EX" ? styles.operationOptionSelected : null]}>
                                <Text style = {styles.operationOptionText}>EX</Text>
                            </TouchableOpacity>
                        </View>
                        <View style = {styles.tabOperation}>
                            <TouchableOpacity onPress = {()=> selectDevice("ALL")} style = {[styles.operationOption, {borderTopLeftRadius: 10, borderBottomLeftRadius: 10}, state.device === "ALL" ? styles.operationOptionSelected : null]}>
                                <Text style = {styles.operationOptionText}>ALL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {()=> selectDevice("HTG")} style = {[styles.operationOption, state.device === "HTG" ? styles.operationOptionSelected : null]}>
                                <Text style = {styles.operationOptionText}>HTG</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {()=> selectDevice("USD")} style = {[styles.operationOption, state.device === "USD" ? styles.operationOptionSelected : null]}>
                                <Text style = {styles.operationOptionText}>USD</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {()=> selectDevice("DOP")} style = {[styles.operationOption, state.device === "DOP" ? styles.operationOptionSelected : null]}>
                                <Text style = {styles.operationOptionText}>DOP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
                <View style = {styles.listSearchContainer}>
                    <View>
                        <TextInput 
                            style = {styles.textInputList}
                            placeholder = "Search..."
                            autoCapitalize="none"
                            keyboardType="web-search"
                        />
                    </View>
                    <View style = {styles.filterContainer}>
                        <Text style = {styles.listSearchText}>Sort by</Text>
                        <TouchableOpacity 
                            style = {styles.filterIconContainer}
                            onPress = {()=>{setModalVisible()}}>
                            <FilterIcon 
                                width = {25}
                                height = {25}
                                color = {"#595959"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            {
                state.tab === "IC" ? (
                    <ListOperation 
                        getItem = {getItemIncome} 
                        link = {"DetailIncomeScreen"} 
                        navigation = {navigation}
                        isActivated = "income"
                        DATA = {props.income.incomes ? props.income.incomes : null}
                    />
                ): (
                    <ListOperation 
                        getItem = {getItemExpense} 
                        link = {"DetailExpenseScreen"} 
                        navigation = {navigation}
                    />
                )
            }
            <FloatingButton handleNavigation = {handleAdd}/>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                    setModalVisible();
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.categoryModal}>
                            <Text style = {styles.modalTitle}>Search by: </Text>
                            <View style = {styles.radioButtonContainer}>
                                <RadioButton
                                    value="Source"
                                    status={ state.searchBy === 'source' ? 'checked' : 'unchecked' }
                                    onPress={() => setSearchBy('source')}
                                />
                                <RadioButton
                                    value="Amount"
                                    status={ state.searchBy === 'amount' ? 'checked' : 'unchecked' }
                                    onPress={() => setSearchBy('amount')}
                                />
                                <RadioButton
                                    value="Type"
                                    status={ state.searchBy === 'type' ? 'checked' : 'unchecked' }
                                    onPress={() => setSearchBy('type')}
                                />
                            </View>
                        </View>
                        <View style = {styles.radioBar}></View>
                        <View style={styles.categoryModal}>
                            <Text style = {styles.modalTitle}>Order by</Text>
                            <View style = {styles.radioButtonContainer}>
                                <RadioButton
                                    value="Ascending"
                                    status={ state.orderBy === 'ascending' ? 'checked' : 'unchecked' }
                                    onPress={() => setOrderBy('ascending')}
                                />
                                <RadioButton
                                    value="Descending"
                                    status={ state.orderBy === 'descending' ? 'checked' : 'unchecked' }
                                    onPress={() => setOrderBy('descending')}
                                />
                            </View>
                        </View>
                        <View style = {styles.bottomModal}>
                            <View style = {styles.buttonContainer}>
                                <TouchableOpacity 
                                    style = {styles.buttonContainer}
                                    onPress = {()=>setModalVisible()}>
                                    <Text style = {styles.textButton}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "rgb(230,230,230)",
    },
    listHeaderContainer:{
        height: 49,
        padding: 20,
        backgroundColor: "rgb(230,230,230)",
    },
    listSearchContainer:{
        backgroundColor: "rgb(230,230,230)",
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between"
    },
    filterContainer:{
        width: 100,
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    listSearchText: {
        fontSize: 15,
        fontWeight: "700",
        textAlignVertical: "center", 
        alignSelf: "center",
        alignContent: "center",
        color: "#595959"
    },
    filterIconContainer:{
        textAlignVertical: "center", 
        alignSelf: "center",
        alignContent: "center",
        marginLeft: 5
    },
    listBodyCard: {
        height: 20,
        backgroundColor: "rgb(230,230,230)",
        paddingLeft: 20,
        marginBottom: 30
    },
    listTitleContainer: {
        height: "100%",
        justifyContent: "center",
        alignContent: "center"
    },
    listTitle: {
        fontSize: 20,
        fontWeight: "700",
        textAlign: "left",
    },
    graphSection:{
        flex:2,
    },
    graphHeaderTabContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    tabOperation:{
        flexDirection: "row",
        height: 30,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 25,
        backgroundColor: "#C0C0C0",
        borderRadius: 10,
        borderWidth: 0, 
    },
    operationOption:{
        width: 40,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#F5F5F5"
    },
    operationOptionText:{
        fontWeight: "700"
    },
    operationOptionSelected:{
        backgroundColor: "#FFF",
    },
    textInputList:{
        marginBottom: 20,
        color: '#000',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#FFF',
        height: 40,
        backgroundColor: "#FFF",
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
        color: "#000",
        width: 150,
        marginTop: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "80%",
    },
    modalTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#000",
        marginBottom: 20
    },
    radioBar:{
        marginBottom: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#a3a3a3",
        width: "100%"
    },
    bottomModal:{
        marginTop: 20,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer:{
        height: 45,
        width: 140,
        backgroundColor: "#A52A2A",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    textButton:{
        fontSize: 14,
        color: "#FFF",
        fontWeight: "700"
    }
})

OperationHome.propTypes = {
    income: PropTypes.object.isRequired,
    getIncome: PropTypes.func.isRequired,
    filterIncome: PropTypes.func.isRequired,
    GetUserDetail: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    income: state.income, 
    auth: state.auth
});

export default connect(mapStateToProps, { getIncome, filterIncome, GetUserDetail})(OperationHome);
