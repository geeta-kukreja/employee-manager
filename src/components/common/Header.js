//Import libraries for making a component

import React from 'react';
import { Text, View } from 'react-native';

//create a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        elevation: 4,
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1
    },
    textStyle: {
        fontSize: 20
    }
};

//make the component available to other parts of the app
export { Header };
