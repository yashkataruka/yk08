import React from 'react';
import {View, Text, StyleSheet, Modal, Button} from 'react-native';


const GoalDelete = props => {

    return (
        <Modal visible = {props.visible} animationType = "fade" transparent = {true} >
            <View style = {styles.inputContainer}>
                <View style = {{padding: 10}}><Text style = {{color: 'white'}}>Are you sure you want to delete this goal?</Text></View>
                <View style = {styles.buttonContainer}>
                    <View style = {styles.button}>
                        <Button title = "YES" onPress = {props.onRemoveGoal}/>
                    </View>
                    <View style = {styles.button}>
                        <Button title = "NO" color = "red" onPress = {props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    );

};

export default GoalDelete;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        width: '40%'
    }
});