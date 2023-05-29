import { combineReducers } from 'redux';
import common from './common';
import user from './user/user';
import smartfarm from './smartfarm/smartfarm';
import plant from './smartfarm/plant';
import ledControl from './smartfarm/ledControl';
import wateringSystemControl from './smartfarm/wateringSystemControl';
import fanControl from './smartfarm/fanControl';

const rootReducer = combineReducers({
    common,
    user,
    smartfarm,
    plant,
    ledControl,
    wateringSystemControl,
    fanControl
});

export default rootReducer;