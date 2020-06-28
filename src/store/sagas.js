import { fromJS } from 'immutable';
import { put, takeLatest, all, fork } from 'redux-saga/effects';

import { setMerchants, loadMerchantsFailed, LOAD_MERCHANTS } from './actions';

function* loadMerchants() {
    try {
        // const response = yield fetch('merchants');
        const response = {
            1: {
                firstname: 'Jane',
                lastname: 'Smith',
                email: 'jane.smith@gmail.com',
                avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
            },
            2: {
                firstname: 'John',
                lastname: 'Smith',
                email: 'john.smith2@gmail.com',
                avatarUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairBun&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
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

export default function* mainSaga(): Generator {
    yield all([
        fork(sagaLoadMerchants),
    ]);
};
