export const SET_MERCHANTS = 'SET-MERCHANTS';
export function setMerchants(list) {
    return {
        type: SET_MERCHANTS,
        list,
    };
};

export const ADD_MERCHANT = 'ADD-MERCHANT';
export function addMerchant(data) {
    return {
        type: ADD_MERCHANT,
        data,
    };
};

export const ADD_MERCHANT_SUCCEEDED = 'ADD-MERCHANT-SUCCEEDED';
export function addMerchantSucceeded(data) {
    return {
        type: ADD_MERCHANT_SUCCEEDED,
        data,
    };
};

export const LOAD_MERCHANTS = 'LOAD-MERCHANTS';
export function loadMerchants() {
    return {
        type: LOAD_MERCHANTS,
    };
};

export const REMOVE_MERCHANT = 'REMOVE-MERCHANT';
export function removeMerchant(id) {
    return {
        type: REMOVE_MERCHANT,
        id,
    };
};

export const REMOVE_MERCHANT_SUCCEEDED = 'REMOVE-MERCHANT-SUCCEEDED';
export function removeMerchantSucceeded(id) {
    return {
        type: REMOVE_MERCHANT_SUCCEEDED,
        id,
    };
};

export const UPDATE_MERCHANT = 'UPDATE-MERCHANT';
export function updateMerchant(id, data) {
    return {
        type: UPDATE_MERCHANT,
        id,
        data,
    };
};

export const UPDATE_MERCHANT_SUCCEEDED = 'UPDATE-MERCHANT-SUCCEEDED';
export function updateMerchantSucceeded(id, data) {
    return {
        type: UPDATE_MERCHANT_SUCCEEDED,
        id,
        data,
    };
};
