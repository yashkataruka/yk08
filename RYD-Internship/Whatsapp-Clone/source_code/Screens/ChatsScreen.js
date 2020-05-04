import React from 'react';
import { StyleSheet, Text, TextInput, View, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Chat from '../components/Chat';
import Colors from '../constants/Colors';

const ChatsScreen = props => {
  return (
    <ScrollView style = {styles.container} >
      <View style = {styles.textInput} >
        <Ionicons name = "ios-search" size = {18} color = "grey" style = {{padding: 5, marginLeft: 5}} />
        <TextInput placeholder = "Search" placeholderTextColor = 'grey' style = {{fontSize: 18, marginLeft: 5, width: '90%'}} />
      </View>
      <Chat name = "Yash Kataruka" message = "Hi, are you free right now?" 
        onSelect = {() => props.navigation.navigate("Modal")} time = "16:43 PM" delivered
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC" 
      />
      <Chat name = "Amey Sunu" message = "Typing..." online nameStyle = {{right: 10}} timeStyle = {{right: 10}}
        onSelect = {() => {}} time = "12:51 PM" style = {{color: Colors.primary, fontWeight: 'bold', right: 10}}
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p960x960/41399513_310508706408091_2800159307935514624_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=ibSeEzVB_uEAX_Z_pg1&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=a20e11882a5406998bbaa863230eb649&oe=5ED2B2A0" 
      />
      <Chat name = "Ali" message = "C'mon men!" 
        onSelect = {() => {}} time = "09:09 AM" seen imageStyle = {{borderColor: Colors.primary, borderWidth: 2}}
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=hHvZfm5hag0AX8oqIEJ&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=30b9a6882260b06b87cae3330b108358&oe=5ED4893B" 
      />
      <Chat name = "Kartik" message = " Missed Video call" style = {{color: '#F08080', fontWeight: 'bold', right: 10}}
        onSelect = {() => {}} missed time = "06:53 AM" online nameStyle = {{right: 10}} timeStyle = {{right: 10}}
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/s960x960/87453900_2726722707445556_4339679065192529920_o.jpg?_nc_cat=101&_nc_sid=dd7718&_nc_ohc=BL6_7BKZlo0AX850yIm&_nc_ht=scontent.fdel21-1.fna&_nc_tp=7&oh=0bc1dcb84f984e07462b8dc2b597ae0e&oe=5ED44D66" 
      />
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  textInput: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: '#DCDCDC'
  }
});

export default ChatsScreen;