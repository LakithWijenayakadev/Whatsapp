import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux'
import COLORS from "../consts/colors";
// import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Switch } from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';

const window = Dimensions.get('window');


const SenderProfile = ({ navigation }) => {


    const UserName = (useSelector(state => state.ChatScreen.chatName));
    const ProfilePic = (useSelector(state => state.ChatScreen.profilePic));

    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (

        <SafeAreaView style={{ flex: 1, }}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
            <ScrollView>
                <View style={{ flexDirection: 'row', paddingHorizontal: 10, backgroundColor: COLORS.white, elevation: 2 }}>

                    <View style={{ flex: 0.2, paddingTop: 12 }}>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ flexDirection: 'row', }}>
                            <Feather name="arrow-left" color={COLORS.inputField} size={23} />
                        </TouchableOpacity>


                    </View>

                    <View style={{ flex: 0.6, paddingTop: 12 }}>


                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ marginBottom: 10 }}>
                            <View style={styles.Profile}>
                                <Avatar.Image size={120} source={ProfilePic} />
                            </View>
                        </TouchableOpacity>

                        <View style={{ alignItems: 'center', paddingLeft: 5 }}>
                            <Text numberOfLines={1} style={{ fontSize: 23, color: COLORS.black }}>{UserName}</Text>
                        </View>

                        <View style={{ alignItems: 'center', paddingLeft: 5 }}>
                            <Text numberOfLines={1} style={{ fontSize: 18, color: COLORS.inputField }}>071403637</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 15 }}>

                            <TouchableOpacity onPress={() => navigation.navigate('AudioCall')}
                                style={{ flex: 0.33, alignItems: 'center', }}>
                                <MaterialIcons name="call" color={COLORS.primary} size={30} />
                                <Text style={{ color: COLORS.primary, fontSize: 14, marginVertical: 12 }}>Audio</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flex: 0.33, alignItems: 'center', }}>
                                <Ionicons name="videocam" color={COLORS.primary} size={30} />
                                <Text style={{ color: COLORS.primary, fontSize: 14, marginVertical: 12 }}>Video</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flex: 0.33, alignItems: 'center', }}>
                                <MaterialIcons name="search" color={COLORS.primary} size={30} />
                                <Text style={{ color: COLORS.primary, fontSize: 14, marginVertical: 12 }}>Search</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{ flex: 0.2, alignItems: 'flex-end', paddingTop: 12 }}>

                        <TouchableOpacity style={{ alignItems: 'center', }}>
                            <MaterialIcons name="more-vert" color={COLORS.inputField} size={23} />
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={styles.description}>
                    <Text style={{ fontSize: 17, color: COLORS.black }}>Hey there! I am using WhatsApp.</Text>
                </View>


                <View style={styles.mediaCategoryText}>
                    <Text style={{ fontSize: 17, color: COLORS.black }}>Media, links, and docs.</Text>
                    <Text style={{ fontSize: 17, color: COLORS.inputField }}>1 {">"}</Text>
                </View>

                <View style={{ backgroundColor: COLORS.white, marginBottom: 20, elevation: 1, paddingHorizontal: 20, }}>

                    <TouchableOpacity
                        onPress={() => onToggleSwitch()}
                        style={styles.Tile}>
                        <View style={{ flexDirection: 'row', }}>
                            <MaterialCommunityIcons name="bell" color={COLORS.inputField} size={25} />
                            <Text style={{ fontSize: 17, color: COLORS.black, marginHorizontal: 25 }}>Mute notifications</Text>
                        </View>

                        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={COLORS.primary} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Tile}>
                        <View style={{ flexDirection: 'row', }}>
                            <MaterialCommunityIcons name="music-note" color={COLORS.inputField} size={25} />
                            <Text style={{ fontSize: 17, color: COLORS.black, marginHorizontal: 25 }}>Custom notifications</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Tile}>
                        <View style={{ flexDirection: 'row', }}>
                            <MaterialIcons name="photo" color={COLORS.inputField} size={25} />
                            <Text style={{ fontSize: 17, color: COLORS.black, marginHorizontal: 25 }}>Media visibility</Text>
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: COLORS.white, marginBottom: 20, elevation: 1, paddingHorizontal: 20, }}>


                    <TouchableOpacity style={styles.Tile}>
                        <View style={{ flexDirection: 'row', }}>
                            <MaterialCommunityIcons name="lock" color={COLORS.inputField} size={25} />
                            <View>
                                <Text style={{ fontSize: 17, color: COLORS.black, marginHorizontal: 25 }}>Encryption</Text>
                                <Text style={{ fontSize: 16, color: COLORS.inputField, marginHorizontal: 25 }}>Messages and calls are end-to-end encrypted. Tap to verify.</Text>
                            </View>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Tile}>
                        <View style={{ flexDirection: 'row', }}>
                            <MaterialCommunityIcons name="progress-clock" color={COLORS.inputField} size={25} />
                            <View>
                                <Text style={{ fontSize: 17, color: COLORS.black, marginHorizontal: 25 }}>Dissappearing messages</Text>
                                <Text style={{ fontSize: 16, color: COLORS.inputField, marginHorizontal: 25 }}>Off</Text>
                            </View>
                        </View>

                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: COLORS.white, marginBottom: 20, elevation: 1, paddingHorizontal: 20, }}>
                    <Text style={{ fontSize: 16, color: COLORS.inputField, marginTop: 15 }}>No groups in common</Text>
                    <TouchableOpacity style={styles.Tile}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ backgroundColor: COLORS.primary, height: 40, width: 40, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialIcons name="group" color={COLORS.white} size={25} />
                            </View>

                            <Text style={{ fontSize: 17, color: COLORS.black, marginHorizontal: 15 }}>Create group with {UserName}</Text>
                        </View>

                    </TouchableOpacity>

                </View>


                <View style={{ backgroundColor: COLORS.white, marginBottom: 40, elevation: 1, paddingHorizontal: 20, }}>

                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <MaterialIcons name="block" color={COLORS.red} size={25} />
                            <View>
                                <Text style={{ fontSize: 17, color: COLORS.red, marginHorizontal: 25 }}>Block {UserName}</Text>
                            </View>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
                        <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                            <Foundation name="dislike" color={COLORS.red} size={28} style={{ transform: [{ rotateY: '180deg' }] }} />
                            <View>
                                <Text style={{ fontSize: 17, color: COLORS.red, marginHorizontal: 25 }}>Report {UserName}</Text>

                            </View>
                        </View>

                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default SenderProfile

const styles = StyleSheet.create({
    Profile: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Tile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        alignItems: 'center'
    },
    description: {
        backgroundColor: COLORS.white,
        height: (window.width) * 0.2,
        marginVertical: 20,
        elevation: 1,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    mediaCategoryText: {
        backgroundColor: COLORS.white,
        height: (window.width) * 0.2,
        marginBottom: 20,
        elevation: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
