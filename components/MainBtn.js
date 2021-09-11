import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../constants/colors';

const MainBtn = ({children, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        // fontFamily: open-sans,
        fontSize: 18,
    }
})

export default MainBtn;