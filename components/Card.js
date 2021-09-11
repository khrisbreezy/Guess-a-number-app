import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({style, children}) => {
    return (
        <View style={{...styles.card, ...style}}>
            {children}
        </View>
    );

};

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        shadowOffset: {width : 0, height: 2},
        shadowRadius: 6,
        elevation: 5,
        // showdowOpacity: 0.26,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10
        
    }
});

export default Card;