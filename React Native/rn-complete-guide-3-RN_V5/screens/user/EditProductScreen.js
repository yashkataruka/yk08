import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { View, ScrollView, StyleSheet, KeyboardAvoidingView, Alert, ActivityIndicator } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../../components/UI/HeaderButton';
import * as productsActions from '../../store/actions/products';
import Input from '../../components/UI/Input';
import Colors from '../../constants/Colors';

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE"

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        }
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValues: updatedValues,
            inputValidities: updatedValidities
        };
    }
    return state;
};

const EditProductScreen = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const prodId = props.route.params ? props.route.params.productId : null;
    const editedProduct = useSelector(state => state.products.userProducts.find(prod => prod.id === prodId))
    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, {
        inputValues: {
            title: editedProduct ? editedProduct.title : '',
            imageUrl: editedProduct ? editedProduct.imageUrl : '',
            description: editedProduct ? editedProduct.description : '',
            price: ''
        }, 
        inputValidities: {
            title: editedProduct ? true: false,
            imageUrl: editedProduct ? true: false,
            description: editedProduct ? true: false,
            price: editedProduct ? true: false
        }, 
        formIsValid: editedProduct ? true : false
    })

    useEffect(() => {
        if (error) {
            Alert.alert("An error occured", error, [{
                text: 'Okay'
            }])
        }
    }, [error])

    const submitHandler = useCallback(async () => {
        if (!formState.formIsValid) {
            Alert.alert("Wrong Input", "Please check the errors in the form", [
                {text: 'Okay'}
            ])
            return;
        }
        setIsLoading(true);
        setError(null);
        try {
            if (editedProduct) {
                await dispatch(productsActions.updateProduct(prodId, formState.inputValues.title, 
                                            formState.inputValues.description, formState.inputValues.imageUrl))
            }
            else {
                await dispatch(productsActions.createProduct(formState.inputValues.title, formState.inputValues.description, 
                                            formState.inputValues.imageUrl, +formState.inputValues.price))
            }
            props.navigation.goBack()
        }
        catch(err) {
            setError(err.message)
        }
        setIsLoading(false)
    }, [dispatch, prodId, formState])

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButtons HeaderButtonComponent = {HeaderButton} >
                        <Item title = "Save" iconName = "md-checkmark" onPress = {submitHandler} />
                    </HeaderButtons>
                )
            }
        })
    }, [submitHandler])

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({type: FORM_INPUT_UPDATE, value: inputValue, isValid: inputValidity, input: inputIdentifier})
    }, [dispatchFormState])

    if (isLoading ){
        return (
            <View style = {styles.centered} >
                <ActivityIndicator size = "large" color = {Colors.primary} />
            </View>
        )
    }

    return (
        <KeyboardAvoidingView behavior = "padding" keyboardVerticalOffset = {100} >
            <ScrollView>
                <View style = {styles.form} >
                    <Input id = "title" label = "Title" keyboardType = "default" autoCorrect 
                            initialValue = {editedProduct ? editedProduct.title : ''}
                            initiallyValid = {!!editedProduct} required
                            autoCapitalize = "sentences" returnKeyType = "next" 
                            errorText = "Please enter a valid Title" 
                            onInputChange = {inputChangeHandler}
                    />
                    <Input id = "imageUrl" label = "Image URL" keyboardType = "default"
                            initialValue = {editedProduct ? editedProduct.imageUrl : ''}
                            initiallyValid = {!!editedProduct} required
                            returnKeyType = "next" errorText = "Please enter a valid image URL" 
                            onInputChange = {inputChangeHandler} />
                    {editedProduct ? null : <Input id = "price" 
                                            label = "Price" keyboardType = "decimal-pad" required min = {0.1}
                                            returnKeyType = "next" errorText = "Please enter a valid Price" 
                                            onInputChange = {inputChangeHandler} />
                    }
                    <Input id = "description" label = "Description" 
                            keyboardType = "default" autoCorrect multiline numOfLines = {3}
                            initialValue = {editedProduct ? editedProduct.description : ''}
                            initiallyValid = {!!editedProduct} required minLength = {5}
                            autoCapitalize = "sentences" errorText = "Please enter a valid Description" 
                            onInputChange = {inputChangeHandler} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export const screenOptions = navData => {
    const routeParams = navData.route.params ? navData.route.params : {}
    return {
        headerTitle: routeParams.productId ? 'Edit Product' : 'Add Product',
    }
}

const styles = StyleSheet.create({
    form: {
        margin: 20
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EditProductScreen;