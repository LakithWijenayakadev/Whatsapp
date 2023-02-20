import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import COLORS from "../consts/colors";
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Messages({ Message, TileAlign, Time }) {
    return (

        <TouchableOpacity>
            <View style={[styles.ChatBox, { backgroundColor: TileAlign == 1 ? COLORS.white : COLORS.sender }, { alignSelf: TileAlign == 1 ? 'flex-start' : 'flex-end' }]} >
                <Text style={{ marginHorizontal: 5, color: COLORS.black, fontSize: 15, textAlign: TileAlign == 1 ? 'left' : 'right' }}>{Message}</Text>

                <View style={{ flexDirection: 'row', alignSelf: 'flex-end', }}>
                    <Text style={styles.time}>{Time}</Text>
                    {TileAlign == 2 && <Ionicons name="checkmark-done-sharp" color={COLORS.bluetick} size={18} />}
                </View>

            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    ChatBox: {
        height: 'auto',
        paddingVertical: 3,
        marginVertical: 5,
        maxWidth: '79%',
        justifyContent: 'center',
        borderRadius: 10,
        paddingHorizontal: 5
    },
    time: {
        fontSize: 12,
        marginHorizontal: 3,
        alignSelf: 'flex-end',
        color: COLORS.inputField
    }

})