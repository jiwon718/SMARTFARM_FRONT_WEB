// DB에서 관수 시스템 관련 정보 가지고 와서 초기화하기(useEffect)

import { createAction, handleActions } from 'redux-actions';

const CHANGE_POWER = 'wateringSystemControl/CHANGE_POWER';
const CHANGE_WORK = 'wateringSystemControl/CHANGE_WORK';
const CHANGE_AUTOWORK = 'wateringSystemControl/CHANGE_AUTOWORK';
const CHANGE_AUTOWORK_PERIOD = 'wateringSystemControl/CHANGE_AUTOWORK_PERIOD';
const CHANGE_AUTOWORK_PERIOD_UNIT = 'wateringSystemControl/CHANGE_AUTOWORK_PERIOD_UNIT';
const CHANGE_AUTOWORK_TIME = 'wateringSystemControl/CHANGE_AUTOWORK_TIME';
const CHANGE_AUTOWORK_TIME_UNIT = 'wateringSystemControl/CHANGE_AUTOWORK_TIME_UNIT';

export const changePower = createAction(CHANGE_POWER);
export const changeWork = createAction(CHANGE_WORK);
export const changeAutoWork = createAction(CHANGE_AUTOWORK);
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
    power: true,
    work: false,
    autoWork: false,
    autoWorkPeriod: 1,
    autoWorkPeriodUnit: '시간',
    autoWorkTime: 1,
    autoWorkTimeUnit: '분',
    status: '관수 시스템이 작동하고 있지 않아요',

    workButtonText: '물 주기',
    autoWorkPeriodNumber: hourNumbers
};

const wateringSystemControl = handleActions(
    {
        [CHANGE_POWER]: (state, action) => ({
            ...state,
            power: !state.power,
            status: state.power === true
            ? '관수 시스템에 전원 공급을 하고 있지 않아요'
            : ( state.work === true
                ? `${state.autoWorkPeriod}${state.autoWorkPeriodUnit} 이후에 ${state.autoWorkTime}${state.autoWorkTimeUnit} 동안 물을 뿌려요`
                : '관수 시스템이 작동하고 있지 않아요'
            )
        }),
        [CHANGE_WORK]: (state, action) => ({
            ...state,
            work: !state.work,
            status: state.work === true ? '관수 시스템이 작동하고 있지 않아요' : '관수 시스템이 작동하고 있어요',
            workButtonText: state.work === true ? '물 주기' : '중단하기'
        }),
        [CHANGE_AUTOWORK]: (state, action) => ({
            ...state,
            work: false,
            autoWork: !state.autoWork,
            status: state.autoWork === true ? '관수 시스템이 작동하고 있지 않아요' : `${state.autoWorkPeriod}${state.autoWorkPeriodUnit} 이후에 ${state.autoWorkTime}${state.autoWorkTimeUnit} 동안 물을 뿌려요`,
            workButtonText: '물 주기'
        }),
        [CHANGE_AUTOWORK_PERIOD]: (state, { payload: autoWorkPeriod }) => ({
            ...state,
            autoWorkPeriod: autoWorkPeriod,
            status: `${autoWorkPeriod}${state.autoWorkPeriodUnit} 이후에 ${state.autoWorkTime}${state.autoWorkTimeUnit} 동안 물을 뿌려요`
        }),
        [CHANGE_AUTOWORK_PERIOD_UNIT]: (state, { payload: autoWorkPeriodUnit }) => ({
            ...state,
            autoWorkPeriod: 1,
            autoWorkPeriodUnit: autoWorkPeriodUnit,
            status: `1${autoWorkPeriodUnit} 이후에 ${state.autoWorkTime}${state.autoWorkTimeUnit} 동안 물을 뿌려요`,
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
            status: `${state.autoWorkPeriod}${state.autoWorkPeriodUnit} 이후에 ${autoWorkTime}${state.autoWorkTimeUnit} 동안 물을 뿌려요`
        }),
        [CHANGE_AUTOWORK_TIME_UNIT]: (state, { payload: autoWorkTimeUnit }) => ({
            ...state,
            autoWorkTimeUnit: autoWorkTimeUnit,
            status: `${state.autoWorkPeriod}${state.autoWorkPeriodUnit} 이후에 ${state.autoWorkTime}${autoWorkTimeUnit} 동안 물을 뿌려요`
        })     
    },
    initialState
);

export default wateringSystemControl;