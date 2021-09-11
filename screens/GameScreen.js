import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const genRandomNum = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() * (max - min) + min);
    if ( randNum === exclude ) {
        return genRandomNum(min, max, exclude);
    } else {
        return randNum;
    }
};


const GameScreen = ({userChoice, gameOverFn}) => {
    const [ currGuess, setCurrGuess ] = useState(genRandomNum(1, 100, userChoice));
    const [ rounds, setRounds ] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() => {
        if ( currGuess === userChoice ) {
            gameOverFn(rounds);
        }

    }, [currGuess, gameOverFn, userChoice]);

    const nxtGuessHandler = (dir) => {
        if ( (dir === 'lower' && currGuess < userChoice) || (dir === 'greater' && currGuess > userChoice ) ) {
            Alert.alert(
                'Wrong guess!',
                'Try Again',
                [
                    {
                        text: 'Sorry',
                        style: 'cancel'
                    }
                ]
            );
            return;
        }
        if (dir === 'lower') { 
           currentHigh.current = currGuess;
        } else {
            currentLow.current = currGuess
        }
        const nxtNum = genRandomNum(currentLow.current, currentHigh.current, currGuess);
        setCurrGuess(nxtNum);
        setRounds(curRounds => curRounds + 1);
    }; 

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>
                {currGuess}
            </NumberContainer>
            <Card style={styles.btnCardContainer}>
                <Button title="LOWER" onPress={() => nxtGuessHandler('lower')} />
                <Button title="GREATER"  onPress={() => nxtGuessHandler('greater')} />
            </Card>
        </View>
    )

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    btnCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '100%'
    }
    

});

export default GameScreen;