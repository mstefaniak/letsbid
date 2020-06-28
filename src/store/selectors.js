import { Map } from 'immutable';

export const getMerchants = (state) =>
    state.get('merchants') || Map();

export const getBids = (state, id) =>
    state.getIn(['merchants', id]).get('bids');
