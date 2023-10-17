import { createAction, handleActions } from 'redux-actions';
import { put, select, takeLatest } from 'redux-saga/effects';
import { useNavigate } from 'react-router-dom';
import createRequestSaga, { createRequestActionTypes } from '../../lib/api/createRequestSaga';
import * as WebAPI from '../../lib/api/webApi';
import { showSnackbar } from '../common';

const CHANGE_ID = 'user/CHANGE_ID';
const CHANGE_PASSWORD = 'user/CHANGE_PASSWORD';
const CHANGE_PASSWORD_CHECK = 'user/CHANGE_PASSWORD_CHECK';
const CHANGE_NAME = 'user/CHANGE_NAME';
const CHANGE_PHONE_NUMBER = 'user/CHANGE_PHONE_NUMBER';
const CHANGE_LOGOUT = 'user/CHANGE_LOGOUT';
const SIGNUP_INITIALIZE = 'user/SIGNUP_INITIALIZE';
const LOGIN_INITIALIZE = 'user/LOGIN_INITIALIZE';
const [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE] = createRequestActionTypes('user/SIGNUP');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('user/LOGIN');

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

function* SignupSuccessSaga() {
    const navigate = useNavigate();

    yield put(signupInitialize());
    navigate(process.env.REACT_APP_SIGNUP_SUCCESS_PATH);
}

function* signupFailureSaga() {
    const signupError = yield select(state => state.user.signupError);

    yield put(showSnackbar(signupError));
}

function* LoginSuccessSaga() {
    const navigate = useNavigate();

    yield put(loginInitialize());
    navigate(process.env.REACT_APP_HOME_PATH);
}

function* loginFailureSaga() {
    const loginError = yield select(state => state.user.loginError);

    yield put(showSnackbar(loginError));
}

export function* userSaga() {
    yield takeLatest(SIGNUP, signupSaga);
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(SIGNUP_SUCCESS, SignupSuccessSaga);
    yield takeLatest(SIGNUP_FAILURE, signupFailureSaga);
    yield takeLatest(LOGIN_SUCCESS, LoginSuccessSaga);
    yield takeLatest(LOGIN_FAILURE, loginFailureSaga);
}

const initialState = {
    sessionId: null,
    id: '',
    password: '',
    passwordCheck: '',
    name: '',
    phoneNumber: '',

    signupError: null,
    loginError: null
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
            signupError: null
        }),
        [SIGNUP_SUCCESS]: (state) => ({
            ...state,
            signupError: false
        }),
        [SIGNUP_FAILURE]: (state, { payload: error }) => ({
            ...state,
            signupError: error.code === 'ERR_NETWORK' ? '잠시 후 시도해주세요' : error.response.data
        }),
        [LOGIN_INITIALIZE]: (state) => ({
            ...state,
            id: '',
            password: '',
            loginError: null
        }),
        [LOGIN_SUCCESS]: (state) => ({
            ...state,
            loginError: false
        }),
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            loginError: error.code === 'ERR_NETWORK' ? '잠시 후 시도해주세요' : error.response.data
        })
    },
    initialState
);

export default user;