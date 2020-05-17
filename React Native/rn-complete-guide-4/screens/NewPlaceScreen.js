import React, { useState, useCallback } from 'react';
import { Text, View, ScrollView, TextInput, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';

import Colors from '../constants/Colors';
import * as placesActions from '../store/actions/places';
import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker';

const NewPlaceScreen = props => {

    const [titleValue, setTitleValue] = useState('');
    const [selectedimage, setSelectedImage] = useState();
    const [selectedLocation, setSelectedLocation] = useState();

    const dispatch = useDispatch();

    const titleChangeHandler = text => {
        setTitleValue(text)
    }

    const imageTakenHandler = imagePath => {
        setSelectedImage(imagePath)
    }

    const locationPickedHandler = useCallback((location) => {
        setSelectedLocation(location)
    }, [setSelectedLocation])

    const savePlaceHandler = () => {
        dispatch(placesActions.addPlace(titleValue, selectedimage, selectedLocation))
        props.navigation.goBack()
    }

    return (
        <ScrollView>
            <View style = {styles.form} >
                <Text style = {styles.label} >Title</Text>
                <TextInput style = {styles.textInput} onChangeText = {titleChangeHandler} value = {titleValue} />
                <ImagePicker onImageTaken = {imageTakenHandler} />
                <LocationPicker navigation = {props.navigation} onLocationPicked = {locationPickedHandler} />
                <Button title = "Save Place" color = {Colors.primary} onPress = {savePlaceHandler} />
            </View>
        </ScrollView>
    );
}

NewPlaceScreen.navigationOptions = {
    headerTitle: 'Add Place'
}

const styles = StyleSheet.create({
    form: {
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
})

export default NewPlaceScreen;