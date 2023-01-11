import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from 'react-native-paper';
import Status1 from '../../Images/status1.jpg';
import Status2 from '../../Images/status2.jpg';
import Status3 from '../../Images/status3.jpg';
import avatarMy from '../../Images/ProfileMy.jpg';

import PushNotification from "react-native-push-notification";
import { StatusTile } from "../../components/StatusTile";
import axios, { isCancel, AxiosError } from 'axios';
import { GetchatName, GetprofilePic } from '../../../redux/ChatScreenSlice';
import { useSelector, useDispatch } from 'react-redux'

const window = Dimensions.get('window');

const Status = ({ navigation }) => {

  const dispatch = useDispatch()
  const StatusListItems = (useSelector(state => state.StatusList.Status_List));


  const [number, setnumber] = useState('');
  const [controller, setcontroller] = useState(0);

  useEffect(() => {
    // createChannels();
  }, []);

  function StatusClick(Name, ProfilePic) {

    // dispatch(GetchatName(Name))
    // dispatch(GetprofilePic(ProfilePic))
    // navigation.navigate('ChatScreen');
  }


  const MyStatus = () => {
    return (

      <View style={styles.card_con1}>


        <StatusTile
          Name={"My status"}
          Message={"3 minutes ago"}
          ProfilePic={Status3}

          // onPress={() => handleNotification(item.Name, item.Message, item.Time, item.ProfilePic)}
          onPress={() => StatusClick()}
        />


      </View>
    );
  };


  const Status_List = () => {
    return (

      <View style={styles.card_con1}>

        {StatusListItems.map((item, index) => (
          <StatusTile
            Name={item.Name}
            Message={item.Message}
            ProfilePic={item.ProfilePic}
            // Time={item.Time}
            // onPress={() => handleNotification(item.Name, item.Message, item.Time, item.ProfilePic)}
            onPress={() => StatusClick()}
          />

        ))}
      </View>
    );
  };


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
      <ScrollView>
        <MyStatus />

        <View style={{marginVertical:15,marginHorizontal:15}}>
          <Text style={{fontSize:17}}>Recent updates</Text>
        </View>
        <Status_List />

      </ScrollView>

    </SafeAreaView>
  )
}

export default Status

const styles = StyleSheet.create({

})
