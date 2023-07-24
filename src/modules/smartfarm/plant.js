// 작물 품종(cultivar) 상태 관리 추가하기
// 작물 생장 상태와 관련된 상태 관리 추가하기

import { createAction, handleActions } from 'redux-actions';

const CHANGE_NAME = 'plant/CHANGE_NAME';
// const CHANGE_CULTIVAR = 'plant/CHANGE_CULTIVAR';
const CHANGE_DAY = 'plant/CHANGE_DAY';

export const changeName = createAction(CHANGE_NAME, name => name);
export const changeDay = createAction(CHANGE_DAY, day => day);

const initialState = {
    name: '',
    cultivar: '',
    day: 0
};

const plant = handleActions(
    {
        [CHANGE_NAME]: (state, { payload: name }) => ({
            ...state,
            name: name
        }),
        [CHANGE_DAY]: (state, { payload: day }) => ({
            ...state,
            day: day
        })
    },
    initialState
);

export default plant;