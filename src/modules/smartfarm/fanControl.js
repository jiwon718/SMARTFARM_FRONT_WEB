import { createAction, handleActions } from 'redux-actions';
import dayjs from 'dayjs';

const CHANGE_WORK = 'fanControl/CHANGE_WORK';
const CHANGE_AUTOWORK = 'fanControl/CHANGE_AUTOWORK';
const CHANGE_AUTOWORK_START_TIME = 'fanControl/CHANGE_AUTOWORK_START_TIME';
const CHANGE_AUTOWORK_END_TIME = 'fanControl/CHANGE_AUTOWORK_END_TIME';
const CHANGE_REMOTE_CONTROL = 'fanControl/CHANGE_REMOTE_CONTROL';

export const changeWork = createAction(CHANGE_WORK);
export const changeAutoWork = createAction(CHANGE_AUTOWORK, autoWork => autoWork);
export const changeAutoWorkStartTime = createAction(CHANGE_AUTOWORK_START_TIME, startTime => startTime);
export const changeAutoWorkEndTime = createAction(CHANGE_AUTOWORK_END_TIME, endTime => endTime);
export const changeRemoteControl = createAction(CHANGE_REMOTE_CONTROL, remoteControl => remoteControl);

const initialState = {
    work: false,
    autoWork: false,
    autoWorkStartTime: dayjs(),
    autoWorkEndTime: dayjs(),
    status: '원격 제어 모드가 아니에요',

    workButtonText: '작동하기',
    getError: 'null',
    postError: 'null'
};

const fanControl = handleActions(
    {
        [CHANGE_WORK]: (state) => ({
            ...state,
            work: !state.work,
            status: state.work === true ? '환기팬이 작동하고 있지 않아요' : '환기팬이 작동하고 있어요',
            workButtonText: state.work === true ? '작동하기' : '중단하기'
        }),
        [CHANGE_AUTOWORK]: (state, { payload: autoWork }) => ({
            ...state,
            work: false,
            autoWork: autoWork,
            status: state.autoWork === true ? '환기팬이 작동하고 있지 않아요' : `${state.autoWorkPeriod}${state.autoWorkPeriodUnit} 이후에 ${state.autoWorkTime}${state.autoWorkTimeUnit} 동안 작동해요`,
            workButtonText: '작동하기'
        }),
        [CHANGE_AUTOWORK_START_TIME]: (state, { payload: startTime }) => ({
            ...state,
            autoWorkStartTime: startTime,
            status: `환기팬이 자동으로 ${startTime.format('A hh:mm')}에 작동하고, ${state.autoWorkEndTime.format('A hh:mm')}에 중단해요`
        }),
        [CHANGE_AUTOWORK_END_TIME]: (state, { payload: endTime }) => ({
            ...state,
            autoWorkEndTime: endTime,
            status: `환기팬이 자동으로 ${state.autoWorkStartTime.format('A hh:mm')}에 작동하고, ${endTime.format('A hh:mm')}에 중단해요`
        }),
        [CHANGE_REMOTE_CONTROL]: (state, { payload: remoteControl }) => ({
            ...state,
            work: false,
            autoWork: false,
            status: remoteControl ? '환기팬이 작동하고 있지 않아요' : '원격 제어 모드가 아니에요',
            workButtonText: '작동하기'
        })    
    },
    initialState
);

export default fanControl;