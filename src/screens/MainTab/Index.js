import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Communities from './Communities';
import Chats from './Chats';
import Status from './Status';
import Calls from './Calls';
import edit from '../../icons/edit.png';

import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FAB, Portal, Provider } from 'react-native-paper';
import COLORS from "../../consts/colors";
// import { useSelector, useDispatch } from 'react-redux';

const Tab = createMaterialTopTabNavigator();
const window = Dimensions.get('window');



const index = ({ navigation: { goBack } }) => {

    const [state, setState] = React.useState({ open: true });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    return (
        <Provider>
            <Portal>
                <SafeAreaView style={{ flex: 1, }}>



                    {/* Header */}

                    <View style={{ backgroundColor: "#128C7E", height: 50, flexDirection: 'row' }}>
                        <View style={{ flex: 0.7, justifyContent: 'center' }}>
                            <Text style={styles.header_text}>WhatsApp</Text>
                        </View>

                        <TouchableOpacity style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="camera-outline" color="white" size={24} />

                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcons name="search" color="white" size={24} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <MaterialIcons name="more-vert" color="white" size={24} />
                        </TouchableOpacity>

                    </View>

                    {/* <ScrollView> */}

                    {/* Tab view */}
                    <Tab.Navigator style={styles.tabNavigator} initialRouteName='Chats'
                        //  initialLayout={{width: Dimensions.get('window').width}}

                        tabBarOptions={{
                            activeTintColor: "white",
                            inactiveTintColor: '#D3D3D3',

                            // upperCaseLabel: false,
                            labelStyle: {

                                fontSize: (window.width) * 0.038,
                                alignItems: 'center',
                                textTransform: 'none',

                            },

                            style: { backgroundColor: '#128C7E' },
                            indicatorStyle: {
                                height: (window.width) * 0.005,
                                backgroundColor: "white",
                                // width:20,

                            },

                        }}
                    // tabBarStyle:{width:"10%",backgroundColor:'red'}
                    >
                        {/* <Tab.Screen name="Communities" component={Communities} options={{ tabBarLabel: '', }} /> */}
                        <Tab.Screen name="Chats" component={Chats} options={{ tabBarLabel: 'Chats', }} />
                        <Tab.Screen name="Status" component={Status} options={{ tabBarLabel: 'Status' }} />
                        <Tab.Screen name="Calls" component={Calls} options={{ tabBarLabel: 'Calls' }} />

                    </Tab.Navigator>
                    {/* FAB */}

                    <FAB.Group
                        open={open}

                        visible={false}
                        borderRadius={100}
                        backdropColor="transparent"
                        icon={open ? 'camera' : 'message'}
                        actions={[

                            {
                                icon: edit,
                                //   label: 'Star',
                                style: { borderRadius: 100 },
                                onPress: () => console.log('Pressed star'),
                            },

                        ]}
                        onStateChange={onStateChange}
                        onPress={() => {
                            if (open) {
                                // do something if the speed dial is open
                            }
                        }}
                    />

                </SafeAreaView>
            </Portal>
        </Provider>
    )
}

export default index

const styles = StyleSheet.create({
    tabNavigator: {
        flex: 1,
        width: (window.width),


        borderColor: '#FFFFFF',
        // borderRadius: 0,
        backgroundColor: '#075e54',
    },
    side_icone: {
        height: (window.width) * 0.06,
        width: (window.width) * 0.06
    },
    header_text: {
        fontSize: (window.width) * 0.05,
        
        color: "white",
        marginLeft: 10
    }

})
