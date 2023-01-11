import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity, TextInput, StatusBar, ImageBackground } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux'
import COLORS from "../consts/colors";
// import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from 'react-native-paper';
import Background from './../Images/backgroundCall.png'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Messages } from "../components/Messages";
const Tab = createMaterialTopTabNavigator();
const window = Dimensions.get('window');


const AudioCall = ({ navigation }) => {


    const UserName = (useSelector(state => state.ChatScreen.chatName));
    const ProfilePic = (useSelector(state => state.ChatScreen.profilePic));
    const MessageList = (useSelector(state => state.ChatScreen.Message_list));
    const [visible, setvisible] = useState(false);


    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ImageBackground
                source={Background}
                style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" backgroundColor={COLORS.callBackground} />

                <View style={{ alignItems: 'center', marginTop: 25, flexDirection: 'row',justifyContent:'center' }}>
                    <Ionicons name="lock-closed" color={COLORS.white} size={12} />

                    <Text style={{ color: COLORS.gray ,marginHorizontal:8}}>End-to-end encrypted</Text>
                </View>
                <View style={{ marginVertical: 25 }}>


                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ marginBottom: 10 }}>
                        <View style={styles.Profile}>
                            <Avatar.Image size={110} source={ProfilePic} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center', marginVertical: 5 }}>
                        <Text numberOfLines={1} style={{ fontSize: 30, color: COLORS.white }}>{UserName}</Text>
                    </View>

                    <View style={{ alignItems: 'center', marginVertical: 5 }}>
                        <Text numberOfLines={1} style={{ fontSize: 18, color: COLORS.gray }}>Calling</Text>
                    </View>



                </View>
                <View style={{ backgroundColor: COLORS.callBackground, position: 'absolute', bottom: 0, width: (window.width) * 1, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>

                    <TouchableOpacity
                        onPress={() => setvisible(!visible)}
                        style={{ marginVertical: 0, alignItems: 'center' }}>

                        <Entypo name={visible ? "chevron-thin-down" : "chevron-thin-up"} color={COLORS.white} size={40} />

                    </TouchableOpacity>



                    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 30 }}>

                        <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name="volume-high" color={COLORS.white} size={30} />
                        </View>

                        <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="videocam" color={COLORS.gray} size={30} />
                        </View>

                        <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name="microphone-off" color={COLORS.white} size={30} />
                        </View>

                        <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={{ backgroundColor: COLORS.darkRed, height: 60, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                                <MaterialCommunityIcons name="phone-hangup" color={COLORS.white} size={30} />
                            </TouchableOpacity>

                        </View>
                    </View>

                    {visible == true &&
                        <View>
                            <View style={{ backgroundColor: COLORS.inputField, height: 2, marginVertical: 10 }}></View>

                            <View style={{ flexDirection: 'row', marginVertical: 10 }}>

                                <View style={{ flex: 0.2, alignItems: 'center' }}>
                                    <View style={{ backgroundColor: COLORS.primary, height: 53, width: 53, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                                        <Ionicons name="person-add-sharp" color={COLORS.white} size={25} />
                                    </View>
                                </View>

                                <View style={{ flex: 0.8, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, color: COLORS.white }}>Add participant</Text>
                                </View>

                            </View>


                            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 50, }}>

                                <View style={{ flex: 0.2, alignItems: 'center' }}>
                                    <View style={{ height: 53, width: 53, alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                                        <Avatar.Image size={53} source={ProfilePic} />
                                    </View>
                                </View>

                                <View style={{ flex: 0.68, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 20, color: COLORS.inputField }}>{UserName}</Text>
                                </View>

                                <View style={{ flex: 0.12, justifyContent: 'center', alignItems: 'center' }}>
                                    <Feather name="more-horizontal" color={COLORS.inputField} size={30} />
                                </View>

                            </View>

                        </View>
                    }




                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default AudioCall

const styles = StyleSheet.create({
    Profile: {

        justifyContent: 'center',
        alignItems: 'center'
    },

})
