import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Octicons, Zocial, Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const Call = props => {
  return (
    <TouchableOpacity onPress={(props.onSelect)} style={styles.placeItem} >
      <Image style={{...styles.image, ...props.imageStyle}} source={{ uri: props.image }} />
      {props.online ? <Image style = {styles.online} /> : null }
      <View style={styles.infoContainer}>
          <View style = {{alignItems: 'flex-start'}}>
                <Text style={{...styles.name, ...props.nameStyle}}>{props.name}</Text>
                {props.missed ? <View style = {styles.callStatus} >
                                    <Zocial name = "call" color = "#F08080"/>
                                    <Text style={{color: '#F08080', fontWeight: 'bold', left: 5}}>Missed</Text>
                                </View> 
                : props.incoming ? <View style = {styles.callStatus} >
                                    <Zocial name = "call" color = {Colors.primary}/>
                                    <Text style={{color: Colors.primary, fontWeight: 'bold', left: 5}}>Incoming</Text>
                                </View>
                : props.outgoing ? <View style = {styles.callStatus} >
                                    <Zocial name = "call" color = "#8C9CB0"/>
                                    <Text style={{color: '#8C9CB0', fontWeight: 'bold', left: 5}}>Outgoing</Text>
                                </View> 
                : null
                }
          </View>
          <View style = {{alignItems: 'flex-end'}} >
              <Text style = {{color: '#8C9CB0', fontWeight: 'bold'}} >{props.time}</Text>
              <Ionicons name = "ios-arrow-forward" size = {20} color = "#8C9CB0" style = {{top: 10}} />
          </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    placeItem: {
        //borderBottomColor: '#ccc',
        //borderBottomWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ccc',
        //borderColor: Colors.primary,
        //borderWidth: 1
    },
    infoContainer: {
        marginLeft: 5,
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 10
    },
    name: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    callStatus: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Call;
