import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import DefaultText from './DefaultText';

const MealItem = props => {
    return (
        <TouchableOpacity style = {styles.mealItem} onPress = {props.onSelectMeal} >
            <View>
                <View style = {{...styles.mealRow, ...styles.mealHeader}} >
                    <ImageBackground source = {{uri: props.image}} style = {styles.bgImage}>
                        <View style = {styles.titleContainer}>
                            <Text style = {styles.title} numberOfLines = {1} >{props.title}</Text>
                        </View>
                    </ImageBackground>
                </View>
                <View style = {{...styles.mealRow, ...styles.mealDetail}} >
                    <DefaultText>{props.duration} mins.</DefaultText>
                    <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        flex: 1,
        height: 200,
        backgroundColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 15
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});

export default MealItem;