import React from 'react';
import { View, StyleSheet, Button, Image, Dimensions, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainBtn from '../components/MainBtn';



const GameOverScreen = ({totalRounds, guessedNum , restartGame}) => {
    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>The Game is Over!</TitleText>
                <View style={styles.imgContainer}>
                    <Image style={styles.img}
                    source={{uri: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'}}
                    // source={require('../assets/images/success.png')}
                    resizeMode="cover" />
                </View>
                <BodyText>Number of rounds: {totalRounds}</BodyText>
                <BodyText>Number was: {guessedNum}</BodyText>
                <MainBtn onPress={restartGame}>
                    <Ionicons name="add-circle-outline" size={20} color="white" />
                    Restart Game
                </MainBtn>
                {/* <Text>{Dimensions.get('window').width} - Dimension Width</Text>
                <Text>{Dimensions.get('window').height} - Dimension Height</Text> */}
            </View>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    imgContainer: {
        // width: 300,
        // height:  300,
        // borderRadius: 150,
        width: Dimensions.get('window').width * 0.6,
        height:  Dimensions.get('window').width * 0.6,
        borderRadius: Dimensions.get('window').width * 0.6 / 2,
        borderWidth: 3,
        borderColor: Colors.primary,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 40
    },
    img: {
        width: '100%',
        height: '100%',
        // borderRadius: 150,
    }


});

export default GameOverScreen;
