import React, { Component } from 'react';
import { View, Text, Picker, TouchableHighlight, CameraRoll, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { Card, CardSection, Button, Confirm, Input } from './common';

class ReportingForm extends Component {
    constructor() {
        super();
        this.state = { photoArray: [] };
    }

    onTypeChange(value) {
        console.log(value);
    }

    onIncidentChange() {

    }
    
    onDescriptionChange() {

    }

    onJobAssignChange(value) {
        console.log(value);
    }

    onPhotoselect() {
        CameraRoll.getPhotos({ first: 20,
            assetType: 'Photos', })
            .then(res => {
                const photoArray = res.edges;
                this.setState({ photoArray });
            });
    }

    render() {
        const radioProps = [
            { label: 'Near Miss', value: 'near miss' },
            { label: 'Unsafe Condition', value: 'unsafe condition' },
            { label: 'Accident', value: 'accident' }
          ];

        return (
            <Card>
                <CardSection>
                    <RadioForm
                    radio_props={radioProps}
                    initial={0}
                    formHorizontal
                    animation
                    onPress={value => this.onTypeChange(value)}
                    />
                </CardSection>
                <CardSection>
                    <Input
                    label="Incident"
                    placeholder="Type your incident in brief"
                    onChangeText={this.onIncidentChange.bind(this)} 
                    value={this.props.incident}
                    />
                </CardSection>
                <CardSection>
                    <Input
                    multiline
                    label="Description"
                    placeholder="Enter Short description"
                    onChangeText={this.onDescriptionChange.bind(this)} 
                    value={this.props.incident}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Job Assign To</Text>
                        <Picker
                        selectedValue="wimukthi@gmail.com"
                        onValueChange={value => this.onJobAssignChange(value)}
                        >
                            <Picker.Item label='msurazz@gmail.com' value='msurazz@gmail.com' />
                            <Picker.Item label='tharindu@gmail.com' value='tharindu@gmail.com' />
                            <Picker.Item label='wimukthi@gmail.com' value='wimukthi@gmail.com' />
                        </Picker>
                </CardSection>
                <CardSection>
                    <View>
                        <Text style={styles.pickerTextStyle}>Select a photo</Text>
                        {this.state.photoArray && <ScrollView>
                                {this.state.photoArray.map((p, i) => (
                                        <Image 
                                         key={i}
                                         style={{
                                            width: 300,
                                            height: 100,
                                          }}
                                          source={{ uri: p.node.image.uri }}
                                        />
                                    ))}
                            </ScrollView>}  
                        <TouchableHighlight onPress={this.onPhotoselect.bind(this)}>
                            <Text>select</Text>
                        </TouchableHighlight> 
                    </View>  
                </CardSection>
                <CardSection>
                    <Button>
                        Submit
                    </Button>
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

export default ReportingForm;
