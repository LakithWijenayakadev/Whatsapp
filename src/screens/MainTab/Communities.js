import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'


// import avatrt from '../../../img/Avatar_1.png';

const window = Dimensions.get('window');


const Request = ({ navigation }) => {




    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
            <ScrollView>
              <View>
                <Text>Communities page</Text>
              </View>


            </ScrollView>

        </SafeAreaView>
    )
}

export default Request

const styles = StyleSheet.create({
   

})
