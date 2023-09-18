import { createAction, handleActions } from 'redux-actions';

const CHANGE_WORK = 'fanControl/CHANGE_WORK';
const CHANGE_AUTOWORK = 'fanControl/CHANGE_AUTOWORK';
const CHANGE_AUTOWORK_PERIOD = 'fanControl/CHANGE_AUTOWORK_PERIOD';
const CHANGE_AUTOWORK_PERIOD_UNIT = 'fanControl/CHANGE_AUTOWORK_PERIOD_UNIT';
const CHANGE_AUTOWORK_TIME = 'fanControl/CHANGE_AUTOWORK_TIME';
const CHANGE_AUTOWORK_TIME_UNIT = 'fanControl/CHANGE_AUTOWORK_TIME_UNIT';

export const changeWork = createAction(CHANGE_WORK);
export const changeAutoWork = createAction(CHANGE_AUTOWORK, autoWork => autoWork);
export const changeAutoWorkPeriod = createAction(CHANGE_AUTOWORK_PERIOD, autoWorkPeriod => autoWorkPeriod);
export const changeAutoWorkPeriodUnit = createAction(CHANGE_AUTOWORK_PERIOD_UNIT, autoWorkPeriodUnit => autoWorkPeriodUnit);
export const changeAutoWorkTime = createAction(CHANGE_AUTOWORK_TIME, autoWorkTime => autoWorkTime);
export const changeAutoWorkTimeUnit = createAction(CHANGE_AUTOWORK_TIME_UNIT, autoWorkTimeUnit => autoWorkTimeUnit);

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
    status: '환기팬에 전원 공급을 하고 있지 않아요',

    workButtonText: '작동하기',
    autoWorkPeriodNumber: hourNumbers,
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
        [CHANGE_AUTOWORK_PERIOD]: (state, { payload: autoWorkPeriod }) => ({
            ...state,
            autoWorkPeriod: autoWorkPeriod,
            status: `${autoWorkPeriod}${state.autoWorkPeriodUnit} 이후에 ${state.autoWorkTime}${state.autoWorkTimeUnit} 동안 작동해요`
        }),
        [CHANGE_AUTOWORK_PERIOD_UNIT]: (state, { payload: autoWorkPeriodUnit }) => ({
            ...state,
            autoWorkPeriod: 1,
            autoWorkPeriodUnit: autoWorkPeriodUnit,
            status: `1${autoWorkPeriodUnit} 이후에 ${state.autoWorkTime}${state.autoWorkTimeUnit} 동안 작동해요`,
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
            status: `${state.autoWorkPeriod}${state.autoWorkPeriodUnit} 이후에 ${autoWorkTime}${state.autoWorkTimeUnit} 동안 작동해요`
        }),
        [CHANGE_AUTOWORK_TIME_UNIT]: (state, { payload: autoWorkTimeUnit }) => ({
            ...state,
            autoWorkTimeUnit: autoWorkTimeUnit,
            status: `${state.autoWorkPeriod}${state.autoWorkPeriodUnit} 이후에 ${state.autoWorkTime}${autoWorkTimeUnit} 동안 작동해요`
        })     
    },
    initialState
);

export default fanControl;