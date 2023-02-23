import React, { Component } from 'react';
import { View, Text, Picker, Linking } from 'react-native';
import { connect } from 'react-redux';
import { employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Input, Confirm } from './common';

class EmployeeEdit extends Component {
    state = { name: '', phone: '', shift: '', showModal: false }

    componentWillMount() {
        const { name, phone, shift } = this.props.employee;
        this.setState({ name, phone, shift });
    }

    onButtonPress() {
        const { name, phone, shift } = this.state;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
    }

    render() {
        return (
            <Card>
              
                <CardSection>
                  <Input
                    label="Name:"
                    placeholder="Jane"
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                  />
                </CardSection>

                <CardSection>
                  <Input
                    label="Phone No:"
                    placeholder="9900990099"
                    keyboardType={'phone-pad'}
                    value={this.state.phone}
                    onChangeText={text => this.setState({phone: text})}
                  />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerText}>
                        Select A Shift
                    </Text>
                    <Picker
                        selectedValue={this.state.shift}
                        onValueChange={text => this.setState({shift: text})}
			            style={{ marginLeft: 12, marginRight: 12 }}
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
                      title="Save Changes"
                        onPress={this.onButtonPress.bind(this)}
                    />
                </CardSection>

                <CardSection>
                    <Button
                      title="Send Schedule"
                      onPress={() => {
                          Linking.openURL(`whatsapp://send?text=${this.state.shift}`);
                      }}
                    />
                </CardSection>

                <CardSection>
                    <Button
                      title="Fire Employee"
                      onPress={() => this.setState({ showModal: true })}
                    />
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={() => {
                        const { uid } = this.props.employee;
                        this.props.employeeDelete({ uid });
                    }}
                    onDecline={() => this.setState({ showModal: !this.state.showModal })}
                >
                    Fire??
                </Confirm>

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

export default connect(null, {employeeSave, employeeDelete})(EmployeeEdit);
