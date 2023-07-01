// 스마트팜 등록번호 확인 후 등록 가능 여부(success) 바꾸기
// DB에서 스마트팜 내부 환경 정보 가지고 와서 데이터 전처리하기(GET_SMARTFARM_SUCCESS)

import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../../lib/api/createRequestSaga';
import { getSmartfarmData } from '../../lib/api/webApi';

const [GET_SMARTFARM, GET_SMARTFARM_SUCCESS, GET_SMARTFARM_FAILURE] = createRequestActionTypes('smartfarm/GET_SMARTFARM');
const CHANGE_SMARTFARM_NUMBER = 'smartfarm/CHANGE_SMARTFARM_NUMBER';
const CHANGE_SUCCESS = 'smartfarm/CHANGE_SUCCESS';

export const getSmartfarm = createAction(GET_SMARTFARM);
export const changeSmartfarmNumber = createAction(CHANGE_SMARTFARM_NUMBER, smartfarmNumber => smartfarmNumber);
export const changeSuccess = createAction(CHANGE_SUCCESS);

const getSmartfarmSaga = createRequestSaga(GET_SMARTFARM, getSmartfarmData);

export function* smartfarmSaga() {
    yield takeLatest(GET_SMARTFARM, getSmartfarmSaga);
};

const initialState = {
    smartfarmNumber: '',
    registerSuccess: false,
    temperature: 0,
    humidity: 0,

    getError: 'null'
};

const smartfarm = handleActions(
    {
        [GET_SMARTFARM_SUCCESS]: (state, { payload }) => ({
            /* 받아온 스마트팜 내부 환경 정보를 상태에 대입 */
            ...state,
            getError: false
        }),
        [GET_SMARTFARM_FAILURE]: (state) => ({
            ...state,
            getError: true
        }),
        [CHANGE_SMARTFARM_NUMBER]: (state, { payload: smartfarmNumber }) => ({
            ...state,
            smartfarmNumber: smartfarmNumber
        }),
        [CHANGE_SUCCESS]: (state, action) => ({
            ...state,
            success: true
        })
    },
    initialState
);

export default smartfarm;