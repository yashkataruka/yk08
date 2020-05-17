import React from 'react'; 
import { View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../constants/Colors';
import TitleText from '../components/TitleText';

const Header = props => {
    return (
        <View style = {{...styles.headerBase, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})}}>
            <TitleText style = {styles.title} >{props.title}</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Platform.OS === "android" ? Colors.primary :'white' ,
        
    },
    headerIOS: {
        backgroundColor: 'white' ,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    title: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white'
    }
});

export default Header;