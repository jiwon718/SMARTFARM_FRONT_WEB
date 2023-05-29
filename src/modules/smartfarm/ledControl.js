// DB에서 LED 관련 정보 가지고 와서 초기화하기(useEffect)

import { createAction, handleActions } from 'redux-actions';
import dayjs from 'dayjs';

const CHANGE_POWER = 'ledControl/CHANGE_POWER';
const CHANGE_WORK = 'ledControl/CHANGE_WORK';
const CHANGE_LEVEL = 'ledControl/CHANGE_LEVEL';
const CHANGE_AUTOWORK = 'ledControl/CHANGE_AUTOWORK';
const CHANGE_AUTOWORK_START_TIME = 'ledControl/CHANGE_AUTOWORK_START_TIME';
const CHANGE_AUTOWORK_END_TIME = 'ledControl/CHANGE_AUTOWORK_END_TIME';

export const changePower = createAction(CHANGE_POWER);
export const changeWork = createAction(CHANGE_WORK);
export const changeLevel = createAction(CHANGE_LEVEL, level => level);
export const changeAutoWork = createAction(CHANGE_AUTOWORK);
export const changeAutoWorkStartTime = createAction(CHANGE_AUTOWORK_START_TIME);
export const changeAutoWorkEndTime = createAction(CHANGE_AUTOWORK_END_TIME);

const initialState = {
    power: true,
    work: false,
    lightLevel: 1,
    autoWork: false,
    autoWorkStartTime: dayjs(),
    autoWorkEndTime: dayjs(),
    status: 'LED가 꺼져 있어요'
};

const ledControl = handleActions(
    {
        [CHANGE_POWER]: (state, action) => ({
            ...state,
            power: !state.power,
            status: state.power === true
            ? 'LED에 전원 공급을 하고 있지 않아요'
            : ( state.work === true
                ? `현재 LED는 ${state.lightLevel}단계 밝기로 켜져 있어요`
                : 'LED가 꺼져 있어요'
            )
        }),
        [CHANGE_WORK]: (state, action) => ({
            ...state,
            work: !state.work,
            status: state.work === true ? 'LED가 꺼져 있어요' : `현재 LED는 ${state.lightLevel}단계 밝기로 켜져 있어요`
        }),
        [CHANGE_LEVEL]: (state, { payload: level }) => ({
            ...state,
            lightLevel: level,
            status: state.work === true ? `현재 LED는 ${level}단계 밝기로 켜져 있어요` : 'LED가 꺼져 있어요'
        }),
        [CHANGE_AUTOWORK]: (state, action) => ({
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