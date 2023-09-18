// 스마트팜 등록번호 확인 후 등록 가능 여부(success) 바꾸기

import { createAction, handleActions } from 'redux-actions';

const CHANGE_EXIST = 'smartfarm/CHANGE_EXIST';
const CHANGE_SMARTFARM_NUMBER = 'smartfarm/CHANGE_SMARTFARM_NUMBER';
const CHANGE_SUCCESS = 'smartfarm/CHANGE_SUCCESS';
const CHANGE_REMOTE_CONTROL = 'smartfarm/CHANGE_REMOTE_CONTROL';

export const changeExist = createAction(CHANGE_EXIST);
export const changeSmartfarmNumber = createAction(CHANGE_SMARTFARM_NUMBER, smartfarmNumber => smartfarmNumber);
export const changeSuccess = createAction(CHANGE_SUCCESS);
export const changeRemoteControl = createAction(CHANGE_REMOTE_CONTROL);

const initialState = {
    exist: true,

    smartfarmNumber: '',
    registerSuccess: false,
    remoteControl: false,
    temperature: 0,
    humidity: 0,

    getError: 'null'
};

const smartfarm = handleActions(
    {
        [CHANGE_EXIST]: (state) => ({
            ...state,
            exist: !state.exist
        }),
        [CHANGE_SMARTFARM_NUMBER]: (state, { payload: smartfarmNumber }) => ({
            ...state,
            smartfarmNumber: smartfarmNumber
        }),
        [CHANGE_SUCCESS]: (state) => ({
            ...state,
            success: true
        }),
        [CHANGE_REMOTE_CONTROL]: (state, { payload: remoteControl}) => ({
            ...state,
            remoteControl: remoteControl
        })
    },
    initialState
);

export default smartfarm;