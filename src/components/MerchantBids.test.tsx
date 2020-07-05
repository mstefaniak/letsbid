import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MerchantBids from './MerchantBids';

window.matchMedia = window.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    };
};

afterEach(cleanup);

describe('MerchantBids', () => {
    it('should render bids list properly', () => {
        const bids = [
            {
                id: '1',
                carTitle: 'Tesla',
                amount: 1234,
                created: new Date(),
            },
        ];
        const { getByText } = render(
            <MerchantBids visible onClose={() => {}} bids={bids} />,
        );
        expect(getByText('Bids')).toBeInTheDocument();
        expect(getByText(bids[0].carTitle)).toBeInTheDocument();
        expect(getByText(`${bids[0].amount}€`)).toBeInTheDocument();
    });
});
