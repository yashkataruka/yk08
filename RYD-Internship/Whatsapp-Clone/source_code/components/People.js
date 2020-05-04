import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Octicons, Zocial, Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const People = props => {
  return (
    <TouchableOpacity onPress={(props.onSelect)} style={styles.placeItem} >
      <Image style={{...styles.image, ...props.imageStyle}} source={{ uri: props.image }} />
      {props.online ? <Image style = {styles.online} /> : null }
      <View style={styles.infoContainer}>
          <View style = {{alignItems: 'flex-start'}}>
                <Text style={!props.online ? styles.name : {...styles.name, right: 10}}>{props.name}</Text>
                <Text style = {props.online ? {right: 10} : null} >{props.number}</Text>
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
    },
    online: {
        backgroundColor: Colors.primary, 
        height: 10, 
        width: 10,
        borderRadius: 5,
        right: 53,
        top: 24
      }
});

export default People;
