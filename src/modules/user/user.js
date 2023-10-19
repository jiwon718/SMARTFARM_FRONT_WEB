import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../../lib/api/createRequestSaga';
import * as WebAPI from '../../lib/api/webApi';
import { initailizeSaga } from '../common';

const CHANGE_ID = 'user/CHANGE_ID';
const CHANGE_PASSWORD = 'user/CHANGE_PASSWORD';
const CHANGE_PASSWORD_CHECK = 'user/CHANGE_PASSWORD_CHECK';
const CHANGE_NAME = 'user/CHANGE_NAME';
const CHANGE_PHONE_NUMBER = 'user/CHANGE_PHONE_NUMBER';
const CHANGE_LOGOUT = 'user/CHANGE_LOGOUT';
const SIGNUP_INITIALIZE = 'user/SIGNUP_INITIALIZE';
const LOGIN_INITIALIZE = 'user/LOGIN_INITIALIZE';
const [SIGNUP, SIGNUP_SUCCESS] = createRequestActionTypes('user/SIGNUP');
const [LOGIN, LOGIN_SUCCESS] = createRequestActionTypes('user/LOGIN');

export const changeId = createAction(CHANGE_ID, id => id);
export const changePassword = createAction(CHANGE_PASSWORD, password => password);
export const changePasswordCheck = createAction(CHANGE_PASSWORD_CHECK, passwordCheck => passwordCheck);
export const changeName = createAction(CHANGE_NAME, name => name);
export const changePhoneNumber = createAction(CHANGE_PHONE_NUMBER, phoneNumber => phoneNumber);
export const changeLogOut = createAction(CHANGE_LOGOUT);
export const signupInitialize = createAction(SIGNUP_INITIALIZE);
export const loginInitialize = createAction(LOGIN_INITIALIZE);
export const signup = createAction(SIGNUP);
export const login = createAction(LOGIN);

const signupSaga = createRequestSaga(SIGNUP, WebAPI.signup);
const loginSaga = createRequestSaga(LOGIN, WebAPI.login);

export function* userSaga() {
    yield takeLatest(SIGNUP, signupSaga);
    yield takeLatest(SIGNUP_INITIALIZE, initailizeSaga);
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(LOGIN_INITIALIZE, initailizeSaga);
}

const initialState = {
    sessionId: null,
    id: '',
    password: '',
    passwordCheck: '',
    name: '',
    phoneNumber: '',

    signupSuccess: null,
    loginSuccess: null
};

const user = handleActions(
    {
        [CHANGE_ID]: (state, { payload: id }) => ({
            ...state,
            id: id
        }),
        [CHANGE_PASSWORD]: (state, { payload: password }) => ({
            ...state,
            password: password
        }),
        [CHANGE_PASSWORD_CHECK]: (state, { payload: passwordCheck }) => ({
            ...state,
            passwordCheck: passwordCheck
        }),
        [CHANGE_NAME]: (state, { payload: name }) => ({
            ...state,
            name: name
        }),
        [CHANGE_PHONE_NUMBER]: (state, { payload: phoneNumber }) => ({
            ...state,
            phoneNumber: phoneNumber
        }),
        [CHANGE_LOGOUT]: (state) => ({
            ...state,
            id: '',
            password: '',
            passwordCheck: '',
            name: '',
            phoneNumber: ''
        }),
        [SIGNUP_INITIALIZE]: (state) => ({
            ...state,
            id: '',
            password: '',
            passwordCheck: '',
            name: '',
            phoneNumber: '',
            signupSuccess: null
        }),
        [SIGNUP_SUCCESS]: (state) => ({
            ...state,
            signupSuccess: true
        }),
        [LOGIN_INITIALIZE]: (state) => ({
            ...state,
            id: '',
            password: '',
            loginSuccess: null
        }),
        [LOGIN_SUCCESS]: (state) => ({
            ...state,
            loginSuccess: true
        })
    },
    initialState
);

export default user;