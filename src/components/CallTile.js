import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function CallTile({ ProfilePic, Name, Time, Message, onPressTile,onPressCall,arrow,arrowColor }) {
    return (
// Call tiles component
        <TouchableOpacity

            onPress={() => onPressTile()}
            style={styles.card}>
            <View style={styles.Profile}>
                <Avatar.Image size={48} source={ProfilePic} />
            </View>
            <View style={styles.mainFlex}>
                <View style={{ flexDirection: 'row', height: 22, }}>
                    <View style={{ flex: 0.8, justifyContent: 'center', }}>
                        <Text style={styles.name}>{Name}</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => onPressCall()}
                     style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', }}>
                       
                    <MaterialIcons name="call" color="#128C7E" size={24} />

                    </TouchableOpacity>
                </View>
                <View style={{ height: 23, flexDirection:'row',alignItems:'center' }}>
                <MaterialCommunityIcons name={arrow} color={arrowColor} size={15} />
                    <Text style={styles.message}>{Message}</Text>
                </View>
            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    card: {
        height: 68,
        flexDirection: 'row',
        marginTop:5
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
        fontWeight: 'bold',
        color: 'black'
    },
    time: {
        fontSize: 12,
        marginRight: 15,
        color: 'green'
    },
    message: {
        fontSize: 13,
        color: '#808080',
        marginLeft:8
    }


})