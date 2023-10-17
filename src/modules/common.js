import { createAction, handleActions } from 'redux-actions';
import { select, delay, put, takeLatest } from 'redux-saga/effects';

const CHANGE_SHOW_PASSWORD = 'common/CHANGE_SHOW_PASSWORD';
const SHOW_SNACKBAR = 'common/SHOW_SNACKBAR';
const UNSHOW_SNACKBAR = 'common/UNSHOW_SNACKBAR';
const CLEAR_ERROR_MESSAGE = 'common/CLEAR_ERROR_MESSAGE';

export const changeShowPassword = createAction(CHANGE_SHOW_PASSWORD);
export const showSnackbar = createAction(SHOW_SNACKBAR, errorMessage => errorMessage);
export const unshowSnackbar = createAction(UNSHOW_SNACKBAR);
export const clearErrorMessage = createAction(CLEAR_ERROR_MESSAGE);

const initialState = {
    showPassword: false,
    showSnackbar: false,
    
    errorMessage: null
};

function* unshowSnackbarSaga() {
    yield delay(100);
    yield put(clearErrorMessage());
}

export function* commonSaga() {
    yield takeLatest(UNSHOW_SNACKBAR, unshowSnackbarSaga);
}

const common = handleActions(
    {
        [CHANGE_SHOW_PASSWORD]: (state) => ({
            ...state,
            showPassword: !state.showPassword
        }),
        [SHOW_SNACKBAR]: (state, { payload: errorMessage }) => ({
            ...state,
            showSnackbar: true,
            errorMessage: errorMessage
        }),
        [UNSHOW_SNACKBAR]: (state) => ({
            ...state,
            showSnackbar: false
        }),
        [CLEAR_ERROR_MESSAGE]: (state) => ({
            ...state,
            errorMessage: null
        })
    },
    initialState
);

export default common;