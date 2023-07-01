import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import common from './common';
import loading from './loading';
import user from './user/user';
import smartfarm from './smartfarm/smartfarm';
import plant from './smartfarm/plant';
import ledControl, { ledControlSaga } from './smartfarm/ledControl';
import wateringSystemControl, { wateringSystemControlSaga } from './smartfarm/wateringSystemControl';
import fanControl, { fanControlSaga } from './smartfarm/fanControl';

const rootReducer = combineReducers({
    common,
    loading,
    user,
    smartfarm,
    plant,
    ledControl,
    wateringSystemControl,
    fanControl
});

export function* rootSaga() {
    yield all([ledControlSaga(), wateringSystemControlSaga(), fanControlSaga()]);
}

export default rootReducer;