import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
    const { cardSectionStyle, textStyle, containerStyle } = styles;

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
            <CardSection style={cardSectionStyle}>
                <Text style={textStyle}>{children}</Text>
            </CardSection>

            <CardSection>
                <Button
                    onPress={onAccept}
                    title="Yes"
                />
            </CardSection>

            <CardSection>
            <Button
                onPress={onDecline}
                title="No"
            />
            </CardSection>
            </View>

        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export { Confirm };
