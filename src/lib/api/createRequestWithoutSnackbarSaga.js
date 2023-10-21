import { call, put } from 'redux-saga/effects';
import { createRequestActionTypes } from './createRequestSaga';
import { startLoading, finishLoading } from '../../modules/loading';
import { CHECK } from '../../modules/user/user';

export const createRequesWithoutSnackbarActionTypes = type => {
    return createRequestActionTypes(type);
}

export default function createRequestWithoutSnackbarSaga(type, request) {
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

            if (type === CHECK) {
                try {
                    localStorage.removeItem('token');
                } catch (e) {
                    console.log('localStorage is not working');
                }
            }
        }

        yield put(finishLoading(type));
    }
}