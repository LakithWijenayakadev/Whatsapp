import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux'
import COLORS from "../consts/colors";
// import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Messages } from "../components/Messages";
import Background from './../Images/chatBackground.png'

const Tab = createMaterialTopTabNavigator();
const window = Dimensions.get('window');


const ChatScreen = ({ navigation }) => {


    const UserName = (useSelector(state => state.ChatScreen.chatName));
    const ProfilePic = (useSelector(state => state.ChatScreen.profilePic));
    const MessageList = (useSelector(state => state.ChatScreen.Message_list));

    const [emojiBtn, setemojiBtn] = useState(false);
    const Message_List = () => {
        return (

            <View style={{ marginBottom: 70 }}>

                {MessageList.map((item, index) => (
                    <Messages

                        Message={item.Message}
                        TileAlign={item.Type}
                        Time={item.Time}
                    />

                ))}
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.chatBackground }}>
            <ImageBackground
                source={Background}
                style={{ flex: 1 }}>

                <View style={{ backgroundColor: COLORS.primary, height: 50, flexDirection: 'row' }}>

                    <View style={{ flex: 0.65, flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ flex: 0.10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Feather name="arrow-left" color={COLORS.white} size={23} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ flex: 0.16, flexDirection: 'row' }}>
                            <View style={styles.Profile}>
                                <Avatar.Image size={37} source={ProfilePic} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('SenderProfile')}

                            style={{ flex: 0.75, flexDirection: 'row', alignItems: 'center', paddingLeft: 5 }}>
                            <Text numberOfLines={1} style={{ fontSize: 18, color: 'white' }}>{UserName}</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flex: 0.35, flexDirection: 'row', justifyContent: "flex-end", paddingLeft: 10 }}>
                        <TouchableOpacity style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="videocam" color={COLORS.white} size={23} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AudioCall')}
                            style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="call" color={COLORS.white} size={22} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialIcons name="more-vert" color="white" size={23} />
                        </TouchableOpacity>
                    </View>

                </View>


                <ScrollView style={{ paddingHorizontal: 10 }}>

                    <Message_List />

                </ScrollView>


                <View style={{ height: 50, width: (window.width) * 1, position: 'absolute', bottom: 8, flexDirection: 'row', paddingRight: 2 }}>
                    <View style={{ flex: 0.87, paddingHorizontal: 5 }}>
                        <View style={{ backgroundColor: COLORS.white, borderRadius: 100, height: 50, elevation: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5 }}>
                            <TouchableOpacity
                                onPress={() => setemojiBtn(!emojiBtn)}
                                style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="emoticon-outline" color={COLORS.inputField} size={25} />
                            </TouchableOpacity>
                            <View style={{ flex: 0.7, justifyContent: 'center', paddingHorizontal: 2 }}>
                                <TextInput placeholder="Message" style={{ fontSize: 18, color: COLORS.inputField }}></TextInput>
                            </View>
                            <TouchableOpacity style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="attachment" color={COLORS.inputField} size={25} style={{ transform: [{ rotateZ: '230deg' }] }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialCommunityIcons name="camera" color={COLORS.inputField} size={25} />
                            </TouchableOpacity>

                        </View>
                    </View>


                    <View style={{ flex: 0.13, alignItems: 'center', justifyContent: 'center', }}>
                        <TouchableOpacity style={{ backgroundColor: COLORS.primary, borderRadius: 100, height: 45, width: 45, elevation: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name="microphone" color={COLORS.white} size={23} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    Profile: {

        justifyContent: 'center',
        alignItems: 'center'
    },

})
