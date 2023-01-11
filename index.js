/**
 * @format
 */

import {AppRegistry,LogBox } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";


PushNotification.configure({
//     onRegister: function (token) {
//       console.log("TOKEN:", token);
//     },
  
    onNotification: function (notification) {
      console.log("NOTIFICATION content:", notification.action);
      if(notification.action == "ReplyInput") {
        // PushNotification.invokeApp(notification);
        console.log("sssssssssssssssssssssssssss");
       
      }
    },
  

    
    // onAction: function (notification) {
     
    //   if(notification.action == "ReplyInput") {
    //     // PushNotification.invokeApp(notification);
    //     console.log("sssssssssssssssssssssssssss");
    //   }
  
    // },
  
//     onRegistrationError: function(err) {
//       console.error(err.message, err);
//     },
  
//     permissions: {
//       alert: true,
//       badge: true,
//       sound: true,
//     },
  
//     popInitialNotification: true,
//     requestPermissions: true,
requestPermissions: Platform.OS === 'ios'
  });

AppRegistry.registerComponent(appName, () => App);
console.disableYellowBox = true;
LogBox.ignoreLogs(['Warning: ...']);
