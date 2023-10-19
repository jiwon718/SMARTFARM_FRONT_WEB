import { call, put } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../../modules/loading';
import { showSnackbar } from '../../modules/common';

export const createRequestActionTypes = type => {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return [type, SUCCESS, FAILURE];
}

export default function createRequestSaga(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action) {
        yield put(startLoading(type));

        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCESS,
                payload: response.data
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true
            });
            yield put(showSnackbar(e.response?.data !== undefined && typeof(e.response.data) === 'string' ? e.response.data : '잠시 후 시도해주세요'));
        }

        yield put(finishLoading(type));
    }
}