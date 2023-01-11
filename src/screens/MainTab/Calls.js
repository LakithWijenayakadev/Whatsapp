import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from 'react-native-paper';
import avatar1 from '../../Images/Profile.jpg';
import avatar2 from '../../Images/Profile2.jpg';
import avatar3 from '../../Images/Profile3.jpg';
import PushNotification from "react-native-push-notification";
import { CallTile } from "../../components/CallTile";
import { GetchatName, GetprofilePic } from '../../../redux/ChatScreenSlice';
import { useSelector, useDispatch } from 'react-redux'

const window = Dimensions.get('window');



const Calls = ({ navigation }) => {

  const dispatch = useDispatch()


  const Latest_list = [


    {
      id: 1,
      ProfilePic: avatar3,
      Name: 'Lily Freya',
      Message: "(2) Today, 4.50pm",
      Time: "10:45 pm",
      arrowName: "arrow-top-right",
      arrowColor: "#128C7E"
    },
    {
      id: 1,
      ProfilePic: avatar1,
      Name: 'John David',
      Message: "yesterday, 1.00pm",
      Time: "8:03 pm",
      arrowName: "arrow-bottom-left",
      arrowColor: "red"
    },
    {
      id: 1,
      ProfilePic: avatar2,
      Name: 'Jack Harper',
      Message: "yesterday, 2.20pm",
      Time: "3:45 am",
      arrowName: "arrow-bottom-left",
      arrowColor: "red"
    },

    {
      id: 1,
      ProfilePic: avatar2,
      Name: 'Jack Harper',
      Message: "(3) yesterday, 2.20pm",
      Time: "3:45 am",
      arrowName: "arrow-top-right",
      arrowColor: "#128C7E"
    },
    {
      id: 1,
      ProfilePic: avatar3,
      Name: 'Lily Freya',
      Message: "(2) Today, 4.50pm",
      Time: "10:45 pm",
      arrowName: "arrow-top-right",
      arrowColor: "#128C7E"
    },
    {
      id: 1,
      ProfilePic: avatar1,
      Name: 'John David',
      Message: "yesterday, 1.00pm",
      Time: "8:03 pm",
      arrowName: "arrow-bottom-left",
      arrowColor: "red"
    },

  ];

  const Call_List = () => {




function Calling(Name,ProfilePic){
  
  dispatch(GetchatName(Name))
  dispatch(GetprofilePic(ProfilePic))
   navigation.navigate('AudioCall');
}
















    return (

      <View style={styles.card_con1}>

        {Latest_list.map((item, index) => (
          <CallTile
            Name={item.Name}
            Message={item.Message}
            ProfilePic={item.ProfilePic}
            Time={item.Time}
            onPressCall={() => Calling(item.Name,item.ProfilePic,)}
            onPressTile={() => console.log("tile clicked")}
            arrow={item.arrowName}
            arrowColor={item.arrowColor}
          />

        ))}
      </View>
    );
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
      <ScrollView>

        <Call_List />

      </ScrollView>

    </SafeAreaView>
  )
}

export default Calls

const styles = StyleSheet.create({


})
