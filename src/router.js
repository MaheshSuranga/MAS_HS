import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import HomePage from './components/homePage';
import SignupForm from './components/signupForm';
import ReportingForm from './components/reportingForm';

const RouterComponent = () => (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='auth'>
                    <Scene
                     key='login'
                     component={LoginForm}
                     title="Please Login"
                     initial
                    />
                </Scene>
                <Scene key='main'>
                    <Scene 
                     key='homePage'
                     component={HomePage}
                     title="Home Page"
                     initial
                    />
                    <Scene
                     key='signup'
                     component={SignupForm}
                     title="Add User"
                    />
                    <Scene
                     key='reporting'
                     component={ReportingForm}
                     title="Incident Reporting"
                    />
                </Scene> 
            </Scene>
        </Router>
    );    

export default RouterComponent;
