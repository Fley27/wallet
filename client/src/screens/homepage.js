import React , {useState, useEffect} from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { getTotalAmountByCurrencyBorrowing, getTotalAmountTheLastSixMonthBorrowing } from '../redux/action/borrowing';
import { getTotalAmountByCurrencyExpense, getTotalAmountTheLastSixMonthExpense } from '../redux/action/expense';
import { getTotalAmountByCurrencyIncome, getTotalAmountTheLastSixMonthIncome } from '../redux/action/income';
import { getTotalAmountByCurrencyLoan, getTotalAmountTheLastSixMonthLoan } from '../redux/action/loan';
import { GetUserDetail } from '../redux/action/auth';
import {ActivityIndicator, Dimensions, View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Item from "../component/boxItem";
import {chartConfig} from "../data/data";
import {BarChart} from "react-native-chart-kit";
import { boxes_, data_ } from '../data/data';

const screenWidth = Dimensions.get("window").width;

const x = screenWidth - (screenWidth * 0.03);

const Homepage = (props) =>{

    const [operation, setOperation] = useState("IC");
    const [boxes, setBoxes] = useState([]);
    const [dataChart, setDataChart] = useState(null);
    const [currency, setCurrency] = useState("USD");

    const selectOperation  = (item) =>{
        setOperation(item)
    }

    const selectCurrency  = (item) =>{
        setCurrency(item)
    }
    
    const renderItem = ({ item }) => (
        <Item item = {item} />
    );

    useEffect(() => {
        props.GetUserDetail(); 
    }, [])

    useEffect(() => {
        if(props.auth){
            if(props.auth.user){
                const obj = {
                    id: props.auth.user.user.id,
                }
                if(operation === "BO")
                    props.getTotalAmountTheLastSixMonthBorrowing(JSON.stringify(obj));
                else if(operation === "EX")
                    props.getTotalAmountTheLastSixMonthExpense(JSON.stringify(obj));
                else if(operation === "IC")
                    props.getTotalAmountTheLastSixMonthIncome(JSON.stringify(obj));
                else if(operation ===  "LO")
                    props.getTotalAmountTheLastSixMonthLoan(JSON.stringify(obj));
            }
        }
    }, [props.auth.user, operation]);

    useEffect(() => {
        let data = [], labels = [], datasets  = [], color = `#000`,  strokeWidth = 2, obj = {};
        const month = ["Jan.", "Feb.", "Mar.", "April", "May", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        obj.color =  color;
        obj.strokeWidth = strokeWidth;
        
        if(operation === "IC"){
            if(props.income.dataChart){
                props.income.dataChart.map(item=>{
                    labels.push(month[item._id-1]);
                    data.push(currency === "USD" ? item.total_usd : currency === "DOP" ? item.total_dop : currency === "HTG" ? item.total_htg : 0)
                })
            }
        }else if(operation === "EX"){
            if(props.expense.dataChart){
                props.expense.dataChart.map(item=>{
                    labels.push(month[item._id-1]);
                    data.push(currency === "USD" ? item.total_usd : currency === "DOP" ? item.total_dop : currency === "HTG" ? item.total_htg : 0)
                })
            }
        }else if(operation === "BO"){
            if(props.borrowing.dataChart){
                props.borrowing.dataChart.map(item=>{
                    labels.push(month[item._id-1]);
                    data.push(currency === "USD" ? item.total_usd : currency === "DOP" ? item.total_dop : currency === "HTG" ? item.total_htg : 0)
                })
            }
        }else if(operation === "LO"){
            if(props.loan.dataChart){
                props.loan.dataChart.map(item=>{
                    labels.push(month[item._id-1]);
                    data.push(currency === "USD" ? item.total_usd : currency === "DOP" ? item.total_dop : currency === "HTG" ? item.total_htg : 0)
                })
            }
        }
        obj.data = data;
        datasets.push(obj);
        obj = {};
        obj.labels = labels;
        obj.datasets = datasets;
        setDataChart(obj);
    }, [props.borrowing.dataChart, props.expense.dataChart, props.income.dataChart, props.loan.dataChart, currency ])

    useEffect(() => {
        if(props.auth){
            if(props.auth.user){
                const obj = {
                    id: props.auth.user.user.id,
                }
                props.getTotalAmountByCurrencyBorrowing(JSON.stringify(obj));
                props.getTotalAmountByCurrencyExpense(JSON.stringify(obj));
                props.getTotalAmountByCurrencyIncome(JSON.stringify(obj));
                props.getTotalAmountByCurrencyLoan(JSON.stringify(obj));
            }
        }
    }, [props.auth.user])

    useEffect(() => {
        let data = [];
        if(props.expense.card)
            data.push(props.expense.card)
        if(props.income.card)
            data.push(props.income.card)
        if(props.borrowing.card)
            data.push(props.borrowing.card); 
        if(props.loan.card)
            data.push(props.loan.card)
        setBoxes(data);
    }, [props.borrowing.card, props.expense.card, props.income.card, props.loan.card ])

    return(
        <View  style = {styles.container} onPress = {()=>resetModal()}>
            <View style = {styles.boxContainer}>
                {
                    props.borrowing.loading || props.expense.loading || props.income.loading || props.loan.loading ? (
                        <ActivityIndicator size="large" color="#A52A2A" />
                    ):(
                        <FlatList
                            horizontal
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            data={boxes.length ? boxes : boxes_ }
                            renderItem={renderItem}
                            keyExtractor={item => item._id}
                        />
                    )
                }
            </View>
            <View style = {styles.exchangeRate}>
                <Text style = {styles.titleExchange}>EXCHANGE RATE</Text>
                <View style = {styles.exchangeBody}>
                    <View style = {styles.rate}>
                        <Text style = {styles.rateTitle}>VENTES</Text>
                        <Text style = {styles.rateAmount}>1 USD = 112.78 G</Text>
                        <Text style = {styles.rateAmount}>1 USD = 56.56 RD$ </Text>
                    </View>
                    <View style = {styles.rate}>
                        <Text style = {styles.rateTitle}>ACHATS</Text>
                        <Text style = {styles.rateAmount}>1 USD = 120 G</Text>
                        <Text style = {styles.rateAmount}>1 USD = 56.95 RD$</Text>
                    </View>
                </View>
            </View>
            <View style = {styles.graphSection}>
                <View style = {styles.graphHeaderTabContainer}>
                    <View style = {styles.tabOperation}>
                        <TouchableOpacity onPress = {()=> selectOperation("IC")} style = {[styles.operationOption, {borderTopLeftRadius: 10, borderBottomLeftRadius: 10} ,operation === "IC" ? styles.operationOptionSelected : null]}>
                            <Text style = {styles.operationOptionText}>IC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=> selectOperation("EX")} style = {[styles.operationOption, operation === "EX" ? styles.operationOptionSelected : null]}>
                            <Text style = {styles.operationOptionText}>EX</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=> selectOperation("BO")} style = {[styles.operationOption, operation === "BO" ? styles.operationOptionSelected : null]}>
                            <Text style = {styles.operationOptionText}>BO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=> selectOperation("LO")} style = {[styles.operationOption,{borderTopRightRadius: 10, borderBottomRightRadius: 10}, operation === "LO" ? styles.operationOptionSelected : null]}>
                            <Text style = {styles.operationOptionText}>LO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.tabOperation}>
                        <TouchableOpacity onPress = {()=> selectCurrency("USD")} style = {[styles.operationOption, {borderTopLeftRadius: 10, borderBottomLeftRadius: 10}, currency === "USD" ? styles.operationOptionSelected : null]}>
                            <Text style = {styles.operationOptionText}>USD</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=> selectCurrency("DOP")} style = {[styles.operationOption, currency === "DOP" ? styles.operationOptionSelected : null]}>
                            <Text style = {styles.operationOptionText}>DOP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=> selectCurrency("HTG")} style = {[styles.operationOption, currency === "HTG" ? styles.operationOptionSelected : null]}>
                            <Text style = {styles.operationOptionText}>HTG</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {[styles.graphContainer, {shadowOpacity: 1}]}>
                    {
                        
                        dataChart ? (
                            <BarChart
                                data={dataChart ? dataChart : data_}
                                width={screenWidth - 20}
                                height={210}
                                yAxisLabel={'$'}
                                chartConfig={chartConfig}
                                showBarTops={false}
                                showValuesOnTopOfBars={true}
                                withInnerLines={true}
                                segments={3}
                                bezier
                                style = {{fontSize: 1, fontWeight: "700"}}
                            />
                        ):null
                    }
                </View>
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
        backgroundColor: "rgb(230,230,230)",
        paddingTop: 30,
        alignContent: "center",
        justifyContent: "center"
    },
    boxContainer:{
        flex: 1,
        width: "100%"
    },
    icon:{
        width: 40,
        height: 40,
    },
    exchangeRate:{
        flex: 1,
        backgroundColor: "#FFF",
        margin: 20,
        width: screenWidth - (screenWidth * 0.03),
        marginTop: 5,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        alignItems: "center"
    },
    titleExchange: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000",
        marginTop: 25,
        marginBottom: 10
    },
    exchangeBody:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        marginTop: 7
    },
    rate:{
        justifyContent: "center",
        alignItems: "center",
        width: "45%"
    },
    rateTitle:{
        fontSize: 15,
        fontWeight: "700",
        color: "#000",
        marginBottom: 10
    },
    rateAmount: {
        fontWeight: "700",
        fontSize: 12,
        marginBottom: 10
    },
    graphContainer:{
        shadowOpacity: 1,
        width: screenWidth - (screenWidth * 0.03),
        alignItems: "center",
        justifyContent: "center",
        height: 250,
        marginBottom: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        shadowColor: "rgba(173, 171, 171, 0.228)",
        backgroundColor: "#FFF"
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
    }
});

Homepage.propTypes = {
    auth: PropTypes.object.isRequired,
    income: PropTypes.object.isRequired,
    expense: PropTypes.object.isRequired,
    loan: PropTypes.object.isRequired,
    borrowing: PropTypes.object.isRequired,
    getTotalAmountByCurrencyBorrowing: PropTypes.func.isRequired,
    getTotalAmountByCurrencyExpense: PropTypes.func.isRequired,
    getTotalAmountByCurrencyIncome: PropTypes.func.isRequired,
    getTotalAmountByCurrencyLoan: PropTypes.func.isRequired,
    GetUserDetail: PropTypes.func.isRequired,
    getTotalAmountTheLastSixMonthBorrowing: PropTypes.func.isRequired,
    getTotalAmountTheLastSixMonthExpense: PropTypes.func.isRequired,
    getTotalAmountTheLastSixMonthIncome: PropTypes.func.isRequired,
    getTotalAmountTheLastSixMonthLoan: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    income: state.income, 
    expense: state.expense, 
    loan: state.loan, 
    borrowing: state.borrowing, 
    auth: state.auth,
});

export default connect(mapStateToProps, 
    {
        GetUserDetail, 
        getTotalAmountByCurrencyBorrowing, 
        getTotalAmountByCurrencyExpense, 
        getTotalAmountByCurrencyIncome, 
        getTotalAmountByCurrencyLoan,
        getTotalAmountTheLastSixMonthBorrowing,
        getTotalAmountTheLastSixMonthExpense,
        getTotalAmountTheLastSixMonthIncome,
        getTotalAmountTheLastSixMonthLoan
    })(Homepage);

/*
    
*/
