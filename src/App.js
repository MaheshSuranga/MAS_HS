import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAkIQkuUPTHQcdNUnU2ethQuhi0JH-oxA0',
            authDomain: 'mas-hs.firebaseapp.com',
            databaseURL: 'https://mas-hs.firebaseio.com',
            projectId: 'mas-hs',
            storageBucket: 'mas-hs.appspot.com',
            messagingSenderId: '897064450359'
          };

          firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
