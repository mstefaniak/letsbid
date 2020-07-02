import { State } from './index';

export const getMerchants = (state: State) => Object.values(state);

export const getBids = (state: State, id: string) => state[id].bids;
