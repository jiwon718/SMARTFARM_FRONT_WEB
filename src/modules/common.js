import { createAction, handleActions } from 'redux-actions';

const CHANGE_SHOW_PASSWORD = 'common/CHANGE_SHOW_PASSWORD';

export const changeShowPassword = createAction(CHANGE_SHOW_PASSWORD);

const initialState = {
    showPassword: false
};

const common = handleActions(
    {
        [CHANGE_SHOW_PASSWORD]: (state, action) => ({ showPassword: !state.showPassword })
    },
    initialState
);

export default common;