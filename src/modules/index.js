import { combineReducers } from 'redux';
import common from './common';
import smartfarm from './smartfarm/smartfarm';
import plant from './smartfarm/plant';
import ledControl from './smartfarm/ledControl';
import wateringSystemControl from './smartfarm/wateringSystemControl';
import fanControl from './smartfarm/fanControl';

const rootReducer = combineReducers({
    common,
    smartfarm,
    plant,
    ledControl,
    wateringSystemControl,
    fanControl
});

export default rootReducer;