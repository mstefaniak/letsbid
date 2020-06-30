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

export const ADD_MERCHANT_FAILED = 'ADD-MERCHANT-FAILED';
export function addMerchantFailed() {
    return {
        type: ADD_MERCHANT_FAILED,
    };
};

export const LOAD_MERCHANTS = 'LOAD-MERCHANTS';
export function loadMerchants() {
    return {
        type: LOAD_MERCHANTS,
    };
};

export const LOAD_MERCHANTS_FAILED = 'LOAD-MERCHANTS-FAILED';
export function loadMerchantsFailed(error) {
    return {
        type: LOAD_MERCHANTS_FAILED,
        error,
    };
};
