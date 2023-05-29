import { createAction, handleActions } from 'redux-actions';

const CHANGE_ID = 'user/CHANGE_ID';
const CHANGE_PASSWORD = 'user/CHANGE_PASSWORD';

export const changeId = createAction(CHANGE_ID, id => id);
export const changePassword = createAction(CHANGE_PASSWORD, password => password);

const initialState = {
    id: '',
    password: ''
};

const user = handleActions(
    {
        [CHANGE_ID]: (state, { payload: id }) => ({
            ...state,
            id: id
        }),
        [CHANGE_PASSWORD]: (state, { payload: password }) => ({
            ...state,
            password: password
        })
    },
    initialState
);

export default user;