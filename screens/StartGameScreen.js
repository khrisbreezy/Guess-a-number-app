import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';


const StartGame = ({onStartGame}) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmGame, setConfirmGame] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = (e) => {
        e.persist();
        const inputText = e.nativeEvent.text;
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmGame(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if ( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 and 99',
                [
                    {
                        text: 'Okay',
                        style: 'destructive',
                        onPress: () => resetInputHandler,
                    },
                    {
                        text: 'Cancel',
                        style: 'cancel',
                        onPress: () => console.log('cancel pressed')
                    }
                ]
            )
            return;
        }
        setConfirmGame(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if (confirmGame) {
        confirmedOutput = (
            <Card style={styles.confirmContainer}>
                <Text>You selected</Text>
                <NumberContainer>
                        {selectedNumber}
                </NumberContainer>
                <Button onPress={() => onStartGame(selectedNumber)} title="START GAME NOW" />
            </Card>
        );
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.screen}>
                        <Text style={styles.title}>Start a New Game</Text>
                        <Card style={styles.inputContainer}>
                            <BodyText>Select a Number</BodyText>
                            <Input onChange={numberInputHandler} value={enteredValue} style={styles.input} blurOnSubmit autoCapitalize="none" autoCorrect={false} keyboardType="number-pad" maxLength={2} />
                            <View style={styles.btnContainer}>
                                <View style={styles.button}><Button title='Reset' onPress={resetInputHandler} color={Colors.accent} /></View>
                                <View style={styles.button}><Button title='Confirm' color={Colors.primary} onPress={confirmInputHandler} /></View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: {width : 0, height: 2},
        // shadowRadius: 6,
        // elevation: 5,
        // showdowOpacity: 0.26,
        // backgroundColor: '#fff',
        // padding: 20,
        // borderRadius: 10

    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: Dimensions.get('window').width / 3
        // width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    confirmContainer: {
        marginTop: 20,
        alignItems: 'center',
    }
});


export default StartGame;