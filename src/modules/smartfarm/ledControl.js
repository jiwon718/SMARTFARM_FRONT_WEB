import { createAction, handleActions } from 'redux-actions';
import dayjs from 'dayjs';

const CHANGE_WORK = 'ledControl/CHANGE_WORK';
const CHANGE_AUTOWORK = 'ledControl/CHANGE_AUTOWORK';
const CHANGE_AUTOWORK_START_TIME = 'ledControl/CHANGE_AUTOWORK_START_TIME';
const CHANGE_AUTOWORK_END_TIME = 'ledControl/CHANGE_AUTOWORK_END_TIME';
const CHANGE_REMOTE_CONTROL = 'ledControl/CHANGE_REMOTE_CONTROL';

export const changeWork = createAction(CHANGE_WORK);
export const changeAutoWork = createAction(CHANGE_AUTOWORK, autoWork => autoWork);
export const changeAutoWorkStartTime = createAction(CHANGE_AUTOWORK_START_TIME, startTime => startTime);
export const changeAutoWorkEndTime = createAction(CHANGE_AUTOWORK_END_TIME);
export const changeRemoteControl = createAction(CHANGE_REMOTE_CONTROL, remoteControl => remoteControl);

const initialState = {
    work: false,
    autoWork: false,
    autoWorkStartTime: dayjs(),
    autoWorkEndTime: dayjs(),
    status: '원격 제어 모드가 아니에요',

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
            work: false,
            autoWork: autoWork,
            status: !state.autoWork ? `LED가 자동으로 ${state.autoWorkStartTime.format('A hh:mm')}에 켜지고, ${state.autoWorkEndTime.format('A hh:mm')}에 꺼져요` : 'LED가 켜져 있지 않아요',
            workButtonText: '켜기'
        }),
        [CHANGE_AUTOWORK_START_TIME]: (state, { payload: startTime}) => ({
            ...state,
            autoWorkStartTime: startTime,
            status: `LED가 자동으로 ${startTime.format('A hh:mm')}에 켜지고, ${state.autoWorkEndTime.format('A hh:mm')}에 꺼져요`
        }),
        [CHANGE_AUTOWORK_END_TIME]: (state, { payload: endTime}) => ({
            ...state,
            autoWorkEndTime: endTime,
            status: `LED가 자동으로 ${state.autoWorkStartTime.format('A hh:mm')}에 켜지고, ${endTime.format('A hh:mm')}에 꺼져요`
        }),
        [CHANGE_REMOTE_CONTROL]: (state, { payload: remoteControl }) => ({
            ...state,
            work: false,
            autoWork: false,
            status: remoteControl ? 'LED가 꺼져 있어요' : '원격 제어 모드가 아니에요',
            workButtonText: '켜기'
        })
    },
    initialState
);

export default ledControl;