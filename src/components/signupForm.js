import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { nameChanged, 
         emailChanged,
         passwordChanged, 
         mobileChanged, 
         typeChanged, 
         signupUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class SignupForm extends Component {
    onNameChange(text) {
        this.props.nameChanged(text);
    }  
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onMobileChange(text) {
        this.props.mobileChanged(text);
    }
    onTypeChange(value) {
        this.props.typeChanged(value);
    }
    onButtonPress() {
        const { name, email, password, tel, type } = this.props;
        this.props.signupUser({ name, email, password, tel, type });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Add New User
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Mike Hussy"
                        onChangeText={this.onNameChange.bind(this)} 
                        value={this.props.name}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@fmail.com"
                        onChangeText={this.onEmailChange.bind(this)} 
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Mobile NO"
                        placeholder="07x-xxx-xxxx"
                        onChangeText={this.onMobileChange.bind(this)} 
                        value={this.props.tel}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Type</Text>
                        <Picker
                        selectedValue={this.props.type}
                        onValueChange={value => this.props.onTypeChange(value)}
                        >
                            <Picker.Item label='Admin' value='Admin' />
                            <Picker.Item label='Ordinary' value='Ordinary' />
                        </Picker>
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
        color: 'red'
    }
};

const mapStateToProps = ({ auth }) => {
        const { name, email, password, tel, type, error, loading } = auth;

        return { name, email, password, tel, type, error, loading };
    };

export default connect(mapStateToProps, { 
    emailChanged, 
    passwordChanged,
    mobileChanged,
    typeChanged, 
    signupUser,
    nameChanged 
})(SignupForm);
