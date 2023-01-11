import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';

export function ChatTile({ ProfilePic, Name, Time, Message, onPress }) {
    return (

        <View

            onPress={() => onPress()}
            style={styles.card}>
            <TouchableOpacity style={styles.Profile}>
                <Avatar.Image size={48} source={ProfilePic} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onPress()}
                style={styles.mainFlex}>
                <View style={{ flexDirection: 'row', height: 22, }}>
                    <View style={{ flex: 0.8, justifyContent: 'center', }}>
                        <Text style={styles.name}>{Name}</Text>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'flex-end', justifyContent: 'center', }}>
                        <Text style={styles.time}>{Time}</Text>
                    </View>
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
        flex: 0.2,
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