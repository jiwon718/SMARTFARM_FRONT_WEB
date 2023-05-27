import { combineReducers } from 'redux';
import common from './common';
import ledControl from './smartfarm/ledControl';
import fanControl from './smartfarm/fanControl';

const rootReducer = combineReducers({
    common,
    ledControl,
    fanControl
});

export default rootReducer;