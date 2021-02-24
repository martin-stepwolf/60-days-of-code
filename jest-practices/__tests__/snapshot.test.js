import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Take an snapshot', () => {
    test('Snapshot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('This is going to fail always', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() * 20),
        }
        expect(user).toMatchSnapshot();
    });

    test('Implement an exception', () => {
        const user = {
            id: Math.floor(Math.random() * 20),
            name: "Martín"
        }
        expect(user).toMatchSnapshot({
            id:  expect.any(Number)
        });
    });

});