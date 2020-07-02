import { put, takeLatest, all, fork } from 'redux-saga/effects';

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
        // const response = yield fetch('merchants');
        const response = {
            1: {
                id: 1,
                firstname: 'Jane',
                lastname: 'Smith',
                email: 'jane.smith@gmail.com',
                avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
                phone: '+123123766',
                hasPremium: true,
                bids: [{
                    carTitle: 'Fiat Panda',
                    created: new Date('2020-07-01'),
                    amount: 1000,
                },
                {
                    carTitle: 'Peugeot 5008',
                    created: new Date('2020-07-02'),
                    amount: 999,
                },
                {
                    carTitle: 'Nissan Primera',
                    created: new Date('2020-06-29'),
                    amount: 1002,
                }],
            },
            2: {
                id: 2,
                firstname: 'John',
                lastname: 'Smith',
                email: 'john.smith2@gmail.com',
                avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
                phone: '+183761873',
                bids: [],
            },
        }
        yield put(setMerchants(response));
    } catch (e) {
        // TODO
    }
    return true;
}
function* sagaLoadMerchants() {
    yield takeLatest(LOAD_MERCHANTS, loadMerchants);
}

function* addMerchant(action) {
    try {
        const response = yield fetch('merchant/add', { method: 'PUT', body: JSON.stringify(action.data) });
        if (response.status === true) {
            yield put(addMerchantSucceeded(action.data));
        } else {
            throw new Error('Merchant add failed');
        }
    } catch (e) {
        yield put(addMerchantSucceeded(action.data));
        // TODO
    }
    return true;
}
function* sagaAddMerchant() {
    yield takeLatest(ADD_MERCHANT, addMerchant);
}


function* removeMerchant(action) {
    try {
        const response = yield fetch('merchant/remove', { method: 'DELETE', body: JSON.stringify({ id: action.id }) });
        if (response.status === true) {
            yield put(removeMerchantSucceeded(action.id));
        } else {
            throw new Error('Merchant remove failed');
        }
    } catch (e) {
        // TODO
        yield put(removeMerchantSucceeded(action.id));
    }
    return true;
}
function* sagaRemoveMerchant() {
    yield takeLatest(REMOVE_MERCHANT, removeMerchant);
}


function* updateMerchant(action) {
    try {
        const response = yield fetch('merchant/update', { method: 'POST', body: JSON.stringify({ id: action.id, data: action.data }) });
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
