import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import HomePage from './components/homePage';

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
                </Scene> 
            </Scene>
        </Router>
    );    

export default RouterComponent;
