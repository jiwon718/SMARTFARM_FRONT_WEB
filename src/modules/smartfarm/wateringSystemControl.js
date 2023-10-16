import { createAction, handleActions } from 'redux-actions';

const CHANGE_WORK = 'wateringSystemControl/CHANGE_WORK';
const CHANGE_AUTOWORK = 'wateringSystemControl/CHANGE_AUTOWORK';
const CHANGE_AUTOWORK_PERIOD = 'wateringSystemControl/CHANGE_AUTOWORK_PERIOD';
const CHANGE_AUTOWORK_PERIOD_UNIT = 'wateringSystemControl/CHANGE_AUTOWORK_PERIOD_UNIT';
const CHANGE_AUTOWORK_TIME = 'wateringSystemControl/CHANGE_AUTOWORK_TIME';
const CHANGE_AUTOWORK_TIME_UNIT = 'wateringSystemControl/CHANGE_AUTOWORK_TIME_UNIT';
const CHANGE_REMOTE_CONTROL = 'wateringSystemControl/CHANGE_REMOTE_CONTROL';

export const changeWork = createAction(CHANGE_WORK);
export const changeAutoWork = createAction(CHANGE_AUTOWORK);
export const changeAutoWorkPeriod = createAction(CHANGE_AUTOWORK_PERIOD, autoWorkPeriod => autoWorkPeriod);
export const changeAutoWorkPeriodUnit = createAction(CHANGE_AUTOWORK_PERIOD_UNIT, autoWorkPeriodUnit => autoWorkPeriodUnit);
export const changeAutoWorkTime = createAction(CHANGE_AUTOWORK_TIME, autoWorkTime => autoWorkTime);
export const changeAutoWorkTimeUnit = createAction(CHANGE_AUTOWORK_TIME_UNIT, autoWorkTimeUnit => autoWorkTimeUnit);
export const changeRemoteControl = createAction(CHANGE_REMOTE_CONTROL, remoteControl => remoteControl);

const monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const weekNumbers = [1, 2, 3];
const dayNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29
];
const hourNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24
]

const initialState = {
    work: false,
    autoWork: false,
    autoWorkPeriod: 1,
    autoWorkPeriodUnit: '시간',
    autoWorkTime: 1,
    autoWorkTimeUnit: '분',
    status: '원격 제어 모드가 아니에요',

    workButtonText: '물 주기',
    autoWorkPeriodNumber: hourNumbers,
    getError: 'null',
    postError: 'null'
};

const wateringSystemControl = handleActions(
    {
        [CHANGE_WORK]: (state) => ({
            ...state,
            work: !state.work,
            status: state.work === true ? '관수 시스템이 작동하고 있지 않아요' : '관수 시스템이 작동하고 있어요',
            workButtonText: state.work === true ? '물 주기' : '중단하기'
        }),
        [CHANGE_AUTOWORK]: (state, { payload: autoWork}) => ({
            ...state,
            work: false,
            autoWork: autoWork,
            status: state.autoWork === true ? '관수 시스템이 작동하고 있지 않아요' : `관수 시스템이 자동으로 ${state.autoWorkPeriod}${state.autoWorkPeriodUnit} 마다 ${state.autoWorkTime}${state.autoWorkTimeUnit} 동안 물을 뿌려요`,
            workButtonText: '물 주기'
        }),
        [CHANGE_AUTOWORK_PERIOD]: (state, { payload: autoWorkPeriod }) => ({
            ...state,
            autoWorkPeriod: autoWorkPeriod,
            status: `관수 시스템이 자동으로 ${autoWorkPeriod}${state.autoWorkPeriodUnit} 마다 ${state.autoWorkTime}${state.autoWorkTimeUnit} 동안 물을 뿌려요`
        }),
        [CHANGE_AUTOWORK_PERIOD_UNIT]: (state, { payload: autoWorkPeriodUnit }) => ({
            ...state,
            autoWorkPeriod: 1,
            autoWorkPeriodUnit: autoWorkPeriodUnit,
            status: `관수 시스템이 자동으로 ${state.autoWorkPeriod}${autoWorkPeriodUnit} 마다 ${state.autoWorkTime}${state.autoWorkTimeUnit} 동안 물을 뿌려요`,
            autoWorkPeriodNumber: autoWorkPeriodUnit === '개월'
            ? monthNumbers
            : autoWorkPeriodUnit === '주'
            ? weekNumbers
            : autoWorkPeriodUnit === '일'
            ? dayNumbers
            : hourNumbers
        }),
        [CHANGE_AUTOWORK_TIME]: (state, { payload: autoWorkTime }) => ({
            ...state,
            autoWorkTime: autoWorkTime,
            status: `관수 시스템이 자동으로 ${state.autoWorkPeriod}${state.autoWorkPeriodUnit} 마다 ${autoWorkTime}${state.autoWorkTimeUnit} 동안 물을 뿌려요`
        }),
        [CHANGE_AUTOWORK_TIME_UNIT]: (state, { payload: autoWorkTimeUnit }) => ({
            ...state,
            autoWorkTimeUnit: autoWorkTimeUnit,
            status: `관수 시스템이 자동으로 ${state.autoWorkPeriod}${state.autoWorkPeriodUnit} 마다 ${state.autoWorkTime}${autoWorkTimeUnit} 동안 물을 뿌려요`
        }),
        [CHANGE_REMOTE_CONTROL]: (state, { payload: remoteControl }) => ({
            ...state,
            work: false,
            autoWork: false,
            autoWorkPeriod: 1,
            autoWorkPeriodUnit: '시간',
            autoWorkTime: 1,
            autoWorkTImeUnit: '분',
            status: remoteControl ? '관수 시스템이 작동하고 있지 않아요' : '원격 제어 모드가 아니에요',
            workButtonText: '물 주기'
        })
    },
    initialState
);

export default wateringSystemControl;