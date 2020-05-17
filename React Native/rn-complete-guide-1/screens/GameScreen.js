import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenOrientation } from 'expo';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import DefaultStyle from '../constants/DefaultStyle';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random()*(max - min)) + min;
    if (rndNum == exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNum;
    }
};

const renderListItem = (listLength, itemData) => (
    <View style = {styles.listItem}>
        <BodyText>#{listLength - itemData.index} </BodyText>
        <BodyText>{itemData.item}</BodyText>
    </View>
);

const GameScreen = props => {
    
    // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    // ScreenOrientation.getOrientationAsync
    // ScreenOrientation.addOrientationChangeListener

    const intitalGuess = generateRandomBetween(1, 100, props.userChoice);

    const [currentGuess, setCurrentGuess] = useState(intitalGuess);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);
    const [pastGuesses, setPastGuesses] = useState([intitalGuess.toString()]);
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess == props.userChoice) {
            props.onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width)
            setAvailableDeviceHeight(Dimensions.get('window').height)
        }
        Dimensions.addEventListener('change', updateLayout)
        return () => Dimensions.removeEventListener('change', updateLayout)
    })
    
    const nextGuessHandler = direction => {
        if ((direction === "lower" && currentGuess < props.userChoice) || (direction === "greater" && currentGuess > props.userChoice))
        {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{text: "Sorry", style: "cancel"}]);
            return;
        }
        if (direction === "lower")
        {
            currentHigh.current = currentGuess;
        }
        else
        {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber  = generateRandomBetween(currentLow.current,currentHigh.current,currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuesses(currPastGuesses => [nextNumber.toString(),...currPastGuesses]);
    };

    let listContainerStyle = styles.listContainer;

    if (availableDeviceWidth < 350) {
        listContainerStyle = styles.listContainerBig
    }

    if (availableDeviceHeight < 500) {
        return (
            <View style = {styles.screen}>
                <Text style = {DefaultStyle.bodyText}>Opponent's Guess</Text>
                <Card style = {styles.buttonContainer}>
                    <MainButton onPress = {nextGuessHandler.bind(this, "lower")}>
                        <Ionicons name = "md-remove" size = {24} color = "white" />
                    </MainButton>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <MainButton onPress = {nextGuessHandler.bind(this, "greater")}>
                        <Ionicons name = "md-add" size = {24} color = "white" />
                    </MainButton>
                </Card>
                <View style = {listContainerStyle} >
                    {/* <ScrollView contentContainerStyle = {styles.list} >
                        {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                    </ScrollView> */}
                    <FlatList 
                        contentContainerStyle = {styles.list}
                        keyExtractor = {(item) => item} data = {pastGuesses} 
                        renderItem = {renderListItem.bind(this, pastGuesses.length)} />
                </View>
            </View>
        )
    }

    return (
        <View style = {styles.screen}>
            <Text style = {DefaultStyle.bodyText}>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style = {styles.buttonContainer}>
                <MainButton onPress = {nextGuessHandler.bind(this, "lower")}>
                    <Ionicons name = "md-remove" size = {24} color = "white" />
                </MainButton>
                <MainButton onPress = {nextGuessHandler.bind(this, "greater")}>
                    <Ionicons name = "md-add" size = {24} color = "white" />
                </MainButton>
            </Card>
            <View style = {listContainerStyle} >
                {/* <ScrollView contentContainerStyle = {styles.list} >
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView> */}
                <FlatList 
                    contentContainerStyle = {styles.list}
                    keyExtractor = {(item) => item} data = {pastGuesses} 
                    renderItem = {renderListItem.bind(this, pastGuesses.length)} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width: 300,
        maxWidth: '90%',
        alignItems: 'center'
    },
    listContainer: {
        // width: Dimensions.get('window').width > 350 ? '60%' : '80%',
        width: '60%',
        flex: 1
    },
    listContainerBig: {
        width: '80%',
        flex: 1
    },
    list: {
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    listItem: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        width: '100%',
    }
});

export default GameScreen;