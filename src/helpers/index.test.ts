import { getRandomNumber, generateRandomBids } from './index';

describe('Helpers', () => {
    it('getRandomNumber should generate random number in given range', () => {
        const max = 10;
        for(let i = 0; i < max; i++) {
            expect(getRandomNumber(max)).toBeLessThanOrEqual(max);
        }
    });

    it('generateRandomBids should return random bids list', () => {
        const bids = [
            {
                id: '1',
                carTitle: 'Tesla',
                amount: 1234,
                created: new Date(),
            },
        ];
        const max = 5;
        const ids = generateRandomBids(max);
        expect(bids.length).toBeLessThanOrEqual(max);
    });
});
