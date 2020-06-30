import { fromJS } from 'immutable';
import { put, takeLatest, all, fork } from 'redux-saga/effects';

import { setMerchants, loadMerchantsFailed, LOAD_MERCHANTS, ADD_MERCHANT, addMerchantFailed, addMerchantSucceeded } from './actions';

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
            },
            2: {
                id: 2,
                firstname: 'John',
                lastname: 'Smith',
                email: 'john.smith2@gmail.com',
                avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
                phone: '+183761873'
            },
        }
        yield put(setMerchants(fromJS(response)));
    } catch (e) {
        yield put(loadMerchantsFailed(e.message));
    }
    return true;
}
function* sagaLoadMerchants() {
    yield takeLatest(LOAD_MERCHANTS, loadMerchants);
}


function* addMerchants(action) {
    try {
        const response = yield fetch('merchant/add', { method: 'PUT', body: JSON.stringify(action.data) });
        if (response.status === true) {
            yield put(addMerchantSucceeded(action.data));
        } else {
            throw new Error('Merchant add failed');
        }
    } catch (e) {
        yield put(addMerchantSucceeded(action.data));
        yield put(addMerchantFailed(e.message));
    }
    return true;
}
function* sagaAddMerchant() {
    yield takeLatest(ADD_MERCHANT, addMerchants);
}

export default function* mainSaga() {
    yield all([
        fork(sagaLoadMerchants),
        fork(sagaAddMerchant),
    ]);
};
