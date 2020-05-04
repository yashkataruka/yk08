import React from 'react';
import { StyleSheet, Text, TextInput, View, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import People from '../components/People';
import Colors from '../constants/Colors';

const PeopleScreen = props => {
  return (
    <ScrollView style = {styles.container} >
      <View style = {styles.header} >
        <View style = {styles.scan} >
          <TouchableOpacity>
            <MaterialCommunityIcons name = "qrcode-scan" color = {Colors.primary} size = {45} />
            <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: 5}} >Scan</Text>
          </TouchableOpacity>
        </View>
        <View style = {{borderLeftWidth: 1, borderLeftColor: '#ccc', height: 50 }}/>
        <View style = {styles.invite} >
          <TouchableOpacity>
            <SimpleLineIcons name = "envelope-letter" color = {Colors.primary} size = {45} />
            <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: 5}} >Invite</Text>
          </TouchableOpacity>
        </View>
        <View style = {{borderLeftWidth: 1, borderLeftColor: '#ccc', height: 50 }}/>
        <View style = {styles.add} >
          <TouchableOpacity>
            <Ionicons name = "ios-add-circle-outline" color = {Colors.primary} size = {45} />
            <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: 5}} >Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      <People name = "Yash Kataruka" number = "+91-9XXXXXXXXX"
        onSelect = {() => {}} online
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/27500624_1631883743526849_5371185179369120659_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=HxC82h-6TjgAX9PHczR&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=433e35c82605599e6def6a9d1ce587d5&oe=5ED304FC" 
      />
      <People name = "Aarushi Baghel" number = "+91-9XXXXXXXXX"
        onSelect = {() => {}} online
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/22256540_1112780955525046_4043381893812438520_o.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=AjmSnbXeXtEAX9gG44l&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=ac1d09bbe5ff0bcda579283e719b97f3&oe=5ED56D20" 
      />
      <People name = "Vehaan Singh Kundra" number = "+91-9XXXXXXXXX"
        onSelect = {() => {}}
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-1/p960x960/66276104_2626538227404812_3384406208881360896_o.jpg?_nc_cat=102&_nc_sid=dbb9e7&_nc_ohc=YFN87nCJpx0AX8qx-ce&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=971dc10b8f08cb02db6b7c1bc598026a&oe=5ED4C087" 
      />
      <People name = "Aakarsh Sasi" number = "+91-9XXXXXXXXX"
        onSelect = {() => {}}
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-0/p640x640/15541018_1474800625882546_4479706149930756966_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=GnQ25Jxlz4MAX-1ZeAi&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=176b7ff83e5a87b73095c67c39f909bd&oe=5ED4A0D2" 
      />
      <People name = "Dhawal Gupta" number = "+91-9XXXXXXXXX"
        onSelect = {() => {}} online
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/55963097_10211598445711414_2969751851169218560_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=Q63WwABlSGEAX-rJgAH&_nc_ht=scontent.fdel21-1.fna&oh=b9063fa4e3789dc9130d2c24cf1ea85a&oe=5ED57599" 
      />
      <People name = "Anant Sai Asthana" number = "+91-9XXXXXXXXX"
        onSelect = {() => {}}
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p960x960/68717069_2375289449225765_1772686217427550208_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=_qkfmzT_PiYAX_5z-X5&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=cc252d430d12577c7a1363d1e554a425&oe=5ED2C4C8" 
      />
      <People name = "Amey Sunu" number = "+91-96XXX34234"
        onSelect = {() => {}} online
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/p960x960/41399513_310508706408091_2800159307935514624_o.jpg?_nc_cat=111&_nc_sid=85a577&_nc_ohc=ibSeEzVB_uEAX_Z_pg1&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=a20e11882a5406998bbaa863230eb649&oe=5ED2B2A0" 
      />
      <People name = "Ali" number = "+91-99XXXXXXXX"
        onSelect = {() => {}} online
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t31.0-8/p960x960/25189021_1953013748048581_6918100668392475287_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=hHvZfm5hag0AX8oqIEJ&_nc_ht=scontent.fdel21-1.fna&_nc_tp=6&oh=30b9a6882260b06b87cae3330b108358&oe=5ED4893B" 
      />
      <People name = "Kartik" number = "+91-92153XXXXX"
        onSelect = {() => {}}
        image = "https://scontent.fdel21-1.fna.fbcdn.net/v/t1.0-9/s960x960/87453900_2726722707445556_4339679065192529920_o.jpg?_nc_cat=101&_nc_sid=dd7718&_nc_ohc=BL6_7BKZlo0AX850yIm&_nc_ht=scontent.fdel21-1.fna&_nc_tp=7&oh=0bc1dcb84f984e07462b8dc2b597ae0e&oe=5ED44D66" 
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    marginHorizontal: 40,
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default PeopleScreen;