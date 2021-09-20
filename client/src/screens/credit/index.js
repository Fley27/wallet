import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getBorrowing } from "../../redux/action/borrowing";
import { getLoan} from "../../redux/action/loan";
import { GetUserDetail } from "../../redux/action/auth";
import { View, Text, Modal, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import ListCredit from "../../component/listCredit";
import FilterIcon from "../../icons/filterIcon";
import FloatingButton from "../../component/floatingButton";
import RadioButton from "../../component/radioButton";
import {getItemLoan, getItemCredit} from "../../data/data";

const CreditHome = ({navigation, getBorrowing, getLoan, GetUserDetail, ...props}) =>{

    const [state, setState] = useState({
        tab: "LO",
        device: "ALL",
        searchBy: "source",
        orderBy: "ascending"
    });

    const [searchBy, setSearchBy] = useState("amount");
    const [orderBy, setOrder] = useState("ascending");
    const [amount_, setAmount] = useState(0);

    useEffect(() => {
        GetUserDetail(); 
    }, [])

    useEffect(() => {
        if(props.auth){
            if(props.auth.user){
                let currency = [], amount = 100000000000;
                if(state.device === "ALL")
                    currency = ["USD", "DOP", "HTG"];
                else{
                    currency = [];
                    currency.push(state.device)
                }
                if(searchBy === "amount"){
                    if(amount_ > 0){
                        amount = parseFloat(amount_);
                    }
                }else if(searchBy === "name"){
                    
                }
                if(state.tab === "LO"){
                    const obj = {
                        lender: props.auth.user.user.id,
                        currency: currency,
                        amount: amount
                    }
                    getLoan(JSON.stringify(obj))
                }else if (state.tab === "BO"){
                    const obj = {
                        borrower: props.auth.user.user.id,
                        currency: currency,
                        amount: amount
                    }
                    getBorrowing(JSON.stringify(obj))
                }
            }
        }
    }, [props.auth.user,state.tab, state.device, amount_]);

    const selectCredit  = (item) =>{
        setState(prevState=> ({...prevState, tab: item}))
    }

    const [modal, setModal] = useState(false);

    const setModalVisible = () =>{
        setModal(!modal)
    }

    const setChangeSearchBy = (item) =>{
        setSearchBy(item);
    }

    const setChangeOrder = (item) =>{
        setOrder(item)
    }
    
    const handleAdd = () =>{
        if(state.tab === "LO")
            navigation.navigate("AddLoanScreen")
        else if (state.tab === "BO")
            navigation.navigate("AddBorrowingScreen")
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
                            <TouchableOpacity onPress = {()=> selectCredit("LO")} style = {[styles.operationOption, {borderTopLeftRadius: 10, borderBottomLeftRadius: 10} , state.tab === "LO" ? styles.operationOptionSelected : null]}>
                                <Text style = {styles.operationOptionText}>LO</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {()=> selectCredit("BO")} style = {[styles.operationOption,{borderTopRightRadius: 10, borderBottomRightRadius: 10},  state.tab === "BO" ? styles.operationOptionSelected : null]}>
                                <Text style = {styles.operationOptionText}>BO</Text>
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
                            keyboardType= "number-pad"
                            value= {amount_}
                            onChangeText = {setAmount}
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
                state.tab === "LO" ? (
                    <ListCredit 
                        getItem = {getItemLoan} 
                        link = {"DetailLoanScreen"} 
                        navigation = {navigation}
                        isActivated = "loan"
                        DATA = {props.loan.loans ? props.loan.loans : []}
                        loading = {props.loan.loading}
                    />
                ): (
                    <ListCredit 
                        getItem = {getItemCredit} 
                        link = {"DetailBorrowingScreen"} 
                        navigation = {navigation}
                        isActivated = "borrowing"
                        DATA = {props.borrowing.borrowings ? props.borrowing.borrowings : []}
                        loading = {props.borrowing.loading}
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
                                    value="amount"
                                    label = "Amount"
                                    status={ searchBy === 'amount' ? 'checked' : 'unchecked' }
                                    setChange = {setChangeSearchBy}
                                />
                            </View>
                        </View>
                        <View style = {styles.radioBar}></View>
                        <View style={styles.categoryModal}>
                            <Text style = {styles.modalTitle}>Order by</Text>
                            <View style = {styles.radioButtonContainer}>
                                <RadioButton
                                    value="ascending"
                                    label="Ascending"
                                    status={ orderBy === 'ascending' ? 'checked' : 'unchecked' }
                                    setChange = {setChangeOrder}
                                />
                                <RadioButton
                                    value="descending"
                                    label="Descending"
                                    status={ orderBy === 'descending' ? 'checked' : 'unchecked' }
                                    setChange = {setChangeOrder}
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


CreditHome.propTypes = {
    borrowing: PropTypes.object.isRequired,
    loan: PropTypes.object.isRequired,
    getBorrowing: PropTypes.func.isRequired,
    getLoan: PropTypes.func.isRequired,
    GetUserDetail: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    borrowing: state.borrowing, 
    loan: state.loan,
    auth: state.auth
});

export default connect(mapStateToProps, { getLoan, getBorrowing, GetUserDetail})(CreditHome);
