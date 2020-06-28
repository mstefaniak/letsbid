import { Map } from 'immutable';

import {
    SET_MERCHANTS,
} from './actions';

const defaultState = Map({
    merchants: Map(),
});

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case SET_MERCHANTS: {
            return state.set('merchants', action.list);
        }

        default: {
            return state;
        }
    }
};
