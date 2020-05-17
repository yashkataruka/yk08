import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableNativeFeedback } from 'react-native';

import Card from '../UI/Card';

const ProductItem = props => {
    return (
        <Card style = {styles.product} >
            <TouchableNativeFeedback onPress = {props.onSelect} useForeground >
                <View>
                    <Image style = {styles.image} source = {{uri: props.image}} />
                    <View style = {styles.details} >
                        <Text style = {styles.title} >{props.title}</Text>
                        <Text style = {styles.price} >${props.price.toFixed(2)}</Text>
                    </View>
                    <View style = {styles.actions} >
                        {props.children}
                    </View>
                </View>
            </TouchableNativeFeedback>
        </Card>
    );
}

const styles = StyleSheet.create({
    product: {
        height: 300,
        margin: 20,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '60%'
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
        fontFamily: 'open-sans-bold'
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'open-sans'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    }
})

export default ProductItem;