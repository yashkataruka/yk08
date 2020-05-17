import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';
import * as placesActions from '../store/actions/places';

const PlacesListScreen = props => {

    const places = useSelector(state => state.places.places)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(placesActions.loadPlaces())
    }, [dispatch])

    return (
        <FlatList data = {places} keyExtractor = {(item, index) => item.id}
                renderItem = {itemData => <PlaceItem image = {itemData.item.imageUri} title = {itemData.item.title}
                    address = {itemData.item.address} onSelect = {() => props.navigation.navigate('PlaceDetail', {
                        placeTitle: itemData.item.title,
                        placeId: itemData.item.id
                    })}
                />}
        />
    );
}

PlacesListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Places',
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent = {HeaderButton} >
                    <Item title = "Add Place" iconName = {Platform.OS === "android" ? 'md-add' : 'ios-add'}
                    onPress = {() => {
                        navData.navigation.navigate('NewPlace')
                    }} />
                </HeaderButtons>
            );
        }
    }
}

const styles = StyleSheet.create({

})

export default PlacesListScreen;