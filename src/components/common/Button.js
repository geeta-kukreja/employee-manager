import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
            {title}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        marginLeft: 0,
        marginRight: 0,
    },
    textStyle: {
        width: 'auto',
        textAlign: 'center',
        color: '#007aff',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    }
};

export { Button };
