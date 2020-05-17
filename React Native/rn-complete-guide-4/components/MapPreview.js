import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import ENV from '../env';

const MapPreview = props => {
    let imagePreviewUrl;
    if (props.location) {
        // imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${props.location.lat},${props.location.lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${props.location.lat},${props.location.lng}&key=${ENV.googleApiKey}`
        // imagePreviewUrl = "https://qphs.fs.quoracdn.net/main-qimg-3b53e847a0fcd6ea80829a9620bc2fa2.webp"
        imagePreviewUrl = `https://apis.mapmyindia.com/advancedmaps/v1/${ENV.mapMyIndiaApiKey}/still_image?center=${props.location.lat},${props.location.lng}&zoom=13&size=400x200`
    }
    return (
        <TouchableOpacity style = {{...styles.mapPreview, ...props.style}} onPress = {props.onPress} >
            {props.location ? <Image style = {styles.mapImage} source = {{uri: imagePreviewUrl}} /> : props.children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    mapImage: {
        width: '100%',
        height: '100%'
    }
})

export default MapPreview;