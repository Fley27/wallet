import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from "react-native";
import AccountIcon from "../../icons/accountIcon";
import CurrencyIcon from "../../icons/ currencyIcon";
import LanguageIcon from "../../icons/languageIcon";
import AboutIcon from "../../icons/aboutIcon";
import FaqIcon from "../../icons/faqIcon";
import FeedbackIcon from "../../icons/feedbackIcon";
import AngleRightIcon from "../../icons/angleRightIcon";
import FriendIcon from "../../icons/friend";


const SettingsHome = () =>{
    return(
        <ScrollView>
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <View style = {styles.circleProfile}>
                        <Image
                            source = {require("../../images/profile.jpeg")}
                            style = {styles.profile}
                        />
                    </View>
                    <View style = {styles.cardInformation}>
                        <Text style = {styles.name}>Fenley Jude Viky Menelas</Text>
                        <Text style = {styles.account}>Basic membership</Text>
                    </View>
                </View>
                <View style = {styles.titleContainerSettings}>
                    <Text style = {styles.titleSettings}>General</Text>
                </View>
                <View style = {styles.body}>
                <TouchableOpacity style = {styles.bodyItem}>
                        <View style = {styles.icon}>
                            <AccountIcon
                                width = {30}
                                height = {30}
                                color={"#A52A2A"}
                            />
                        </View>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Account</Text>
                        </View>
                        <View style = {styles.iconRight}>
                            <AngleRightIcon
                                width = {20}
                                height = {20}
                                color={"#C0C0C0"}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.bodyItem}>
                        <View style = {styles.icon}>
                            <FriendIcon
                                width = {30}
                                height = {30}
                                color={"#A52A2A"}
                            />
                        </View>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Friends</Text>
                        </View>
                        <View style = {styles.iconRight}>
                            <AngleRightIcon
                                width = {20}
                                height = {20}
                                color={"#C0C0C0"}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.bodyItem}>
                        <View style = {styles.icon}>
                            <LanguageIcon
                                width = {30}
                                height = {30}
                                color={"#A52A2A"}
                            />
                        </View>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Languages</Text>
                        </View>
                        <View style = {styles.iconRight}>
                            <AngleRightIcon
                                width = {20}
                                height = {20}
                                color={"#C0C0C0"}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.bodyItem}>
                        <View style = {styles.icon}>
                            <CurrencyIcon
                                width = {30}
                                height = {30}
                                color={"#A52A2A"}
                            />
                        </View>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Currency</Text>
                        </View>
                        <View style = {styles.iconRight}>
                            <AngleRightIcon
                                width = {20}
                                height = {20}
                                color={"#C0C0C0"}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.bodyItem}>
                        <View style = {styles.icon}>
                            <FeedbackIcon
                                width = {30}
                                height = {30}
                                color={"#A52A2A"}
                            />
                        </View>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>Feedback</Text>
                        </View>
                        <View style = {styles.iconRight}>
                            <AngleRightIcon
                                width = {20}
                                height = {20}
                                color={"#C0C0C0"}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.bodyItem}>
                        <View style = {styles.icon}>
                            <FaqIcon
                                width = {30}
                                height = {30}
                                color={"#A52A2A"}
                            />
                        </View>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>FAQ</Text>
                        </View>
                        <View style = {styles.iconRight}>
                            <AngleRightIcon
                                width = {20}
                                height = {20}
                                color={"#C0C0C0"}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.bodyItem}>
                        <View style = {styles.icon}>
                            <AboutIcon
                                width = {30}
                                height = {30}
                                color={"#A52A2A"}
                            />
                        </View>
                        <View style = {styles.labelContainer}>
                            <Text style = {styles.label}>About us</Text>
                        </View>
                        <View style = {styles.iconRight}>
                            <AngleRightIcon
                                width = {20}
                                height = {20}
                                color={"#C0C0C0"}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        backgroundColor: "rgb(230,230,230)",
        width: "100%",
        padding: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    header:{
        marginTop: 0,
        marginBottom: 20,
        flexDirection: "column",
        justifyContent: "center",
        width: "100%"
    },
    circleProfile: {
        width: 70,
        height: 70,
        overflow: "hidden",
        borderWidth: 3,
        borderRadius: 60,
        borderColor: "#AD6B79",
        marginLeft: "auto",
        marginRight: "auto"
    },
    profile:{
        width: 70,
        height: 70,
    },
    cardInformation:{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 5,
        fontSize: 13
    },
    name: {
        fontSize: 12,
        color: "#2A5ED7",
        fontStyle: "italic",
        textAlign: "center",
    },
    account: {
        fontSize: 10,
        color: "#252223",
        fontStyle: "italic",
        textAlign: "center",
        marginTop: 3
    },
    body:{
        marginTop: 10,
        width: "100%",
        flexDirection: "column"
    },
    bodyItem:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#EAECF1",
        marginTop: 7,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        height: 60,
        paddingLeft: 20,
        paddingRight: 10
    },
    icon: {
        width: 30,
    },
    iconRight: {
        width: 20,
        marginLeft: 20
    },
    labelContainer: {
        marginLeft: 30,
        marginRight: "auto"
    },
    label:{
        fontSize: 17,
        fontWeight: "600"
    },
    titleContainerSettings:{
        height: 50,
        justifyContent: "center",
        alignItems:"center",
        width: "100%",
        paddingLeft: 20
    },
    titleSettings:{
        textAlign: "left",
        fontSize: 24,
        fontWeight: "600",
        marginRight: "auto",
        color: "#404243",
    }
});
 
export default SettingsHome;