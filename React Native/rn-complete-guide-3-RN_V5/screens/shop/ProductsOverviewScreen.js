import React, { useState ,useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet, Button, ActivityIndicator, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import HeaderButton from '../../components/UI/HeaderButton';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import * as productsActions from '../../store/actions/products';
import Colors from '../../constants/Colors';

const ProductsOverviewScreen = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();
    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch();

    const loadProducts = useCallback(async () => {
        setError(null)
        setIsRefreshing(true);
        await dispatch(productsActions.fetchProducts()
        ).then(() => {
            setIsRefreshing(false)
        }).catch(error => {
            setError(error.message);
            setIsRefreshing(false)
        })
    }, [dispatch, setIsRefreshing, setError])

    useEffect(() => {
        setIsLoading(true);
        loadProducts().then(() => {
            setIsLoading(false)
        })
    }, [loadProducts])

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', loadProducts)
        return () => {
            unsubscribe()
        }
    }, [loadProducts])

    // const selectItemHandler = (id, title) => {
    //     props.navigation.navigate({
    //     routeName: 'ProductDetail',
    //     params: {
    //         productId: id,
    //         productTitle: title
    //     }
    // })}
    
    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', {
            productId: id,
            productTitle: title
        }
    )}

    if (error) {
        return (
            <View style = {styles.centered} >
                <Text>{error}</Text>
                <Button title = "Try Again" onPress = {() => {
                    setError(null)
                    setIsLoading(true);
                    dispatch(productsActions.fetchProducts()).then(
                        response => {
                            setIsLoading(false)
                        }
                    ).catch(error => {
                        setIsLoading(false);
                        setError(error.message);
                    })
                }} color = {Colors.primary} />
            </View>
        );
    }

    if (isLoading) {
        return (
            <View style = {styles.centered} >
                <ActivityIndicator size = "large" color = {Colors.primary} />
            </View>
        );
    }

    if (!isLoading && products.length === 0) {
        return (
            <View style = {styles.centered} >
                <Text>No Products found!</Text>
            </View>
        );
    }

    return (
        <FlatList onRefresh = {loadProducts} refreshing = {isRefreshing}
                data = {products} keyExtractor = {(item, index) => item.id} 
                renderItem = {itemData => 
                <ProductItem image = {itemData.item.imageUrl} 
                            title = {itemData.item.title} price = {itemData.item.price} 
                            onSelect = {() => selectItemHandler(itemData.item.id, itemData.item.title)}
                >
                    <Button color = {Colors.primary} title = "View Details" 
                            onPress = {() => selectItemHandler(itemData.item.id, itemData.item.title)} />
                    <Button color = {Colors.primary} title = "To Cart" 
                            onPress = {() => {
                                dispatch(cartActions.addToCart(itemData.item))
                            }} />
                </ProductItem>}            
        />
    );
}

export const screenOptions = navData => {
    return {
        headerTitle: 'All Products',
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent = {HeaderButton} >
                    <Item title = "Cart" iconName = "md-cart" onPress = {() => {
                        navData.navigation.navigate('Cart')
                    }} />
                </HeaderButtons>
            )
        },
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent = {HeaderButton} >
                    <Item title = "Menu" iconName = "md-menu" onPress = {() => {
                        navData.navigation.toggleDrawer()
                    }} />
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    centered: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default ProductsOverviewScreen;