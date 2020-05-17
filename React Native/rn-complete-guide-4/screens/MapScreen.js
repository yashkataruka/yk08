import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux'

import Colors from '../constants/Colors';
import * as actionTypes from '../store/actions/location';

const MapScreen = props => {
    
    const dispatch = useDispatch();

    let initialLocation = props.navigation.getParam('initialLocation');
    const readonly = props.navigation.getParam('readOnly')
    const [selectedLocation, setSelectedLocation] = useState(initialLocation)

    if (!initialLocation) {
        initialLocation = useSelector(state => state.location.location)
    }

    const mapRegion = {
        latitude: initialLocation.lat ? initialLocation.lat : 28.612,
        longitude: initialLocation.lng ? initialLocation.lng : 77.2295,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    const selectLocationHandler = useCallback(event => {
        if (readonly) {
            return
        }
        dispatch(actionTypes.firstLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })),
        setSelectedLocation({
            lat: event.nativeEvent.coordinate.latitude,
            lng: event.nativeEvent.coordinate.longitude
        })
    })

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert("No Location picked", "Please choose 1 location",
            [{text: 'Okay'}])
            return
        }
        props.navigation.navigate('NewPlace', {pickedLocation: selectedLocation})
    }, [selectedLocation])

    useEffect(() => {
        props.navigation.setParams({
            saveLocation: savePickedLocationHandler
        })
    }, [savePickedLocationHandler])

    let markerCoordinates;

    if (selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
        }
    }


    return (
        <MapView style = {styles.map} region = {mapRegion} onPress = {selectLocationHandler}>
            {markerCoordinates && <Marker title = "Picked Location" coordinate = {markerCoordinates} />}
        </MapView>
    );
}

MapScreen.navigationOptions = navData => {
    const saveFn = navData.navigation.getParam('saveLocation')
    const readonly = navData.navigation.getParam('readOnly')
    if (readonly) {
        return {};
    }
    return {
        headerRight: () => {
            return (
                <TouchableOpacity style = {styles.headerButton} onPress = {saveFn} >
                    <Text style = {styles.headerButtonText} >Save</Text>
                </TouchableOpacity>
            )
        }
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    headerButton: {
        marginHorizontal: 20
    },
    headerButtonText: {
        fontSize: 16,
        color: Platform.OS === "android" ? "white" : Colors.primary
    }
})

export default MapScreen;