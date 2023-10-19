// 작물 생장 상태와 관련된 상태 관리 추가하기

import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../../lib/api/createRequestSaga';
import * as WebAPI from '../../lib/api/webApi';
import { initailizeSaga } from '../common';

const CHANGE_EXIST = 'plant/CHANGE_EXIST';
const CHANGE_NAME = 'plant/CHANGE_NAME';
const CHANGE_DAY = 'plant/CHANGE_DAY';
const REGISTER_PLANT_INITIALIZE = 'plant/REGISTER_PLANT_INITIALIZE';
const [REGISTER_PLANT, REGISTER_PLANT_SUCCESS] = createRequestActionTypes('plant/REGISTER_PLANT');

export const changeExist = createAction(CHANGE_EXIST);
export const changeName = createAction(CHANGE_NAME, name => name);
export const changeDay = createAction(CHANGE_DAY, day => day);
export const registerPlantInitialize = createAction(REGISTER_PLANT_INITIALIZE);
export const registerPlant = createAction(REGISTER_PLANT);

const registerPlantSaga = createRequestSaga(REGISTER_PLANT, WebAPI.registerPlant);

export function* plantSaga() {
    yield takeLatest(REGISTER_PLANT, registerPlantSaga);
    yield takeLatest(REGISTER_PLANT_INITIALIZE, initailizeSaga);
}

const initialState = {
    exist: null,

    name: '',
    day: 0,

    registerPlantSuccess: null
};

const plant = handleActions(
    {
        [CHANGE_EXIST]: (state) => ({
            ...state,
            exist: !state.exist
        }),
        [CHANGE_NAME]: (state, { payload: name }) => ({
            ...state,
            name: name
        }),
        [CHANGE_DAY]: (state, { payload: day }) => ({
            ...state,
            day: day
        }),
        [REGISTER_PLANT_INITIALIZE]: (state) => ({
            ...state,
            name: '',
            day: 0,
            registerPlantSuccess: null
        }),
        [REGISTER_PLANT_SUCCESS]: (state) => ({
            ...state,
            registerPlantSuccess: true
        })
    },
    initialState
);

export default plant;