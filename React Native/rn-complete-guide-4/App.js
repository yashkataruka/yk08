import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import PlacesNavigator from './navigation/PlacesNavigator';
import placesReducer from './store/reducers/places';
import { init } from './helpers/db';
import locationReducer from './store/reducers/location';

init()
  .then(() => {
    console.log("Initialized DB")
  })
  .catch(err => {
    console.log("Inititalizing DB Failed")
    console.log(err)
})

const rootReducer = combineReducers({
  places: placesReducer,
  location: locationReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store = {store} >
      <PlacesNavigator />
      </Provider>
  );
}

