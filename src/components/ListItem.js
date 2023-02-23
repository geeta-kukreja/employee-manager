import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {
    onListItemPress() {
        Actions.employeeEdit({ employee: this.props.employee });
    }

    render() {
        const { name } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onListItemPress.bind(this)}>
                <View>
                <CardSection>
                    <Text style={styles.textStyle}>
                        {name}
                    </Text>
                </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;
