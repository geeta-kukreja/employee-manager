import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import {
    employeeFormNameChanged,
    employeeFormPhoneChanged,
    employeeFormShiftChanged,
    employeeCreate
} from '../actions';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                    label="Name:"
                    placeholder="Jane"
                    onChangeText={text => this.props.employeeFormNameChanged(text)}
                    value={this.props.name}
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label="Phone:"
                    placeholder="9900990099"
                    keyboardType={'phone-pad'}
                    onChangeText={text => this.props.employeeFormPhoneChanged(text)}
                    value={this.props.phone}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerText}>
                        Select A Shift
                    </Text>
                    <Picker
                        style={{ marginLeft: 12, marginRight: 12 }}
                        onValueChange={value => this.props.employeeFormShiftChanged(value)}
                        selectedValue={this.props.shift}
		            >

            			<Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
			            <Picker.Item label="Sunday" value="Sunday" />

                    </Picker>
                </CardSection>

                <CardSection>
                    <Button
                      title="Add Employee"
                      onPress={this.onButtonPress.bind(this)}
                    />
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    pickerText: {
        fontSize: 18,
        paddingLeft: 20,
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps,{
    employeeFormNameChanged,
    employeeFormPhoneChanged,
    employeeFormShiftChanged,
    employeeCreate
})(EmployeeCreate);
