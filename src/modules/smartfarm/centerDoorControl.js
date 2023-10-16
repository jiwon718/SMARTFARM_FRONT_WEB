import { createAction, handleActions } from 'redux-actions';
import dayjs from 'dayjs';

const CHANGE_WORK = 'centerDoorControl/CHANGE_WORK';
const CHANGE_AUTOWORK = 'centerDoorControl/CHANGE_AUTOWORK';
const CHANGE_AUTOWORK_START_TIME = 'centerDoorControl/CHANGE_AUTOWORK_START_TIME';
const CHANGE_AUTOWORK_END_TIME = 'centerDoorControl/CHANGE_AUTOWORK_END_TIME';
const CHANGE_REMOTE_CONTROL = 'centerDoorControl/CHANGE_REMOTE_CONTROL';

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

    workButtonText: '문 열기',
    getError: 'null',
    postError: 'null'
};

const centerDoorControl = handleActions(
    {
        [CHANGE_WORK]: (state) => ({
            ...state,
            work: !state.work,
            status: state.work ? '중앙문이 열려 있지 않아요' : '중앙문이 열려 있어요',
            workButtonText: state.work ? '문 열기' : '문 닫기'
        }),
        [CHANGE_AUTOWORK]: (state, { payload: autoWork }) => ({
            ...state,
            work: false,
            autoWork: autoWork,
            status: !state.autoWork ? `중앙문이 자동으로 ${state.autoWorkStartTime.format('A hh:mm')}에 열고, ${state.autoWorkEndTime.format('A hh:mm')}에 닫아요` : '중앙문이 열려 있지 않아요',
            workButtonText: '문 열기'
        }),
        [CHANGE_AUTOWORK_START_TIME]: (state, { payload: startTime }) => ({
            ...state,
            autoWorkStartTime: startTime,
            status: `중앙문이 자동으로 ${startTime.format('A hh:mm')}에 열고, ${state.autoWorkEndTime.format('A hh:mm')}에 닫아요`
        }),
        [CHANGE_AUTOWORK_END_TIME]: (state, { payload: endTime }) => ({
            ...state,
            autoWorkEndTime: endTime,
            status: `중앙문이 자동으로 ${state.autoWorkStartTime.format('A hh:mm')}에 열고, ${endTime.format('A hh:mm')}에 닫아요`
        }),
        [CHANGE_REMOTE_CONTROL]: (state, { payload: remoteControl }) => ({
            ...state,
            work: false,
            autoWork: false,
            status: remoteControl ? '중앙문이 열려 있지 않아요' : '원격 제어 모드가 아니에요',
            workButtonText: '문 열기'
        })     
    },
    initialState
);

export default centerDoorControl;