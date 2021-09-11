import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = ({children}) => {
    return (
        <Text style={styles.text}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans',
        marginVertical: 5
    }

});


export default BodyText;