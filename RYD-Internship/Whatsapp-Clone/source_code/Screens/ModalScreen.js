import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Octicons, FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const ModalScreen = (props) => {
    console.log("HAHAHA")
    return (
        <Modal visible = {true} animationType = "slide" transparent = {true} >
            <View style = {{justifyContent: 'flex-end', height: '100%'}} >
                <View style = {styles.container} >
                    <View style = {{left: 10}} >
                    <TouchableOpacity>
                        <MaterialCommunityIcons name = "message-plus" color = {Colors.primary} size = {45} style = {{left: 8}} />
                        <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: 5}} >New Chat</Text>
                    </TouchableOpacity>
                    </View>
                    <View style = {{borderLeftWidth: 1, borderLeftColor: '#ccc', height: 50 }}/>
                    <View>
                    <TouchableOpacity>
                        <Octicons name = "broadcast" color = {Colors.primary} size = {45} style = {{left: 25}} />
                        <Text style = {{textAlign: 'center', fontWeight: 'bold', fontSize: 18, paddingTop: 5}} >Broadcast List</Text>
                    </TouchableOpacity>
                    </View>
                    <View style = {{borderLeftWidth: 1, borderLeftColor: '#ccc', height: 50 }}/>
                    <View>
                    <TouchableOpacity>
                        <FontAwesome name = "group" color = {Colors.primary} size = {45} style = {{left: 8}} />
                        <Text style = {{textAlign: 'center', right:5, fontWeight: 'bold', fontSize: 18, paddingTop: 5}} >New Group</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        // </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        elevation: 5,
        height: 200,
    }
})

export default ModalScreen;