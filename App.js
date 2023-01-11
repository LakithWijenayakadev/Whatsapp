import React, { useEffect, useState } from 'react'
import { Dimensions, Text, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


//servise provider
import Assingment_tab_home from './src/screens/MainTab/Index';
import ChatScreen from './src/screens/ChatScreen';
import SenderProfile from './src/screens/SenderProfile';
import AudioCall from './src/screens/AudioCall';
import { Provider } from 'react-redux';
import store from './store/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
// const TabTop = createMaterialTopTabNavigator();
const window = Dimensions.get('window');
console.disableYellowBox = true;




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Default Stack Navigator

const createAppStack = () =>

  <Provider store={store}>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LandingScreen" >



      {/* <Stack.Screen name="Inprogress" component={Inprogress} /> */}

      {/* <Stack.Screen name="Completed" component={Completed} /> */}

      <Stack.Screen name="Assingment_tab_home" component={Assingment_tab_home} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="SenderProfile" component={SenderProfile} />
      <Stack.Screen name="AudioCall" component={AudioCall} />
     

    </Stack.Navigator>


  </Provider>

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const App = ({ navigation }) => {

  return (

    <NavigationContainer theme={DefaultTheme}>
      <StatusBar backgroundColor="#128C7E" barStyle="dark-content" />
      <Provider store={store}>
        <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth" drawerStyle={{ width: (window.width) * 0.75 }}>

          <Drawer.Screen
            options={({ route, navigation }) => {

              return {
                swipeEnabled: false,

              };
            }}
            key="1" name="Auth" children={createAppStack} />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>

  );

}

export default App;