import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import { NAME_CHANGED, 
        EMAIL_CHANGED,
        PASSWORD_CHANGED,
        MOBILE_CHANGED,
        TYPE_CHANGED,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAIL, 
        LOGIN_USER,
        SIGNUP_USER,
        SIGNUP_USER_SUCCESS,
        SIGNUP_USER_FAIL } from './types';

export const nameChanged = (text) => ({
    type: NAME_CHANGED,
    payload: text
});

export const emailChanged = (text) => ({
        type: EMAIL_CHANGED,
        payload: text
    });

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
});

export const mobileChanged = (text) => ({
    type: MOBILE_CHANGED,
    payload: text
});

export const typeChanged = (value) => ({
    type: TYPE_CHANGED,
    payload: value
});

export const signupUser = ({ name, email, password, tel, type }) => (dispatch) => {
    dispatch({ type: SIGNUP_USER });

    return new Promise((resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
            signupUserSuccess(dispatch, user);
            resolve(user);
            })
        .catch(() => {
            signupnUserFail(dispatch);
            reject("couldn't add user to database");
            });
    }).then(user => {
        console.log(user, user.user.uid);
        firebase.database().ref(`/users/${user.user.uid}`)
            .set({ type, name, email, tel })
            .then(() => {
                console.log('user added to database');
            });
    }).catch(msg => console.log(msg));
};

export const loginUser = ({ email, password }) => (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(() => {
                loginUserFail(dispatch);
            });
    };

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const signupUserSuccess = (dispatch, user) => {
    dispatch({
        type: SIGNUP_USER_SUCCESS,
        payload: user
    });

    Actions.homePage({ msg: 'successfully added a user' });
};

const signupnUserFail = (dispatch) => {
    dispatch({
        type: SIGNUP_USER_FAIL
    });
};
