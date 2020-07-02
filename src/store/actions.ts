import { Merchant } from '../types';

export const SET_MERCHANTS = 'SET-MERCHANTS';
export function setMerchants(list: Array<Merchant>) {
    return <const>{
        type: SET_MERCHANTS,
        list,
    };
};

export const ADD_MERCHANT = 'ADD-MERCHANT';
export function addMerchant(data: Merchant) {
    return <const>{
        type: ADD_MERCHANT,
        data,
    };
};

export const ADD_MERCHANT_SUCCEEDED = 'ADD-MERCHANT-SUCCEEDED';
export function addMerchantSucceeded(data: Merchant) {
    return <const>{
        type: ADD_MERCHANT_SUCCEEDED,
        data,
    };
};

export const LOAD_MERCHANTS = 'LOAD-MERCHANTS';
export function loadMerchants() {
    return <const>{
        type: LOAD_MERCHANTS,
    };
};

export const REMOVE_MERCHANT = 'REMOVE-MERCHANT';
export function removeMerchant(id: string) {
    return <const>{
        type: REMOVE_MERCHANT,
        id,
    };
};

export const REMOVE_MERCHANT_SUCCEEDED = 'REMOVE-MERCHANT-SUCCEEDED';
export function removeMerchantSucceeded(id: string) {
    return <const>{
        type: REMOVE_MERCHANT_SUCCEEDED,
        id,
    };
};

export const UPDATE_MERCHANT = 'UPDATE-MERCHANT';
export function updateMerchant(id: string, data: Merchant) {
    return <const>{
        type: UPDATE_MERCHANT,
        id,
        data,
    };
};

export const UPDATE_MERCHANT_SUCCEEDED = 'UPDATE-MERCHANT-SUCCEEDED';
export function updateMerchantSucceeded(id: string, data: Merchant) {
    return <const>{
        type: UPDATE_MERCHANT_SUCCEEDED,
        id,
        data,
    };
};

export type ActionTypes =
    | ReturnType<typeof setMerchants>
    | ReturnType<typeof updateMerchant>
    | ReturnType<typeof updateMerchantSucceeded>
    | ReturnType<typeof addMerchant>
    | ReturnType<typeof addMerchantSucceeded>
    | ReturnType<typeof loadMerchants>
    | ReturnType<typeof removeMerchant>
    | ReturnType<typeof removeMerchantSucceeded>;
