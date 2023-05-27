import { combineReducers } from 'redux';
import common from './common';
import ledControl from './smartfarm/ledControl';
import wateringSystemControl from './smartfarm/wateringSystemControl';
import fanControl from './smartfarm/fanControl';

const rootReducer = combineReducers({
    common,
    ledControl,
    wateringSystemControl,
    fanControl
});

export default rootReducer;