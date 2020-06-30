import { Map, List } from 'immutable';
import { v4 as uuidv4 } from 'uuid';

import {
    SET_MERCHANTS,
    ADD_MERCHANT_SUCCEEDED,
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

        default: {
            return state;
        }
    }
};
