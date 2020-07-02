import { Map, List } from 'immutable';

export type BidJs = {
    id: string;
    carTitle: string;
    amount: number;
    created: Date;
};
export type Bid = Map<string, BidJs>;

export type Bids = List<Bid>;

export type Merchant = Map<string, {
    id: string;
    firstname: string;
    lastname: string;
    avatarUrl: string;
    email: string;
    phone: string;
    hasPremium: boolean;
    bids: Bids;
}>
