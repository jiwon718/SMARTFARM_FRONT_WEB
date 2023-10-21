import { select, call, put } from 'redux-saga/effects';
import { createRequestActionTypes } from './createRequestSaga';
import { startLoading, finishLoading } from '../../modules/loading';
import { showSnackbar } from '../../modules/common';

export const createControlRequesActionTypes = type => {
    return createRequestActionTypes(type);
}

export default function createControlRequestSaga(type, request, key) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action) {
        yield put(startLoading(type));

        const token = yield select(state => state.user.token);
        const datas = yield select(state => state[type.split('/', 1)[0]]);

        try {
            yield call(request, {
                token,
                datas: {
                    ...datas,
                    [key]: action.payload !== undefined ? action.payload : !datas[key]
                }
            });
            yield put({
                type: SUCCESS,
                payload: action.payload
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            });
            yield put(showSnackbar(e.response.data?.message === undefined ? '잠시 후 시도해주세요' : e.response.data.message));
        }

        yield put(finishLoading(type));
    }
}