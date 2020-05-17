import React, { useState, useEffect } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import Colors from '../constants/Colors';
import MapPreview from './MapPreview';

const LocationPicker = props => {

    const [isFetching, setIsFetching] = useState(false)
    const [pickedLocation, setPickedLocation] = useState()

    const mapPickedLocation = props.navigation.getParam('pickedLocation')

    const { onLocationPicked } = props;

    useEffect(() => {
        if (mapPickedLocation) {
            setPickedLocation(mapPickedLocation)
            onLocationPicked(mapPickedLocation)
        }
    }, [mapPickedLocation, onLocationPicked])

    const verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.LOCATION);
        if (result.status !== "granted") {
            Alert.alert("Insufficient Permissions", "You need to grant Location Permission", [{
                text: 'Okay'
            }])
            return false;
        }
        return true
    }

    const getLocationHandler = async () => {
        const hasPermissions = await verifyPermissions();
        if (!hasPermissions) {
            return
        }
        try {
            setIsFetching(true)
            const location = await Location.getCurrentPositionAsync({timeout: 5000});
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
            props.onLocationPicked({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
        }
        catch(err){
            Alert.alert("Could not fetch location!", "Please try again later or pick a location on map!", 
            [{text: 'Okay'}])
        }
        setIsFetching(false);
    }

    const pickOnMapHandler = () => {
        props.navigation.navigate('Map')
    }

    return (
        <View style = {styles.locationPicker} >
            <MapPreview style = {styles.mapPreview} location = {pickedLocation} onPress = {pickOnMapHandler} >
                {isFetching ? <ActivityIndicator size = "small" color = {Colors.primary} /> : <Text>No Location chosen yet</Text>}
            </MapPreview>
            <View style = {styles.actions} >
                <Button title = "Get User Location" color = {Colors.primary} onPress = {getLocationHandler} />
                <Button title = "Pick on Map" color = {Colors.primary} onPress = {pickOnMapHandler} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderColor: 'black'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }
})

export default LocationPicker;