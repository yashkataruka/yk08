import React from 'react';
import { StyleSheet, Text, TextInput, View, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Call from '../components/Call';
import Colors from '../constants/Colors';

const CallsScreen = props => {
  return (
    <ScrollView style = {styles.container} >
      <View style = {styles.allActive} >
        <View style = {styles.content} >
          <View style = {styles.boxLeft} >
            <TouchableOpacity><Text style = {{textAlign: 'center', color: 'white', fontWeight: 'bold'}} >All</Text></TouchableOpacity>
          </View>
          <View style = {styles.boxRight} >
            <TouchableOpacity><Text style = {{textAlign: 'center', color: '#8C9CB0', fontWeight: 'bold'}} >Missed</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <Call name = "Yash Kataruka" 
        onSelect = {() => {}} time = "09:43 AM" missed
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC" 
      />
      <Call name = "Aarushi Baghel"
        onSelect = {() => {}} time = "Yesterday" incoming
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/22256540_1112780955525046_4043381893812438520_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=AjmSnbXeXtEAX9gG44l&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=ac1d09bbe5ff0bcda579283e719b97f3&oe=5ED56D20" 
      />
      <Call name = "Vehaan Singh Kundra"
        onSelect = {() => {}} time = "Friday" outgoing
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-1/p960x960/66276104_2626538227404812_3384406208881360896_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=YFN87nCJpx0AX8qx-ce&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=971dc10b8f08cb02db6b7c1bc598026a&oe=5ED4C087" 
      />
      <Call name = "Aakarsh Sasi"
        onSelect = {() => {}} time = "Monday" missed
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/15541018_1474800625882546_4479706149930756966_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=GnQ25Jxlz4MAX-1ZeAi&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=176b7ff83e5a87b73095c67c39f909bd&oe=5ED4A0D2" 
      />
      <Call name = "Dhawal Gupta"
        onSelect = {() => {}} time = "Monday" incoming
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/55963097_10211598445711414_2969751851169218560_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=Q63WwABlSGEAX-rJgAH&_nc_ht=scontent.fdel21-1.fna&oh=b9063fa4e3789dc9130d2c24cf1ea85a&oe=5ED57599" 
      />
      <Call name = "Anant Sai Asthana"
        onSelect = {() => {}} time = "Monday" outgoing
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p960x960/68717069_2375289449225765_1772686217427550208_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=_qkfmzT_PiYAX_5z-X5&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=cc252d430d12577c7a1363d1e554a425&oe=5ED2C4C8" 
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  allActive: {
    margin: 20
  },
  boxLeft: {
    width: '30%',
    backgroundColor: '#8C9CB0',
    padding: 5,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    left: 0.5
  },
  boxRight: {
    width: '30%',
    backgroundColor: 'white',
    padding: 5,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    borderColor: '#8C9CB0',
    borderWidth: 1,
    right: 0.5
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default CallsScreen;