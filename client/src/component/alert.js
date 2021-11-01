import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

const Alert_ = ({ alerts }) => {
    return (
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
            <View 
                key={alert.id} 
                style = {[styles.container, {backgroundColor: alert.alertType === "success" ? "#008000":"#ff0000"}]} >
                <Text style = {{color: "#FFF"}}>{alert.msg}</Text> 
            </View>
        ))
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: "60%",
        position: "absolute",
        top: 10,
        left: "20%",
        justifyContent: "center",
        alignItems: "center"
    }
});

Alert_.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(Alert_);