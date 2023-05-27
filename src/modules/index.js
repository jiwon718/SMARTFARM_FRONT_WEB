import { combineReducers } from 'redux';
import common from './common';
import ledControl from './smartfarm/ledControl';

const rootReducer = combineReducers({
    common,
    ledControl
});

export default rootReducer;