export const getMerchants = (state) =>
    state.get('merchants');

export const getBids = (state, id) =>
    state.getIn(['merchants', id]).get('bids');
