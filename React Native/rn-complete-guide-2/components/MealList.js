import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id)
        return (
            <MealItem 
                duration = {itemData.item.duration} affordability = {itemData.item.affordability} 
                complexity = {itemData.item.complexity} title = {itemData.item.title} 
                image = {itemData.item.imageUrl} onSelectMeal = {() => {
                props.navigation.navigate({
                    routeName: 'MealDetail',
                    params: {
                        mealId: itemData.item.id,
                        mealTitle: itemData.item.title,
                        isFav: isFavorite
                    }
                })
            }} />
        );
    }

    return (
        <View style = {styles.list} >
            <FlatList data = {props.listData} keyExtractor = {(item, index) => item.id} 
                renderItem = {renderMealItem} style = {{width: '100%'}} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealList;