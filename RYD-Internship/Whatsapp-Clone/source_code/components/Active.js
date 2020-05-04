import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const Active = props => {
  return (
    <TouchableOpacity onPress={(props.onSelect)} style={styles.placeItem} >
      <Image style={{...styles.image, ...props.imageStyle}} source={{ uri: props.image }} />
      {props.online ? <Image style = {styles.online} /> : null }
      <View style={styles.infoContainer}>
          <View>
                <Text style={{...styles.name, ...props.nameStyle}}>{props.name}</Text>
                <Text style={{...styles.number, ...props.style}}>{props.number}</Text>
          </View>
          <View>
              <MaterialCommunityIcons name = "message-plus" size = {45} color = {Colors.primary} />
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
    justifyContent: 'space-between'
  },
  name: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  number: {
    color: '#666',
    fontSize: 16
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

export default Active;
