import { createAction, handleActions } from 'redux-actions';
import dayjs from 'dayjs';

const CHANGE_WORK = 'ledControl/CHANGE_WORK';
const CHANGE_AUTOWORK = 'ledControl/CHANGE_AUTOWORK';
const CHANGE_AUTOWORK_START_TIME = 'ledControl/CHANGE_AUTOWORK_START_TIME';
const CHANGE_AUTOWORK_END_TIME = 'ledControl/CHANGE_AUTOWORK_END_TIME';

export const changeWork = createAction(CHANGE_WORK);
export const changeAutoWork = createAction(CHANGE_AUTOWORK, autoWork => autoWork);
export const changeAutoWorkStartTime = createAction(CHANGE_AUTOWORK_START_TIME);
export const changeAutoWorkEndTime = createAction(CHANGE_AUTOWORK_END_TIME);

const initialState = {
    work: false,
    autoWork: false,
    autoWorkStartTime: dayjs(),
    autoWorkEndTime: dayjs(),
    status: 'LED에 전원 공급을 하고 있지 않아요',

    workButtonText: '켜기',
    getError: 'null',
    postError: 'null'
};

const ledControl = handleActions(
    {
        [CHANGE_WORK]: (state) => ({
            ...state,
            work: !state.work,
            status: state.work === true ? 'LED가 꺼져 있어요' : 'LED가 켜져 있어요',
            workButtonText: state.work === true ? '켜기' : '끄기'
        }),
        [CHANGE_AUTOWORK]: (state, { payload: autoWork}) => ({
            ...state,
            autoWork: autoWork
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