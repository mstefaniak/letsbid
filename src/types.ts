import { Map, List } from 'immutable';

export type Bid = Map<string, {
    id: string;
    carTitle: string;
    amount: number;
    created: string;
}>;

export type Merchant = Map<string, {
    id: string;
    firstname: string;
    lastname: string;
    avatarUrl: string;
    email: string;
    phone: string;
    hasPremium: boolean;
    bids: List<Bid>;
}>
