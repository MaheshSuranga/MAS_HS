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
    SIGNUP_USER_FAIL } from '../actions/types';

const INITIAL_STATE = { name: '',
                    email: '',
                    password: '',
                    tel: '',
                    type: 'ordinary',
                    user: null,
                    error: '',
                    loading: false };

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
    case NAME_CHANGED:
        return { ...state, name: action.payload };
    case EMAIL_CHANGED:
        return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
        return { ...state, password: action.payload };
    case MOBILE_CHANGED:
        return { ...state, tel: action.payload };
    case TYPE_CHANGED:
        return { ...state, type: action.payload };
    case LOGIN_USER:
        return { ...state, loading: true, error: '' };
    case SIGNUP_USER:
        return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed', password: '', loading: false };
    case SIGNUP_USER_SUCCESS:
        return { ...state, ...INITIAL_STATE };
    case SIGNUP_USER_FAIL:
        return { ...state, error: 'Adding user failed', loading: false };
    default:
        return state;
}
};
