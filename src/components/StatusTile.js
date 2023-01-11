import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import COLORS from "../consts/colors";

export function StatusTile({ ProfilePic, Name,  Message, onPress }) {
    return (

        <View

            onPress={() => onPress()}
            style={styles.card}>
            <View style={{ flex: 0.2, alignItems: 'center', }}>
                <View style={{
                    backgroundColor: COLORS.primary, borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 58, width: 58
                }}>
                    <View style={{
                        borderRadius: 100,
                        backgroundColor:COLORS.white,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 53, width: 53
                    }}>
                        <TouchableOpacity style={styles.Profile}>
                            <Avatar.Image size={48} source={ProfilePic} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => onPress()}
                style={styles.mainFlex}>
                <View style={{ flexDirection: 'row', height: 22, }}>
                    <View style={{ flex: 0.8, justifyContent: 'center', }}>
                        <Text style={styles.name}>{Name}</Text>
                    </View>
                    {/* <View style={{ flex: 0.3, alignItems: 'flex-end', justifyContent: 'center', }}>
                        <Text style={styles.time}>{Time}</Text>
                    </View> */}
                </View>
                <View style={{ height: 23, justifyContent: 'center' }}>
                    <Text style={styles.message}>{Message}</Text>
                </View>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        height: 68,
        flexDirection: 'row',
        marginTop: 5
    },
    Profile: {

        justifyContent: 'center',
        alignItems: 'center'
    },
    mainFlex: {
        flex: 0.8,
        justifyContent: "center",
    },
    name: {
        fontSize: 18,

        color: 'black'
    },
    time: {
        fontSize: 12,
        marginRight: 15,
        color: 'green'
    },
    message: {
        fontSize: 13,
        color: '#808080'
    }


})