// DB에서 LED 관련 정보 가지고 와서 데이터 전처리하기(GET_LED_SUCCESS)

import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import dayjs from 'dayjs';
import createRequestSaga, { createRequestActionTypes } from '../../lib/api/createRequestSaga';
import { getLedData, postLedData } from '../../lib/api/webApi';

const [GET_LED, GET_LED_SUCCESS, GET_LED_FAILURE] = createRequestActionTypes('ledControl/GET_LED');
const [POST_LED, POST_LED_SUCCESS, POST_LED_FAILURE] = createRequestActionTypes('ledControl/POST_LED');
const CHANGE_POWER = 'ledControl/CHANGE_POWER';
const CHANGE_WORK = 'ledControl/CHANGE_WORK';
const CHANGE_LEVEL = 'ledControl/CHANGE_LEVEL';
const CHANGE_AUTOWORK = 'ledControl/CHANGE_AUTOWORK';
const CHANGE_AUTOWORK_START_TIME = 'ledControl/CHANGE_AUTOWORK_START_TIME';
const CHANGE_AUTOWORK_END_TIME = 'ledControl/CHANGE_AUTOWORK_END_TIME';

export const getLed = createAction(GET_LED);
export const postLed = createAction(POST_LED);
export const changePower = createAction(CHANGE_POWER);
export const changeWork = createAction(CHANGE_WORK);
export const changeLevel = createAction(CHANGE_LEVEL, level => level);
export const changeAutoWork = createAction(CHANGE_AUTOWORK);
export const changeAutoWorkStartTime = createAction(CHANGE_AUTOWORK_START_TIME);
export const changeAutoWorkEndTime = createAction(CHANGE_AUTOWORK_END_TIME);

const getLedSaga = createRequestSaga(GET_LED, getLedData);
const postLedSaga = createRequestSaga(POST_LED, postLedData);

export function* ledControlSaga() {
    yield takeLatest(GET_LED, getLedSaga);
    yield takeLatest(POST_LED, postLedSaga);
};

const initialState = {
    power: false,
    work: false,
    lightLevel: 1,
    autoWork: false,
    autoWorkStartTime: dayjs(),
    autoWorkEndTime: dayjs(),
    status: 'LED에 전원 공급을 하고 있지 않아요',

    getError: 'null',
    postError: 'null'
};

const ledControl = handleActions(
    {
        [GET_LED_SUCCESS]: (state, { payload }) => ({
            /* 받아온 LED 정보를 상태에 대입 */
            ...state,
            getError: false
        }),
        [GET_LED_FAILURE]: (state) => ({
            ...state,
            getError: true
        }),
        [POST_LED_SUCCESS]: (state) => ({
            ...state,
            postError: false
        }),
        [POST_LED_FAILURE]: (state) => ({
            ...state,
            postError: true
        }),
        [CHANGE_POWER]: (state) => ({
            ...state,
            power: !state.power,
            status: state.power === true
            ? 'LED에 전원 공급을 하고 있지 않아요'
            : ( state.work === true
                ? `현재 LED는 ${state.lightLevel}단계 밝기로 켜져 있어요`
                : 'LED가 꺼져 있어요'
            )
        }),
        [CHANGE_WORK]: (state) => ({
            ...state,
            work: !state.work,
            status: state.work === true ? 'LED가 꺼져 있어요' : `현재 LED는 ${state.lightLevel}단계 밝기로 켜져 있어요`
        }),
        [CHANGE_LEVEL]: (state, { payload: level }) => ({
            ...state,
            lightLevel: level,
            status: state.work === true ? `현재 LED는 ${level}단계 밝기로 켜져 있어요` : 'LED가 꺼져 있어요'
        }),
        [CHANGE_AUTOWORK]: (state) => ({
            ...state,
            autoWork: !state.autoWork
        }),
        [CHANGE_AUTOWORK_START_TIME]: (state, { payload: newStartTime}) => ({
            ...state,
            autoWorkStartTime: newStartTime
        }),
        [CHANGE_AUTOWORK_END_TIME]: (state, { payload: newEndTime}) => ({
            ...state,
            autoWorkEndTime: newEndTime
        })
    },
    initialState
);

export default ledControl;