import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <ScrollView>
            <View style = {styles.screen}>
                <TitleText>The Game is Over!</TitleText>
                <View style = {styles.imageContainer}>
                    <Image 
                        //fadeDuration = {2000}
                        source = {require('../assets/success.png')} 
                        // source = {{uri: 'https://images.unsplash.com/photo-1535224206242-487f7090b5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'}} 
                        style = {styles.image}
                        resizeMode = "cover"
                    />
                </View>
                <View style = {styles.resultContainer}>
                    <BodyText style = {styles.resultText} >Your Phone needed<Text style = {styles.highlight}> {props.roundsNumber} </Text>
                    rounds to guess the number<Text style = {styles.highlight}> {props.userNumber}</Text>
                    </BodyText>
                </View>
                <MainButton onPress = {props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
        textAlign: 'center'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
});

export default GameOverScreen;