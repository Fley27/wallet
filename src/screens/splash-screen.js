import React ,{useEffect} from "react";
import {ActivityIndicator, View, StyleSheet, Image} from 'react-native';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

const SplashScreen = ({navigation, ...props}) =>{

    useEffect(() => {
        setTimeout(() => {
            if(props.auth){
                props.auth.token !== null ? navigation.replace("Home") : navigation.replace("Connection")
            }
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../images/des.png')}
                style = {styles.image}
            />
        
            <ActivityIndicator
                size="large"
                color = "#FF4500"
                style = {styles.activityIndicator}
            />
        </View>
    )
}

// // <Text style = {styles.title}>Take control of your money</Text>
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: 150,
        height: 150,
        alignItems: 'center',
        marginLeft: -20
    },
    activityIndicator: {
        alignItems: 'center',
        marginTop: -30
    },
    title:{
        fontSize: 22,
        fontWeight: "bold",
        marginTop: -10,
        height:30
    },
});

SplashScreen.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect (mapStateToProps)(SplashScreen);

