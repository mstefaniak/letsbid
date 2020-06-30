import { Map, List } from 'immutable';
import { v4 as uuidv4 } from 'uuid';

import {
    SET_MERCHANTS,
    ADD_MERCHANT_SUCCEEDED,
    REMOVE_MERCHANT_SUCCEEDED,
    UPDATE_MERCHANT_SUCCEEDED,
} from './actions';

const defaultState = Map({
    merchants: Map(),
});

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case SET_MERCHANTS: {
            return state.set('merchants', action.list);
        }

        case ADD_MERCHANT_SUCCEEDED: {
            const id = uuidv4();
            return state.setIn(['merchants', id], Map({ id, bids: List(), ...action.data }));
        }

        case REMOVE_MERCHANT_SUCCEEDED: {
            const id = String(action.id);
            return state.deleteIn(['merchants', id]);
        }

        case UPDATE_MERCHANT_SUCCEEDED: {
            const id = String(action.id);
            const path = ['merchants', id];
            const merchant = state.getIn(path);
            console.log(action, merchant);
            if (merchant) {
                return state.setIn(path, merchant.merge(Map({ ...action.data })));
            } else {
                return state;
            }
        }

        default: {
            return state;
        }
    }
};
