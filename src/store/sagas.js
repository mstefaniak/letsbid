import { put, takeLatest, all, fork } from 'redux-saga/effects';
import apiData from '../apiData';

import {
    setMerchants,
    LOAD_MERCHANTS,
    ADD_MERCHANT,
    addMerchantSucceeded,
    REMOVE_MERCHANT,
    removeMerchantSucceeded,
    UPDATE_MERCHANT,
    updateMerchantSucceeded,
} from './actions';


function* loadMerchants() {
    try {
        const response = yield apiData('merchants');
        yield put(setMerchants(response));
    } catch (e) {
        console.error(e);
    }
    return true;
}
function* sagaLoadMerchants() {
    yield takeLatest(LOAD_MERCHANTS, loadMerchants);
}

function* addMerchant(action) {
    try {
        const response = yield apiData('merchant', 'POST', action.data);
        if (response.status === true) {
            yield put(addMerchantSucceeded(action.data));
        } else {
            throw new Error('Merchant add failed');
        }
    } catch (e) {
        console.error(e);
    }
    return true;
}
function* sagaAddMerchant() {
    yield takeLatest(ADD_MERCHANT, addMerchant);
}


function* removeMerchant(action) {
    try {
        const response = yield apiData('merchant', 'DELETE', { id: action.id });
        if (response.status === true) {
            yield put(removeMerchantSucceeded(action.id));
        } else {
            throw new Error('Merchant remove failed');
        }
    } catch (e) {
        console.error(e);
    }
    return true;
}
function* sagaRemoveMerchant() {
    yield takeLatest(REMOVE_MERCHANT, removeMerchant);
}


function* updateMerchant(action) {
    try {
        const response = yield apiData('merchant', 'PUT', { id: action.id, data: action.data });
        if (response.status === true) {
            yield put(updateMerchantSucceeded(action.id, action.data));
        } else {
            throw new Error('Merchant update failed');
        }
    } catch (e) {
        yield put(updateMerchantSucceeded(action.id, action.data));
        // TODO
    }
    return true;
}
function* sagaUpdateMerchant() {
    yield takeLatest(UPDATE_MERCHANT, updateMerchant);
}

export default function* mainSaga() {
    yield all([
        fork(sagaLoadMerchants),
        fork(sagaAddMerchant),
        fork(sagaRemoveMerchant),
        fork(sagaUpdateMerchant),
    ]);
};
