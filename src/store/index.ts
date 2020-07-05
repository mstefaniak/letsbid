import { v4 as uuidv4 } from 'uuid';
import { Merchant } from '../types';
import { ActionTypes } from './actions';
import { generateRandomBids } from '../helpers';

import {
    SET_MERCHANTS,
    ADD_MERCHANT_SUCCEEDED,
    REMOVE_MERCHANT_SUCCEEDED,
    UPDATE_MERCHANT_SUCCEEDED,
} from './actions';

export type State = { [id: string]: Merchant };

const defaultState: State = {};

export default function reducer(state = defaultState, action: ActionTypes) {
    switch (action.type) {
        case SET_MERCHANTS: {
            return action.list;
        }

        case ADD_MERCHANT_SUCCEEDED: {
            const id = uuidv4();
            return {
                ...state,
                [id]: {
                    id,
                    ...action.data,
                    bids: generateRandomBids(10),
                },
            };
        }

        case REMOVE_MERCHANT_SUCCEEDED: {
            delete state[action.id];
            return state;
        }

        case UPDATE_MERCHANT_SUCCEEDED: {
            const { id, data } = action;
            const merchant = state[id];

            if (merchant) {
                return {
                    ...state,
                    [id]: {
                        ...state[id],
                        ...data,
                    }
                };
            } else {
                return state;
            }
        }

        default: {
            return state;
        }
    }
};
