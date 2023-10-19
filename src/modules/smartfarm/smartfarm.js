import { createAction, handleActions } from 'redux-actions';
import { select, put, takeLatest } from 'redux-saga/effects';
import createControlRequestSaga, { createControlRequesActionTypes } from '../../lib/api/createControlRequestSaga';
import createRequestSaga, { createRequestActionTypes } from '../../lib/api/createRequestSaga';
import { changeRemoteControl as changeLedRemoteControl } from './ledControl';
import { changeRemoteControl as changeWateringSystemRemoteControl } from './wateringSystemControl';
import { changeRemoteControl as changeFanRemoteControl } from './fanControl';
import { changeRemoteControl as changeCenterDoorRemoteControl } from './centerDoorControl';
import * as WebAPI from '../../lib/api/webApi';
import { initailizeSaga } from '../common';

const CHANGE_EXIST = 'smartfarm/CHANGE_EXIST';
const CHANGE_SMARTFARM_NUMBER = 'smartfarm/CHANGE_SMARTFARM_NUMBER';
const [CHANGE_REMOTE_CONTROL, CHANGE_REMOTE_CONTROL_SUCCESS] = createControlRequesActionTypes('smartfarm/CHANGE_REMOTE_CONTROL');
const REGISTER_SMARTFARM_INITIALIZE = 'smartfarm/REGISTER_SMARTFARM_INITIALIZE';
const [CHECK_SMARTFARM_NUMBER, CHECK_SMARTFARM_NUMBER_SUCCESS] = createRequestActionTypes('smartfarm/CHECK_SMARTFARM_NUMBER');
const [REGISTER_SMARTFARM, REGISTER_SMARTFARM_SUCCESS] = createRequestActionTypes('smartfarm/REGISTER_SMARTFARM');

export const changeExist = createAction(CHANGE_EXIST);
export const changeSmartfarmNumber = createAction(CHANGE_SMARTFARM_NUMBER, smartfarmNumber => smartfarmNumber);
export const changeRemoteControl = createAction(CHANGE_REMOTE_CONTROL);
export const registerSmartfarmInitialize = createAction(REGISTER_SMARTFARM_INITIALIZE);
export const checkSmartfarmNumber = createAction(CHECK_SMARTFARM_NUMBER);
export const registerSmartfarm = createAction(REGISTER_SMARTFARM);

const changeRemoteControlSaga = createControlRequestSaga(CHANGE_REMOTE_CONTROL, WebAPI.remoteControl, 'remoteControl');
const checkSmartfarmNumberSaga = createRequestSaga(CHECK_SMARTFARM_NUMBER, WebAPI.checkSmartfarmNumber);
const registerSmartfarmSaga = createRequestSaga(REGISTER_SMARTFARM, WebAPI.registerSmartfarm);

function* changeRemoteControlSuccessSaga() {
    const remoteControl = yield select(state => state.smartfarm.remoteControl);
    
    yield put(changeLedRemoteControl(remoteControl));
    yield put(changeWateringSystemRemoteControl(remoteControl));
    yield put(changeFanRemoteControl(remoteControl));
    yield put(changeCenterDoorRemoteControl(remoteControl));
}

export function* smartfarmSaga() {
    yield takeLatest(REGISTER_SMARTFARM_INITIALIZE, initailizeSaga);
    yield takeLatest(CHECK_SMARTFARM_NUMBER, checkSmartfarmNumberSaga);
    yield takeLatest(REGISTER_SMARTFARM, registerSmartfarmSaga);
    yield takeLatest(CHANGE_REMOTE_CONTROL, changeRemoteControlSaga);
    yield takeLatest(CHANGE_REMOTE_CONTROL_SUCCESS, changeRemoteControlSuccessSaga);
}

const initialState = {
    exist: null,

    smartfarmNumber: '',
    remoteControl: false,
    temperature: 0,
    humidity: 0,

    checkSmartfarmNumberSuccess: null,
    registerSmartfarmSuccess: null
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
        [CHANGE_REMOTE_CONTROL_SUCCESS]: (state, { payload: remoteControl }) => ({
            ...state,
            remoteControl: remoteControl
        }),
        [REGISTER_SMARTFARM_INITIALIZE]: (state) => ({
            ...state,
            smartfarmNumber: '',
            checkSmartfarmNumberSuccess: null,
            registerSmartfarmSuccess: null
        }),
        [CHECK_SMARTFARM_NUMBER_SUCCESS]: (state) => ({
            ...state,
            checkSmartfarmNumberSuccess: true
        }),
        [REGISTER_SMARTFARM_SUCCESS]: (state) => ({
            ...state,
            registerSmartfarmSuccess: true
        })
    },
    initialState
);

export default smartfarm;