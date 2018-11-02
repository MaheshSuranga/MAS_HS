import firebase from 'firebase';
import { USER_FETCH_SUCCESS } from './types';

export const userFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
        .on('value', snapshot => {
            // console.log(snapshot.val());
            dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};
