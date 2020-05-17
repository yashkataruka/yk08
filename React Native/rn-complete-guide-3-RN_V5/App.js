import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import ReduxThunk from 'redux-thunk';

import productReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart'
import ordersReducer from './store/reducers/orders';
import authReducer from './store/reducers/auth';
import AppNavigator from './navigation/AppNavigator';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync = {fetchFonts} onFinish = {() => {
        setFontLoaded(true)
      }} />
    )
  }

  return (
    <Provider store = {store} >
      <AppNavigator/>
    </Provider>
  );
}

