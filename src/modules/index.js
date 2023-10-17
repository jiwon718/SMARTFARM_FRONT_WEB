import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import common, { commonSaga } from './common';
import loading from './loading';
import user, { userSaga } from './user/user';
import smartfarm, { smartfarmSaga } from './smartfarm/smartfarm';
import plant from './smartfarm/plant';
import ledControl from './smartfarm/ledControl';
import wateringSystemControl, { wateringSystemControlSaga } from './smartfarm/wateringSystemControl';
import fanControl from './smartfarm/fanControl';
import centerDoorControl from './smartfarm/centerDoorControl';
import settingAlarm from './setting/settingAlarm';

const rootReducer = combineReducers({
    common,
    loading,
    user,
    smartfarm,
    plant,
    ledControl,
    wateringSystemControl,
    fanControl,
    centerDoorControl,
    settingAlarm
});

export function* rootSaga() {
    yield all([commonSaga(), userSaga(), smartfarmSaga(), wateringSystemControlSaga()]);
}

export default rootReducer;