// 스마트팜 등록번호 확인 후 등록 가능 여부(success) 바꾸기

import { createAction, handleActions } from 'redux-actions';

const CHANGE_SMARTFARM_NUMBER = 'smartfarm/CHANGE_SMARTFARM_NUMBER';
const CHANGE_SUCCESS = 'smartfarm/CHANGE_SUCCESS';

export const changeSmartfarmNumber = createAction(CHANGE_SMARTFARM_NUMBER, smartfarmNumber => smartfarmNumber);
export const changeSuccess = createAction(CHANGE_SUCCESS);

const initialState = {
    smartfarmNumber: '',
    success: false
};

const smartfarm = handleActions(
    {
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