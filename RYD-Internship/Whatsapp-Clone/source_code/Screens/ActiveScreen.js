import React from 'react';
import { StyleSheet, Text, TextInput, View, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Active from '../components/Active';
import Colors from '../constants/Colors';

const ActiveScreen = props => {
  return (
    <ScrollView style = {styles.container} >
      <View style = {styles.allActive} >
        <View style = {styles.content} >
          <View style = {styles.boxLeft} >
            <TouchableOpacity><Text style = {{textAlign: 'center', color: '#8C9CB0', fontWeight: 'bold'}} >All</Text></TouchableOpacity>
          </View>
          <View style = {styles.boxRight} >
            <TouchableOpacity><Text style = {{textAlign: 'center', color: 'white', fontWeight: 'bold'}} >Active</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <Active name = "Yash Kataruka" number = "+91-9600644453" 
        onSelect = {() => {}} online
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC" 
      />
      <Active name = "Amey Sunu" number = "+91-96XXX34234"
        onSelect = {() => {}} online
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p960x960/41399513_310508706408091_2800159307935514624_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=ibSeEzVB_uEAX_Z_pg1&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=a20e11882a5406998bbaa863230eb649&oe=5ED2B2A0" 
      />
      <Active name = "Ali" number = "+91-99XXXXXXXX"
        onSelect = {() => {}} online
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=hHvZfm5hag0AX8oqIEJ&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=30b9a6882260b06b87cae3330b108358&oe=5ED4893B" 
      />
      <Active name = "Kartik" number = "+91-92153XXXXX"
        onSelect = {() => {}} online
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
  },
  allActive: {
    margin: 20
  },
  boxLeft: {
    width: '30%',
    backgroundColor: 'white',
    padding: 5,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    borderColor: '#8C9CB0',
    borderWidth: 1,
    left: 0.5
  },
  boxRight: {
    width: '30%',
    backgroundColor: '#8C9CB0',
    padding: 5,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    right: 0.5
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default ActiveScreen;