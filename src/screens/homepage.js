import React , {useState,useEffect} from 'react';
import {Dimensions, View, Text, FlatList, TouchableOpacity, Pressable, StyleSheet} from 'react-native';
import Item from "../component/boxItem";
import {boxes,data, chartConfig} from "../data/data";
import {LineChart} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const x = screenWidth - (screenWidth * 0.03);

const Homepage = ({navigation}) =>{

    const [operation, setOperation] = useState("IC");
    const [device, setDevice] = useState("HTG");


    const selectOperation  = (item) =>{
        setOperation(item)
    }

    const selectDevice  = (item) =>{
        setDevice(item)
    }
    
    const renderItem = ({ item }) => (
        <Item item = {item} />
    );

    return(
        <View  style = {styles.container} onPress = {()=>resetModal()}>
            <View style = {styles.boxContainer}>
                <FlatList
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    data={boxes}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style = {styles.exchangeRate}>
                <Text style = {styles.titleExchange}>EXCHANGE RATE</Text>
                <View style = {styles.exchangeBody}>
                    <View style = {styles.rate}>
                        <Text style = {styles.rateTitle}>VENTES</Text>
                        <Text style = {styles.rateAmount}>1 USD = 75 HTG</Text>
                        <Text style = {styles.rateAmount}>1 USD = 57.56 HTG</Text>
                    </View>
                    <View style = {styles.rate}>
                        <Text style = {styles.rateTitle}>ACHATS</Text>
                        <Text style = {styles.rateAmount}>1 USD = 77.56 HTG</Text>
                        <Text style = {styles.rateAmount}>1 USD = 57.95 HTG</Text>
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
                        <TouchableOpacity onPress = {()=> selectOperation("CR")} style = {[styles.operationOption, operation === "CR" ? styles.operationOptionSelected : null]}>
                            <Text style = {styles.operationOptionText}>CR</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=> selectOperation("LO")} style = {[styles.operationOption,{borderTopRightRadius: 10, borderBottomRightRadius: 10}, operation === "LO" ? styles.operationOptionSelected : null]}>
                            <Text style = {styles.operationOptionText}>LO</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.tabOperation}>
                        <TouchableOpacity onPress = {()=> selectDevice("HTG")} style = {[styles.operationOption, {borderTopLeftRadius: 10, borderBottomLeftRadius: 10}, device === "HTG" ? styles.operationOptionSelected : null]}>
                            <Text style = {styles.operationOptionText}>HTG</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=> selectDevice("USD")} style = {[styles.operationOption, device === "USD" ? styles.operationOptionSelected : null]}>
                            <Text style = {styles.operationOptionText}>USD</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {()=> selectDevice("DOP")} style = {[styles.operationOption, device === "DOP" ? styles.operationOptionSelected : null]}>
                            <Text style = {styles.operationOptionText}>DOP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {[styles.graphContainer, {shadowOpacity: 1}]}>
                    <LineChart
                        data={data}
                        width={screenWidth - (screenWidth * 0.06)}
                        height={225}
                        withVerticalLines = {false}
                        withHorizontalLines ={false}
                        withOuterLines = {true}
                        chartConfig={chartConfig}
                        style = {{fontSize: 14, fontWeight: "700"}}
                    />
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
        alignContent: "center"
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
        shadowColor: "#000000",
        backgroundColor: "#FFF",
        paddingLeft: 15
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

export default Homepage;


/*
    
*/
