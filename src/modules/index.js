import { combineReducers } from 'redux';
import common from './common';
import loading from './loading';
import user from './user/user';
import smartfarm from './smartfarm/smartfarm';
import plant from './smartfarm/plant';
import ledControl from './smartfarm/ledControl';
import wateringSystemControl from './smartfarm/wateringSystemControl';
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

export default rootReducer;