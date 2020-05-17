import React from 'react';
import { useSelector } from 'react-redux'; // instead of connect(mapStateToProps...)
import { View, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList'
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => {
        return (state.meals.filteredMeals);
    })

    // const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    // changeTitle(selectedCategory.title);

    const displayMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

    if (displayMeals.length === 0) {
        return (
            <View style = {styles.content} >
                <DefaultText>No meals found. Check your filters</DefaultText>
            </View>
        )
    }

    return (
        <MealList listData = {displayMeals} navigation = {props.navigation} />
    );
}

// const changeTitle = (title) => {
//     CategoryMealsScreen.navigationOptions = {
//         headerTitle: title
//     }
// } Can eb done using this too

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    }
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;