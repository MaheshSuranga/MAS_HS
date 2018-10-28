import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { userFetch } from '../actions';

class HomePage extends Component {
    constructor() {
        super();
        this.state = { adminprivilage: false };
    }

    componentWillMount() {
        this.props.userFetch();
        const { type, name, email, tel } = this.props;
        console.log({ type, name, email, tel });
        if (type === 'admin') {
            this.setState({ adminprivilage: true });
        }
    }

    componentWillReceiveProps(nextProps) {
        const { type, name, email, tel } = nextProps.user;
        console.log({ type, name, email, tel });
        if (type === 'admin') {
            this.setState({ adminprivilage: true });
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Button>
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
                
                {this.state.adminprivilage && (<CardSection>
                    <Button>
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
