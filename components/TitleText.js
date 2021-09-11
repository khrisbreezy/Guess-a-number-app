import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = ({children}) => {
    return (
        <Text style={styles.text}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }

});


export default TitleText;