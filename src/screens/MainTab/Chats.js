import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import PushNotification from "react-native-push-notification";
import { ChatTile } from "../../components/ChatTile";
import axios, { isCancel, AxiosError } from 'axios';
import { GetchatName, GetprofilePic } from '../../../redux/ChatScreenSlice';
import { useSelector, useDispatch } from 'react-redux'

const window = Dimensions.get('window');

const Chats = ({ navigation }) => {

  const dispatch = useDispatch()
  const ChatListItems = (useSelector(state => state.ChatList.Chat_List));


  useEffect(() => {
    // createChannels();
  }, []);

  function chatNavigator(Name, ProfilePic) {

    dispatch(GetchatName(Name))
    dispatch(GetprofilePic(ProfilePic))
    navigation.navigate('ChatScreen');
  }


  const Chat_List = () => {
    return (

      <View style={styles.card_con1}>

        {ChatListItems.map((item, index) => (
          <ChatTile
            Name={item.Name}
            Message={item.Message}
            ProfilePic={item.ProfilePic}
            Time={item.Time}
            // onPress={() => handleNotification(item.Name, item.Message, item.Time, item.ProfilePic)}
            onPress={() => chatNavigator(item.Name, item.ProfilePic)}
          />

        ))}
      </View>
    );
  };



  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
      <ScrollView>

        <Chat_List />

      </ScrollView>

    </SafeAreaView>
  )
}

export default Chats

const styles = StyleSheet.create({

})
