import { v4 as uuidv4 } from 'uuid';
import { Bids } from '../types';

const cars = [
    'Skoda Fabia',
    'BMW 116i',
    'Seat Ibiza',
    'Citroen C4 Picasso',
    'Aston Martin DB9',
    'Renault Modus',
    'Opel Astra',
    'BMW X5 M',
    'Mini Cooper S',
    'Kia Optima',
];

const getRandomNumber = (max: number): number => Math.floor(Math.random() * (max + 1));

const generateRandomBids = (max: number): Bids => {
    const size = getRandomNumber(10);
    return Array(size).fill({}).map(() => ({
        id: uuidv4(),
        carTitle: cars[getRandomNumber(9)],
        amount: getRandomNumber(5000),
        created: new Date(2020, 5, getRandomNumber(30)),
    }));
}

export { generateRandomBids, getRandomNumber };
