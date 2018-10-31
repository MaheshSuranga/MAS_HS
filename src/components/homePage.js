import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, Confirm } from './common';
import { userFetch } from '../actions';


class HomePage extends Component {
    constructor() {
        super();
        this.state = { adminprivilage: false,
                       showModal: false };
    }

    componentWillMount() {
        this.props.userFetch();
        const { type, name, email, tel } = this.props;
        console.log({ type, name, email, tel });
        if (type === 'admin') {
            this.setState({ adminprivilage: true });
        }
        if (this.props.msg) {
            this.setState({ showModal: true });
        }
    }

    componentWillReceiveProps(nextProps) {
        const { type, name, email, tel } = nextProps.user;
        console.log({ type, name, email, tel });
        if (type === 'admin') {
            this.setState({ adminprivilage: true });
        }
    }

    onAccept() {
        this.setState({ showModal: false });
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    onAddUserPress() {
        Actions.signUpForm();
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Button >
                        Incident Reporting
                    </Button>
                </CardSection>

                <CardSection>
                    <Button>
                        Health Monitoring
                    </Button>
                </CardSection>

                <CardSection>
                    <Button>
                        Connect Devices
                    </Button>
                </CardSection>

                <CardSection>
                    <Button>
                        H&S Competitions
                    </Button>
                </CardSection>

                <CardSection>
                    <Button>
                        H&S Notifications
                    </Button>
                </CardSection>

                <CardSection>
                    <Button>
                        My Tasks
                    </Button>
                </CardSection>
                
                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                       {this.props.msg}
                </Confirm>
                

                {this.state.adminprivilage && (<CardSection>
                    <Button onPress={this.onAddUserPress.bind(this)}>
                        Add User
                    </Button>
                </CardSection>)}
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { type, name, email, tel } = state.user;

    return { type, name, email, tel };
};

export default connect(mapStateToProps, { userFetch })(HomePage);
