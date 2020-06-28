export const SET_MERCHANTS = 'SET-MERCHANTS';
export function setMerchants(list) {
    return {
        type: SET_MERCHANTS,
        list,
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
