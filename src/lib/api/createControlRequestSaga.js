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

        const datas = yield select(state => state[type.split('/', 1)[0]]);

        try {
            // throw "예외 발생";

            yield call(request, {
                ...datas,
                [key]: action.payload !== undefined ? action.payload : !datas[key]
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
            yield put(showSnackbar(e.response?.data !== undefined && typeof(e.response.data) === 'string' ? e.response.data : '잠시 후 시도해주세요'));
        }

        yield put(finishLoading(type));
    }
}