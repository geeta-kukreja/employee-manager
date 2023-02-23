import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../actions';

class LoginForm extends Component {

    renderError() {
        if(this.props.error) {
            return <Text>{this.props.error}</Text>
        }
    } 

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
       if(this.props.loading) {
            return <Spinner size='small' />
        }
        return <Button title='Login' onPress={this.onButtonPress.bind(this)} />
    }

    render() {
        return (
            <Card style={{ paddingTop: 50 }}>
                <CardSection>
                    <Input 
                        label="Email:"
                        placeholder="email@gmail.com"
                        onChangeText={text => this.props.emailChanged(text)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password:"
                        placeholder="password"
                        onChangeText={text => this.props.passwordChanged(text)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    },
}; 

const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;
    return { email, password, error, loading };
};

export default connect(mapStateToProps,{
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);
