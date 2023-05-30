import { createAction, handleActions } from 'redux-actions';

const CHANGE_ID = 'user/CHANGE_ID';
const CHANGE_PASSWORD = 'user/CHANGE_PASSWORD';
const CHANGE_PASSWORD_CHECK = 'user/CHANGE_PASSWORD_CHECK';
const CHANGE_NAME = 'user/CHANGE_NAME';
const CHANGE_PHONE_NUMBER = 'user/CHANGE_PHONE_NUMBER';
const CHANGE_LOGOUT = 'user/CHANGE_LOGOUT';

export const changeId = createAction(CHANGE_ID, id => id);
export const changePassword = createAction(CHANGE_PASSWORD, password => password);
export const changePasswordCheck = createAction(CHANGE_PASSWORD_CHECK, passwordCheck => passwordCheck);
export const changeName = createAction(CHANGE_NAME, name => name);
export const changePhoneNumber = createAction(CHANGE_PHONE_NUMBER, phoneNumber => phoneNumber);
export const changeLogOut = createAction(CHANGE_LOGOUT);

const initialState = {
    id: '',
    password: '',
    passwordCheck: '',
    name: '',
    phoneNumber: ''
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
        [CHANGE_PASSWORD_CHECK]: (state, { payload: passwordCheck}) => ({
            ...state,
            passwordCheck: passwordCheck
        }),
        [CHANGE_NAME]: (state, { payload: name }) => ({
            ...state,
            name: name
        }),
        [CHANGE_PHONE_NUMBER]: (state, { payload: phoneNumber}) => ({
            ...state,
            phoneNumber: phoneNumber
        }),
        [CHANGE_LOGOUT]: () => ({
            id: '',
            password: '',
            passwordCheck: '',
            name: '',
            phoneNumber: ''
        })
    },
    initialState
);

export default user;